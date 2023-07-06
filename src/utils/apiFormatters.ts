import { Podcast } from "../views/podcast";

/* Would be ideal have a real formatter that understands the API response. */
export const getPodcastPreviewData = (podcast: Podcast) => ({
  id: podcast.id.attributes?.["im:id"],
  title: podcast["im:name"].label,
  image: podcast["im:image"][2].label, // Pick the highest res image
});

export const getPodcastClearData = (podcast: Podcast) => ({
  /* TBD: Reduce data amount by selecting relevant keys only. */
  ...podcast,
});
