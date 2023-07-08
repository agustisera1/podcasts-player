import { IPodcastAPIObject } from "../components/podcasts";
import { IEpisode } from "../components/episodes";

export const getPodcastData = (podcast: IPodcastAPIObject) => ({
  id: podcast.id.attributes?.["im:id"],
  title: podcast["im:name"].label,
  author: podcast["im:artist"].label,
  /* Pick the highest res image */
  image: podcast["im:image"][2].label,
  /* No description attribute within the data? */
  summary: podcast["summary"].label,
});

export const getEpisodeData = ({
  trackName,
  episodeUrl,
  releaseDate,
  trackTimeMillis,
  trackId,
  description,
}: IEpisode) => {
  return {
    trackName,
    episodeUrl,
    releaseDate,
    trackTimeMillis,
    trackId,
    description,
  };
};
