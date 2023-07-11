import { fireEvent, screen } from "@testing-library/react";
import { PodcastsGrid } from "./PodcastsGrid";
import { podcastGridTestingIds } from "./constants";
import { mockPodcasts, renderWithRouter } from "../../testing";

jest.mock("../../hooks/usePodcasts", () => ({
  usePodcasts: () => ({
    podcasts: mockPodcasts,
    loading: false,
    error: null,
  }),
}));

describe("PodcastGrid", () => {
  const { gridContainer, filterContainer, gridItem, filterInput } =
    podcastGridTestingIds;
  it("Should render", () => {
    renderWithRouter(<PodcastsGrid />);
    /* Alternatively expect(...).toMatchSnapshot() */
    expect(screen.getByTestId(gridContainer)).toBeDefined();
    expect(screen.getByTestId(filterContainer)).toBeDefined();
    expect(screen.queryAllByTestId(gridItem).length).toEqual(100);
  });

  it("Should display only filtered podcasts according the filter changes", () => {
    renderWithRouter(<PodcastsGrid />);
    const input = screen.getByTestId(filterInput);
    /*  Preferable use user-event lib, but version 13.x
        has been deprecated and should be using 14 (Create react acpp sets up the project
        the 13.5 version). Will use fireEvent to prevent spend time with deps struggles for now.    
    */
    fireEvent.change(input, { target: { value: "Joe" } });
    expect(screen.queryAllByTestId(gridItem).length).toEqual(1);
    fireEvent.change(input, { target: { value: "New" } });
    expect(screen.queryAllByTestId(gridItem).length).toEqual(2);
    fireEvent.change(input, { target: { value: "some unexistent value" } });
    expect(screen.queryAllByTestId(gridItem).length).toEqual(0);
    expect(
      screen.getByText(`No matches with "some unexistent value"`)
    ).toBeInTheDocument();
  });
});
