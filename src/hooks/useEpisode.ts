import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { IEpisode } from "../components/episodes";
import { useStorageData } from "./useStorageData";

export const useEpisode = () => {
  const { eid, pid } = useParams();
  const { podcasts_detail: podcastsDetail } = useStorageData();

  const podcast = useMemo(
    () => podcastsDetail.find(({ podcastId }) => podcastId === pid),
    [pid, podcastsDetail]
  );

  const episode = useMemo(
    () => podcast?.episodes.find(({ trackId }) => eid === String(trackId)),
    [eid, podcast]
  );

  return {
    episode:
      episode ??
      ({ description: "", trackName: "Episode not found" } as IEpisode),
  };
};
