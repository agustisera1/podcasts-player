import { renderHook, waitFor } from "@testing-library/react";
import { mockPodcasts, mockPodcastsRoughData } from "../testing";
import { usePodcasts, useStorageData } from ".";
import { genExpirationDate } from "../utils";

jest.mock("./useStorageData", () => ({
  useStorageData: jest.fn(),
}));

global.fetch = jest.fn();

describe("usePodcasts", () => {
  it("Should return the client stored podcasts if expired", async () => {
    (useStorageData as jest.Mock).mockReturnValue({
      podcasts: { podcasts: mockPodcasts, expiration: genExpirationDate(-1) },
    } as ReturnType<typeof useStorageData>);

    const { result } = renderHook(() => usePodcasts());

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    /* Reduce the amount of data */
    await waitFor(() => {
      const returned = result.current.podcasts.slice(0, 5).sort();
      const expected = mockPodcasts.slice(0, 5).sort();
      expect(returned).toEqual(expected);
    });
  });

  it("Should return the fetch the podcasts has no data stored in the storage", async () => {
    (useStorageData as jest.Mock).mockReturnValue({
      podcasts: { podcasts: [], expiration: genExpirationDate(-1) },
      podcasts_detail: [],
    } as ReturnType<typeof useStorageData>);

    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: () => ({
        feed: { entry: mockPodcastsRoughData },
      }),
    });

    const { result } = renderHook(() => usePodcasts());

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    await waitFor(() => {
      /* Reduce the amount of data */
      const returned = result.current.podcasts.slice(0, 5).sort();
      const expected = mockPodcasts.slice(0, 5).sort();
      expect(returned).toEqual(expected);
    });
  });

  it("Should not fetch if has stored podcasts and did not expire", async () => {
    (useStorageData as jest.Mock).mockReturnValue({
      podcasts: { podcasts: mockPodcasts, expiration: genExpirationDate(7) },
    } as ReturnType<typeof useStorageData>);

    global.fetch = jest.fn().mockReset();

    const { result } = renderHook(() => usePodcasts());

    await waitFor(() => {
      expect(global.fetch).not.toHaveBeenCalled();
    });

    await waitFor(() => {
      /* Reduce the amount of data */
      const returned = result.current.podcasts.slice(0, 5).sort();
      const expected = mockPodcasts.slice(0, 5).sort();
      expect(returned).toEqual(expected);
    });
  });
});
