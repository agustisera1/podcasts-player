import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useStorageData } from "./useStorageData";

export const usePodcast = () => {
  const { pid } = useParams();
  const { podcasts: storagePodcasts } = useStorageData();

  const podcast = useMemo(
    () => storagePodcasts?.find(({ id }) => id === pid) ?? null,
    [pid, storagePodcasts]
  );
  return { podcast };
};
