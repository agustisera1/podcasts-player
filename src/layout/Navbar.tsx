import { FC } from 'react';
import { Flex, Text } from "@chakra-ui/react";

export const Navbar: FC = () => (
  /* To be completed.
   To enhance Navbar with navigation logic should be moved within the router context. */
  <Flex px={14}>
    <Text fontWeight="bold" fontSize="1.3rem" color="#00A0DC">
      Podcaster
    </Text>
  </Flex>
);
