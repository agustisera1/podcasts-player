import store from 'store2';
import { useState, useCallback, useEffect } from "react";

import { IPodcast } from "../components/podcasts";
import { useStorageData } from ".";
import { getPodcastClearData } from '../utils';
import { podcasts_key } from './constants';

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

  const { podcasts: storagePodcasts } = useStorageData();

  const getPodcasts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(podcastsApiURI).then((data) => data);

      if (response.ok) {
        const data = await response.json();
        /* TBD: Format before store, reduce data amount to keep required values only. (as useEpisodes implementation) */
        setPodcasts(data.feed.entry);
        store(podcasts_key, (data.feed.entry as Array<IPodcast>).map(getPodcastClearData));
      } else throw new Error("Failed when loading podcasts");

    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!storagePodcasts.length) {
      getPodcasts();
    }
  }, [getPodcasts, storagePodcasts.length]);

  return {
    podcasts: storagePodcasts ?? podcasts,
    loading,
    error,
  };
};
