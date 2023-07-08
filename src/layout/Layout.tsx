import { Divider } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";

import { Navbar } from "./Navbar";
import { PodcasterContext } from "./Contexts";
import { usePodcasts, useEpisodes } from "../hooks";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  /*
    Hydrate from storage podcasts and episodes if are available from the last 24hs.
    Then provide the data to the subtree.
  */
  const { podcasts } = usePodcasts();
  const { episodes } = useEpisodes();
  const data = { episodes, podcasts };

  return (
    <PodcasterContext.Provider value={data}>
      <Navbar />
      <Divider borderColor="#00A0DC" mt={0} mb={4} />
      {children}
    </PodcasterContext.Provider>
  );
};
