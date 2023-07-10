import store from "store2";
import { useParams } from "react-router-dom";
import { useCallback, useState, useEffect } from "react";

import { IEpisode } from "../components/episodes";
import { StorageKeys } from '../hooks'
import { useStorageData } from "./useStorageData";
import { getEpisodeData } from "../utils";

export const useEpisodes = () => {
  const [episodes, setEpisodes] = useState<Array<IEpisode>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { pid } = useParams();
  const { episodes: storageEpisodes } = useStorageData();

  const url = encodeURI(
    `https://itunes.apple.com/lookup?id=${pid}&media=podcast&entity=podcastEpisode&limit=20`
  );

  const getEpisodes = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(url).then((data) => data);

      if (response.ok) {
        const data = await response.json();
        const formattedEpisodes = (data.results as Array<IEpisode>).map(
          getEpisodeData
        );
        setEpisodes(formattedEpisodes);
        store(StorageKeys.episodes, formattedEpisodes);
      } else throw new Error("Failed when loading episodes");
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    if (pid) {
      /* TBD: Add 24hs. rule and prevent repeated fetching. */
      getEpisodes();
    }
  }, [getEpisodes, pid]);

  return {
    episodes: (storageEpisodes ?? episodes).slice(1),
    loading,
    error,
  };
};
