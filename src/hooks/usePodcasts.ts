import { useState } from "react";
import { useStorageData } from "./useStorageData";

export const usePodcasts = () => {
  const [podcasts, setPodcasts] = useState([]);
  const { podcasts: storagePodcasts } = useStorageData();

  if (!storagePodcasts) {
    try {
      // Fetch from API
      setPodcasts([]);
    } catch {
      // Do error handling
      setPodcasts([]);
    }
  }

  return {
    podcasts,
  };
};
