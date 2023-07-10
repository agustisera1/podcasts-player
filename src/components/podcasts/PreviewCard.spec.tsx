import { screen, fireEvent } from "@testing-library/react";
import { PreviewCard } from "./PreviewCard";
import { mockPodcasts, renderWithRouter } from "../../testing";
it("Should navigate to the podcast id when clicking the podcast preview", async () => {
  const podcast = mockPodcasts[0];
  const { id } = podcast;

  renderWithRouter(<PreviewCard {...podcast} />);
  fireEvent.click(screen.getByTestId(`card-${id}`));

  expect(window.location.href).toMatch(`/podcast/${id}`);
});
