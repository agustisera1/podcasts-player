import { Flex } from "@chakra-ui/react";
import { PodcastsGrid } from "../podcast";

export const Main = () => {
  return (
    <Flex flexDir="column" px={14}>
      <PodcastsGrid />
    </Flex>
  );
};
