import { createContext, FC, PropsWithChildren } from "react";
import { usePodcasts } from "../hooks";
import { useEpisodes } from "../hooks/useEpisodes";

export const PodcasterContext = createContext({
  podcasts: [],
  episodes: [],
});

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  // Hydrate from storage podcasts and episodes if are available from the last 24hs.
  // Then enable its data to the entire subtree.
  const { podcasts } = usePodcasts();
  const { episodes } = useEpisodes();

  const data = { episodes, podcasts };

  return (
    <PodcasterContext.Provider value={data}>
      {children}
    </PodcasterContext.Provider>
  );
};
