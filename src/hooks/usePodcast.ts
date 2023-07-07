import { useParams } from "react-router-dom";
import { useStorageData } from "./useStorageData";
import { getPodcastCardData } from "../utils/apiFormatters";

export const usePodcast = () => {
  const { pid } = useParams();
  const { podcasts: storagePodcasts } = useStorageData();

  const podcast = storagePodcasts?.find(
    ({ id: { attributes } }) => attributes?.["im:id"] === pid
  );

  return { podcast: podcast ? getPodcastCardData(podcast) : null };
};
