import { FC } from "react";
import { Flex, Text, Box, Heading } from "@chakra-ui/react";

import { MediaPlayer } from ".";
import { useEpisode } from "../../hooks/useEpisode";

export const EpisodeDetailCard: FC = () => {
  const { episode } = useEpisode();

  return (
    <Flex flexWrap="wrap" boxShadow="md" p={4} flexGrow={1}>
      <Heading>{episode?.trackName ?? "Missing track name"}</Heading>
      <Box maxH="350px" overflow="scroll">
        <Text mt={0} fontStyle="italic">
          {episode?.description ?? "Missing track description"}
        </Text>
      </Box>
      {episode?.episodeUrl && <MediaPlayer src={episode.episodeUrl} />}
      {episode?.sponsors && (
        <Text fontStyle="italic">This episode is sponsored by: {episode.sponsors}</Text>
      )}
    </Flex>
  );
};
