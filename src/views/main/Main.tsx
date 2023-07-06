import { FC } from "react";
import { Flex } from "@chakra-ui/react";
import { PodcastsGrid } from "../podcast";

export const Main: FC = () => (
  <Flex flexDir="column" px={14}>
    <PodcastsGrid />
  </Flex>
);
