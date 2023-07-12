import store from "store2";
import { IEpisode } from "../components/episodes";
import { IPodcast } from "../components/podcasts";

export enum StorageKeys {
  podcasts = "podcasts",
  podcasts_detail = "podcasts_detail",
}
interface StoragePodcasts {
  podcasts: IPodcast[];
  expiration: Date;
}
interface StoragePodcastDetail {
  episodes: IEpisode[];
  expiration: Date;
  podcastId: string;
}

export const useStorageData = () => {
  const podcasts: StoragePodcasts = store.get(StorageKeys.podcasts);
  const podcasts_detail: StoragePodcastDetail[] = store.get(
    StorageKeys.podcasts_detail
  );

  return {
    podcasts: podcasts ?? { podcasts: [], expiration: null },
    podcasts_detail: podcasts_detail ?? [],
  };
};
