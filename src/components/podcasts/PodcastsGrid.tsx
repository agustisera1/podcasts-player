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
import { IPodcast, PreviewCard } from ".";
import { podcastGridTestingIds as tids } from "./constants";

export const PodcastsGrid: FC = () => {
  const [filterTerm, setFilterTerm] = useState("");
  const { podcasts: allPodcasts, loading } = usePodcasts();

  const podcasts = useMemo(
    () =>
      allPodcasts.filter(({ title }: IPodcast) => {
        const regex = new RegExp(filterTerm, "gi");
        return title.match(regex);
      }),
    [allPodcasts, filterTerm]
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
      <Flex data-testid={tids.filterContainer} justify="flex-end" pb={4}>
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
            data-testid={tids.filterInput}
            style={{ height: "23px", width: "250px" }}
            placeholder="Filter podcasts"
            onChange={(e) => setFilterTerm(e.target.value)}
          />
        </Box>
      </Flex>

      {podcasts.length ? (
        <Flex data-testid={tids.gridContainer}>
          <SimpleGrid
            pt={8}
            columns={4}
            spacingX={8}
            spacingY={15}
            maxH={500}
            overflow="auto"
          >
            {podcasts.map((podcast, idx) => (
              <GridItem data-testid={tids.gridItem} key={idx}>
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
