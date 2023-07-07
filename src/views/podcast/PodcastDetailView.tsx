import { FC } from "react";
import { Flex } from "@chakra-ui/react";
import { PodcastCard } from "../../components/podcasts";
import { EpisodesList } from "../../components/episodes";

export const PodcastDetail: FC = () => (
  <Flex px={14} minH="650px" gap={12}>
    <Flex alignItems="start" flexDir="column" flexBasis="300px">
      <PodcastCard />
    </Flex>
    <Flex alignItems="start" flexDir="column" flex={1} bg="pink">
      <EpisodesList />
    </Flex>
  </Flex>
);
