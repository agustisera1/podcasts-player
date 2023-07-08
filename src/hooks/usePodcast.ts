import { useParams } from "react-router-dom";
import { useStorageData } from "./useStorageData";

export const usePodcast = () => {
  const { pid } = useParams();
  /*  Edge case: The user arrives podcast/:id without having visited the main view
      (a shared link for instance), so storage is empty. That case we should fetch the podcast
      if (!storagePodcasts) ... 
   */
  const { podcasts: storagePodcasts } = useStorageData();
  return { podcast: storagePodcasts?.find(({ id }) => id === pid) ?? null };
};
