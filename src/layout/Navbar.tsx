import { FC, MouseEventHandler } from "react";
import { useLinkClickHandler } from "react-router-dom";
import { Flex, Text, Spinner } from "@chakra-ui/react";
import { usePodcasts } from "../hooks";

export const Navbar: FC = () => {
  const navigateToHome: MouseEventHandler = useLinkClickHandler(`/`);
  const { loading } = usePodcasts();

  return (
    <Flex px={14} justifyContent="space-between">
      <Text
        _hover={{ cursor: "pointer" }}
        onClick={navigateToHome}
        fontWeight="bold"
        fontSize="1.3rem"
        color="#00A0DC"
      >
        Podcaster
      </Text>
      {loading && (
        <Spinner
          alignSelf="center"
          thickness={"4px"}
          speed="0.65s"
          emptyColor="gray.200"
          color="#00A0DC"
          size="md"
        />
      )}
    </Flex>
  );
};
