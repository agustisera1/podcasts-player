import { useMemo, FC, useState } from "react";
import {
  SimpleGrid,
  GridItem,
  Flex,
  Badge,
  Box,
  Center,
  Spinner,
} from "@chakra-ui/react";

import { usePodcasts } from "../../hooks";
import { getPodcastPreviewData } from "../../utils";
import { PreviewCard, IPodcastPreview } from ".";

export const PodcastsGrid: FC = () => {
  const [filterTerm, setFilterTerm] = useState("");
  const { podcasts: roughData, loading } = usePodcasts();

  const podcasts = useMemo(
    () =>
      roughData
        .map(getPodcastPreviewData)
        .filter(({ title }: IPodcastPreview) => {
          const regex = new RegExp(filterTerm, "gi");
          return title.match(regex);
        }),
    [roughData, filterTerm]
  );

  if (loading)
    return (
      <Center height={400} pt={8}>
        <Spinner
          thickness={"4px"}
          speed="0.65s"
          emptyColor="gray.200"
          color="#00A0DC"
          size="xl"
        />
      </Center>
    );

  return (
    <>
      <Flex justify="flex-end" pb={4}>
        <Box height={7}>
          <Badge
            variant="solid"
            borderRadius={4}
            colorScheme="linkedin"
            fontSize="1.5rem"
            mr={6}
          >
            {podcasts.length}
          </Badge>
        </Box>

        <Box height={7}>
          {/* Lib issue with Chakra input */}
          <input
            style={{ height: "23px", width: "250px" }}
            placeholder="Filter podcasts"
            onChange={(e) => setFilterTerm(e.target.value)}
          />
        </Box>
      </Flex>

      {podcasts.length ? (
        <Flex>
          <SimpleGrid
            pt={8}
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
        </Flex>
      ) : (
        <Center height={400} pt={8}>
          No matches with "{filterTerm}"
        </Center>
      )}
    </>
  );
};
