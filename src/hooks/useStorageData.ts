import store from "store2";
import { IEpisode } from "../components/episodes";
import { IPodcast } from "../components/podcasts";
import { episodes_key, podcasts_key, expiration_key } from "./constants";

export interface Expiration {
  podcasts?: Date;
}

export const useStorageData = () => {
  const podcasts: IPodcast[] = store.get(podcasts_key);
  const episodes: IEpisode[] = store.get(episodes_key);
  const expiration: Expiration = store.get(expiration_key);

  return {
    podcasts: podcasts ?? [],
    episodes: episodes ?? [],
    expiration: {
      ...(expiration?.podcasts && { podcasts: new Date(expiration.podcasts) }),
    },
  };
};
