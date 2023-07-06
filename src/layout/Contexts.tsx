import { createContext } from "react";

export interface IPodcasterContext {
  podcasts: any[];
  episodes: any[];
}

export const PodcasterContext = createContext<IPodcasterContext>({
  podcasts: [],
  episodes: [],
});
