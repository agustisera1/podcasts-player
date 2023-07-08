import { MouseEventHandler } from "react";
import {
  Flex,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Heading,
  Spinner,
  Center,
} from "@chakra-ui/react";

import { IEpisode } from "./types";
import { useEpisodes } from "../../hooks";
import { useLocation, useLinkClickHandler } from "react-router-dom";
import { convertMsToMinutes, formatDate } from "../../utils";

const ListItem = ({
  trackName,
  trackTimeMillis,
  releaseDate,
  trackId,
}: IEpisode) => {
  const { pathname } = useLocation();
  const date = formatDate(releaseDate);

  const linkHandler: MouseEventHandler = useLinkClickHandler(
    `${pathname}/episode/${trackId}`
  );
  return (
    <Tr
      _hover={{ cursor: "pointer", color: "#00A0DC" }}
      onClick={(e) => linkHandler(e)}
    >
      <Td>{trackName}</Td>
      <Td>{date}</Td>
      <Td isNumeric>{convertMsToMinutes(trackTimeMillis)}</Td>
    </Tr>
  );
};

export const EpisodesList = () => {
  const { episodes, loading, error } = useEpisodes();
  if (error) console.error({ error });

  return (
    <Flex flexWrap="wrap" gap={4} width="100%">
      <Flex flex={1} boxShadow="md">
        <Heading width="100%" my={0} p={4}>
          {error
            ? "Episodes count not available"
            : episodes.length
            ? `Episodes: ${episodes.length}`
            : "Loading"}
        </Heading>
      </Flex>

      <Flex py={4} height="550px" overflow="auto" width="100%" boxShadow="md">
        {loading ? (
          <Center height="350px" flex={1}>
            <Spinner
              thickness={"4px"}
              speed="0.65s"
              emptyColor="gray.200"
              color="#00A0DC"
              size="xl"
            />
          </Center>
        ) : (
          <Table variant="striped" colorScheme="gray">
            <Thead>
              <Tr>
                <Th>Title</Th>
                <Th>Date</Th>
                <Th isNumeric>Duration</Th>
              </Tr>
            </Thead>
            <Tbody>
              {episodes.map((episode, key) => (
                <ListItem {...episode} key={key} />
              ))}
            </Tbody>
          </Table>
        )}
      </Flex>
    </Flex>
  );
};
