import { Card, Image, Text, Divider, Box } from "@chakra-ui/react";
import { usePodcast } from "../../hooks";

export const PodcastCard = () => {
  const { podcast } = usePodcast();

  return (
    <Card minH="550px" overflow="scroll" boxShadow="md" p={4} textAlign="left">
      <Box textAlign="center" p={4}>
        {podcast?.image ? (
          <Image
            borderRadius={12}
            src={podcast?.image}
            alt={`${podcast?.title} image`}
          />
        ) : (
          "Podcast image not available"
        )}
      </Box>
      <Divider />
      <Text fontWeight="bold" mb={1}>
        {podcast?.title || "Podcast preview not available"}
      </Text>
      <Text mt={0} mb={2}>
        by {podcast?.author || "Author not available"}
      </Text>
      <Divider />
      <Text fontWeight="bold" my={0}>
        Description:
      </Text>
      <Text>{podcast?.summary || "Description not available"}</Text>
    </Card>
  );
};
