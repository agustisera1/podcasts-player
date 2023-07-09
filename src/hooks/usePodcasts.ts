import store from "store2";
import { useState, useCallback, useEffect, useMemo } from "react";

import { IPodcastAPIObject, IPodcast } from "../components/podcasts";
import { Expiration, useStorageData } from ".";
import { getPodcastData } from "../utils";
import { expiration_key, podcasts_key } from "./constants";

/*
  This URL Could be configurable by passing params to the hook + using env vars.
  Not required for demo
*/
const podcastsApiURI =
  "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";

export const usePodcasts = () => {
  const [podcasts, setPodcasts] = useState<IPodcast[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { podcasts: storagePodcasts, expiration } = useStorageData();

  const shouldFetch = useMemo(() => {
    const expired = expiration?.podcasts
      ? expiration.podcasts < new Date()
      : false;

    return !storagePodcasts.length || expired;
  }, [expiration, storagePodcasts.length]);

  const getPodcasts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(podcastsApiURI).then((data) => data);

      if (response.ok) {
        const data = await response.json();
        const reducedData = (data.feed.entry as Array<IPodcastAPIObject>).map(
          getPodcastData
        );

        setPodcasts(reducedData);

        store(podcasts_key, reducedData);

        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 1);
        store(expiration_key, {
          ...expiration,
          podcasts: expirationDate,
        } as Expiration);
      } else throw new Error("Failed when loading podcasts");
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, [expiration]);

  useEffect(() => {
    if (shouldFetch) {
      getPodcasts();
    }
  }, [getPodcasts, shouldFetch]);

  return {
    podcasts: storagePodcasts ?? podcasts,
    loading,
    error,
  };
};
