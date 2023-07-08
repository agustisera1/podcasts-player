import { createContext } from "react";
import { IEpisode } from "../components/episodes";
import { IPodcast } from "../components/podcasts";
export interface IPodcasterContext {
  podcasts: IPodcast[];
  episodes: IEpisode[];
}

export const PodcasterContext = createContext<IPodcasterContext>({
  podcasts: [],
  episodes: [],
});
