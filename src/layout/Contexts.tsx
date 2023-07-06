import { createContext } from "react";
import { Podcast } from "../views/podcast";
export interface IPodcasterContext {
  podcasts: Podcast[];
  episodes: any[];
}

export const PodcasterContext = createContext<IPodcasterContext>({
  podcasts: [],
  episodes: [],
});
