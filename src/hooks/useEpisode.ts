import { useParams } from "react-router-dom";
import { useStorageData } from "./useStorageData";

export const useEpisode = () => {
  /*  Edge case: The user arrives ../episode/:id without having visited the main view
      (a shared link for instance), so storage is empty. That case we should fetch the episode
      if (!storageEpisodes) ... 
   */
  const { eid } = useParams();
  const { episodes: storageEpisodes } = useStorageData();

  return {
    episode:
      storageEpisodes?.find(({ trackId }) => String(trackId) === eid) ?? null,
  };
};
