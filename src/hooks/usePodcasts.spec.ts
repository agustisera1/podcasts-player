import { renderHook, waitFor } from "@testing-library/react";
import { mockPodcasts, mockPodcastsRoughData } from "../testing";
import { usePodcasts, useStorageData } from ".";

jest.mock("./useStorageData", () => ({
  useStorageData: jest.fn(),
}));

global.fetch = jest.fn();

describe("usePodcasts", () => {
  it("Should return the client stored podcasts if expired", async () => {
    const date = new Date();
    /* Ensure oudated storage */
    date.setDate(date.getDate() - 7);
    (useStorageData as jest.Mock).mockReturnValue({
      podcasts: mockPodcasts,
      expiration: { podcasts: date },
    } as ReturnType<typeof useStorageData>);

    const { result } = renderHook(() => usePodcasts());

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalled();
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
      podcasts: [] as any[],
      expiration: {},
    } as ReturnType<typeof useStorageData>);

    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: () => ({
        feed: { entry: mockPodcastsRoughData },
      }),
    });

    const { result } = renderHook(() => usePodcasts());

    expect(global.fetch).toHaveBeenCalled();

    await waitFor(() => {
      /* Reduce the amount of data */
      const returned = result.current.podcasts.slice(0, 5).sort();
      const expected = mockPodcasts.slice(0, 5).sort();
      expect(returned).toEqual(expected);
    });
  });

  it("Should not fetch if has stored podcasts and did not expire", async () => {
    const date = new Date();
    /* Prevent expiration */
    date.setDate(date.getDate() + 7);
    (useStorageData as jest.Mock).mockReturnValue({
      podcasts: mockPodcasts,
      expiration: { podcasts: date },
    } as ReturnType<typeof useStorageData>);

    global.fetch = jest.fn().mockReset();

    const { result } = renderHook(() => usePodcasts());

    expect(global.fetch).not.toHaveBeenCalled();

    await waitFor(() => {
      /* Reduce the amount of data */
      const returned = result.current.podcasts.slice(0, 5).sort();
      const expected = mockPodcasts.slice(0, 5).sort();
      expect(returned).toEqual(expected);
    });
  });
});
