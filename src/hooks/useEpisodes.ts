import { useState } from "react";
import { useStorageData } from "./useStorageData";

export const useEpisodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const { episodes: storageEpisodes } = useStorageData();

  if (!storageEpisodes) {
    try {
      // Fetch from API
      setEpisodes([]);
    } catch {
      // Do error handling
      setEpisodes([]);
    }
  }

  return {
    episodes,
  };
};
