import { useParams } from "react-router-dom";
import { useStorageData } from "./useStorageData";

export const usePodcast = () => {
  const { pid } = useParams();
  const { podcasts: storagePodcasts } = useStorageData();
  return { podcast: storagePodcasts?.find(({ id }) => id === pid) ?? null };
};
