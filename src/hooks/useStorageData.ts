import store from 'store2';
import { IPodcast } from '../components/podcasts';
import { podcasts_key } from './constants';

export const useStorageData = () => {
  const podcasts: IPodcast[] = store.get(podcasts_key);

  return {
    podcasts: podcasts ?? [],
    episodes: [],
  };
};
