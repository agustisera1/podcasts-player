import { useCallback, useMemo, FC } from "react";
import {
  Card,
  SimpleGrid,
  GridItem,
  Image,
  Text,
  Heading,
} from "@chakra-ui/react";

import { usePodcasts } from "../../../hooks";
import { getPodcastPreviewData } from "../../../utils";

interface PodcastPreview {
  title: string;
  image: string;
  author?: string;
}

const PreviewCard = ({ title, image, author = "iTunes" }: PodcastPreview) => (
  <Card
    boxShadow="md"
    borderRadius={4}
    p={4}
    align="center"
    _hover={{ cursor: "pointer" }}
  >
    <Image
      src={image}
      boxSize="100px"
      borderRadius="full"
      alt={`${title} podcast image`}
    />
    <Heading textAlign="center" as="h4" mb={0}>
      {title}
    </Heading>

    {/* Fallbacking to iTunes, author prop is not available in the entries from api data */}
    <Text mb={0}>Author: {author}</Text>
  </Card>
);

export const PodcastsGrid: FC = () => {
  const { podcasts: roughData } = usePodcasts();
  const podcasts = useMemo(
    () => roughData.map(getPodcastPreviewData),
    [roughData]
  );

  const Grid = useCallback(() => {
    return (
      <SimpleGrid
        px={12}
        columns={4}
        spacingX={8}
        spacingY={15}
        maxH={500}
        overflow="auto"
      >
        {podcasts.map((podcast, idx) => (
          <GridItem key={idx}>
            <PreviewCard {...podcast} />
          </GridItem>
        ))}
      </SimpleGrid>
    );
  }, [podcasts]);

  return <Grid />;
};
