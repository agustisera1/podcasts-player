import store from "store2";
import { IEpisode } from "../components/episodes";
import { IPodcast } from "../components/podcasts";
export interface Expiration {
  podcasts?: Date;
}

export enum StorageKeys {
  podcasts = "podcasts",
  episodes = "episodes",
  expiration = "expiration",
}

export const useStorageData = () => {
  const podcasts: IPodcast[] = store.get(StorageKeys.podcasts);
  const episodes: IEpisode[] = store.get(StorageKeys.episodes);
  const expiration: Expiration = store.get(StorageKeys.expiration);

  return {
    podcasts: podcasts ?? [],
    episodes: episodes ?? [],
    expiration: {
      ...(expiration?.podcasts && { podcasts: new Date(expiration.podcasts) }),
    },
  };
};
