import { FC } from "react";
import { Flex } from "@chakra-ui/react";
import { PodcastsGrid } from "../../components/podcasts";

export const MainView: FC = () => (
  <Flex flexDir="column" px={14}>
    <PodcastsGrid />
  </Flex>
);
