import { createContext } from "react";
import { IPodcast } from "../components/podcasts";
export interface IPodcasterContext {
  podcasts: IPodcast[];
  episodes: any[];
}

export const PodcasterContext = createContext<IPodcasterContext>({
  podcasts: [],
  episodes: [],
});
