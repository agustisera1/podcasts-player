import store from 'store2';
import { IEpisode } from '../components/episodes';
import { IPodcast } from '../components/podcasts';
import { episodes_key, podcasts_key } from './constants';

export const useStorageData = () => {
  const podcasts: IPodcast[] = store.get(podcasts_key);
  const episodes: IEpisode[] = store.get(episodes_key);

  return {
    podcasts: podcasts ?? [],
    episodes: episodes ?? [],
  };
};
