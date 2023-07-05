import { createContext } from "react";

export interface PodcasterContextType {
  podcasts: any[];
  episodes: any[];
}

export const PodcasterContext = createContext<PodcasterContextType>({
  podcasts: [],
  episodes: [],
});
