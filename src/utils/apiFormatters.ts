import { Podcast } from "../views/podcast";

export const getPodcastPreviewData = (podcast: Podcast) => ({
  title: podcast["im:name"].label,
  image: podcast["im:image"][2].label, // Pick the highest res image
});

export const getPodcastClearData = (podcast: Podcast) => ({
  // TBD: Reduce data amount by selecting relevant keys only.
  ...podcast,
});
