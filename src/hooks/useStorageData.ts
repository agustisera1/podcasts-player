import store from 'store2';
import { Podcast } from '../views/podcast';
import { podcasts_key } from './constants';

export const useStorageData = () => {
  const podcasts: Podcast[] = store.get(podcasts_key);

  return {
    podcasts: podcasts ?? [],
    episodes: [],
  };
};
