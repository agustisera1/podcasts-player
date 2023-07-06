import { IPodcast } from "../components/podcasts";

/* Would be ideal have a real formatter that understands the API response. */
export const getPodcastPreviewData = (podcast: IPodcast) => ({
  id: podcast.id.attributes?.["im:id"],
  title: podcast["im:name"].label,
  image: podcast["im:image"][2].label, // Pick the highest res image
});

export const getPodcastClearData = (podcast: IPodcast) => ({
  /* TBD: Reduce data amount by selecting relevant keys only. */
  ...podcast,
});
