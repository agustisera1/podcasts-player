import { IPodcast } from "../components/podcasts";
import { IEpisode } from "../components/episodes";

/* Would be ideal have a real formatter that understands the API response. */
export const getPodcastPreviewData = (podcast: IPodcast) => ({
  id: podcast.id.attributes?.["im:id"],
  title: podcast["im:name"].label,
  author: podcast["im:artist"].label,
  image: podcast["im:image"][2].label, // Pick the highest res image
});

export const getPodcastClearData = (podcast: IPodcast) => ({
  /* TBD: Reduce data amount by selecting relevant keys only. */
  ...podcast,
});

export const getPodcastCardData = (podcast: IPodcast) => ({
  image: podcast["im:image"][2].label,
  title: podcast["im:name"].label,
  author: podcast["im:artist"].label,
  /* No description attribute within the data? */
  summary: podcast["summary"].label,
});

export const getEpisodeData = ({
  trackName,
  episodeUrl,
  releaseDate,
  trackTimeMillis,
}: IEpisode) => ({ trackName, episodeUrl, releaseDate, trackTimeMillis });
