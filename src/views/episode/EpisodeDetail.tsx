import { Flex } from "@chakra-ui/react";
import { PodcastCard } from "../../components/podcasts";
import { EpisodeDetailCard } from "../../components/episodes";

export const EpisodeDetail = () => (
  <Flex px={14} gap={12} mb={12}>
    <Flex alignItems="start" flexDir="column" flexBasis="300px">
      <PodcastCard />
    </Flex>
    <Flex alignItems="start" flex={1} gap={4}>
      <EpisodeDetailCard />
    </Flex>
  </Flex>
);
