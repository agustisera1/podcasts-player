import { MouseEventHandler, FC } from "react";
import { useLinkClickHandler } from "react-router-dom";
import { Card, Image, Text } from "@chakra-ui/react";

import { IPodcast } from ".";

export const PreviewCard: FC<IPodcast> = ({
  id,
  title,
  image,
  author = "iTunes",
}) => {
  const linkHandler: MouseEventHandler = useLinkClickHandler(`/podcast/${id}`);
  return (
    <Card
      p={4}
      boxShadow="md"
      borderRadius={4}
      align="center"
      textAlign="center"
      _hover={{ cursor: "pointer" }}
      onClick={(e) => linkHandler(e)}
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
      <Text color="gray.600" mb={0}>
        Author: {author}
      </Text>
    </Card>
  );
};
