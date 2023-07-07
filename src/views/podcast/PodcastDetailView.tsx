import { FC } from "react";
import { Flex } from "@chakra-ui/react";
import { PodcastCard } from "../../components/podcasts";
import { EpisodesList } from "../../components/episodes";

export const PodcastDetail: FC = () => (
  <Flex px={14} minH="650px">
    <Flex alignItems="start" flexDir="column" flexBasis="30%" bg="red">
      <PodcastCard />
    </Flex>
    <Flex alignItems="start" flexDir="column" flexBasis="70%" bg="pink">
      <EpisodesList />
    </Flex>
  </Flex>
);
