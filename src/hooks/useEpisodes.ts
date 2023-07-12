import store from "store2";
import { useParams } from "react-router-dom";
import { useCallback, useState, useEffect } from "react";

import { IEpisode } from "../components/episodes";
import { StorageKeys } from "../hooks";
import { useStorageData } from "./useStorageData";
import { genExpirationDate, getEpisodeData } from "../utils";

export const useEpisodes = () => {
  const [episodes, setEpisodes] = useState<Array<IEpisode>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { pid } = useParams();
  const url = encodeURI(
    `https://itunes.apple.com/lookup?id=${pid}&media=podcast&entity=podcastEpisode&limit=20`
  );

  const { podcasts_detail: storedPodcasts } = useStorageData();
  const podcastDetail = storedPodcasts?.find(
    ({ podcastId }) => podcastId === pid
  );

  const alreadyStoredDetail = !!podcastDetail;
  const hasStoredPodcasts = !!storedPodcasts.length;
  const expired = podcastDetail ? podcastDetail.expiration < new Date() : true;

  const genStorePayload = useCallback(
    /*
      Takes a list of episodes, checks are stored within the local storage
      then saves them if they're not stored. (Updates or init the store)
    */
    (data: IEpisode[]) => {
      const item = {
        podcastId: pid || 'undefined',
        expiration: genExpirationDate(1),
        episodes: data,
      };

      if (!hasStoredPodcasts) return [item] /* Init the storage data */;
      else {
        const payload = [...storedPodcasts]; /* Add the episode to current */
        payload.push(item);
        return payload;
      }
    },
    [hasStoredPodcasts, pid, storedPodcasts]
  );

  const getPodcastDetail = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(url).then((data) => data);

      if (response.ok) {
        const data = await response.json();
        const formattedEpisodes = (data.results as Array<IEpisode>).map(
          getEpisodeData
        );
        setEpisodes(formattedEpisodes);
        store(StorageKeys.podcasts_detail, genStorePayload(formattedEpisodes));
      } else throw new Error("Failed when loading episodes | podcast detail");
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, [url, genStorePayload]);

  useEffect(() => {
    if (alreadyStoredDetail) return;
    if (expired || !hasStoredPodcasts) getPodcastDetail();
  }, [getPodcastDetail, expired, alreadyStoredDetail, hasStoredPodcasts]);

  return {
    episodes: podcastDetail
      ? podcastDetail.episodes.slice(1)
      : episodes.slice(1),
    loading,
    error,
  };
};
