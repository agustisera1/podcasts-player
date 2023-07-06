import { MouseEventHandler } from "react";
import { useLinkClickHandler } from "react-router-dom";
import { Card, Image, Text } from "@chakra-ui/react";

import { PodcastPreview } from "..";

export const PreviewCard = ({
  id,
  title,
  image,
  author = "iTunes",
}: PodcastPreview) => {
  const linkHandler: MouseEventHandler = useLinkClickHandler(`/podcast/${id}`);
  return (
    <Card
      onClick={(e) => linkHandler(e)}
      p={4}
      boxShadow="md"
      borderRadius={4}
      align="center"
      textAlign="center"
      _hover={{ cursor: "pointer" }}
    >
      <Image
        src={image}
        boxSize="100px"
        borderRadius="full"
        alt={`${title} podcast image`}
      />
      <Text fontWeight="bold" mb={0}>
        {title}
      </Text>

      {/* Fallbacking to iTunes, author prop is not available in the entries from api data */}
      <Text mb={0}>Author: {author}</Text>
    </Card>
  );
};
