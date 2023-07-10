import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useStorageData } from "./useStorageData";

export const useEpisode = () => {
  const { eid } = useParams();
  const { episodes: storageEpisodes } = useStorageData();

  const episode = useMemo(
    () =>
      storageEpisodes?.find(({ trackId }) => String(trackId) === eid) ?? null,
    [eid, storageEpisodes]
  );

  return { episode };
};
