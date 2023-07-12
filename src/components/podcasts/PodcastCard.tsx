import { MouseEventHandler, FC } from "react";
import { useLinkClickHandler, useParams } from "react-router-dom";
import { Card, Image, Text, Divider, Box, BoxProps } from "@chakra-ui/react";

import { usePodcast } from "../../hooks";

export const PodcastCard: FC = () => {
  const { podcast } = usePodcast();
  const { eid: episodeId } = useParams();

  const navigateToPodcastDetail: MouseEventHandler = useLinkClickHandler(
    `/podcast/${podcast?.id}`
  );

  const cardNavigationConfig = episodeId
    ? {
        _hover: { cursor: "pointer" },
        onClick: navigateToPodcastDetail,
      }
    : ({} as BoxProps);

  return (
    <Card minH="550px" overflow="scroll" boxShadow="md" p={4} textAlign="left">
      <Box {...cardNavigationConfig} textAlign="center" p={4}>
        {podcast?.image ? (
          <Image
            borderRadius={12}
            src={podcast.image}
            alt={`${podcast.title} image`}
          />
        ) : (
          "Podcast image not available"
        )}
      </Box>
      <Divider />
      <Box {...cardNavigationConfig}>
        <Text fontWeight="bold" mb={1}>
          {podcast?.title || "Podcast preview not available"}
        </Text>
        <Text mt={0} mb={2}>
          by {podcast?.author || "Author not available"}
        </Text>
      </Box>
      <Divider />
      <Text fontWeight="bold" my={0}>
        Description:
      </Text>
      <Text>{podcast?.summary || "Description not available"}</Text>
    </Card>
  );
};
