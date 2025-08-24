import React from "react";
import { Flex, Heading, Spacer, Button } from "@chakra-ui/react";

export default function Header({ onReset }: { onReset?: () => void }) {
  return (
    <Flex as="header" align="center" p={4} bgColor="teal.500" color="white">
      <Heading size="md">Game Hub</Heading>
      <Spacer />
      {onReset && (
        <Button colorScheme="teal" variant="ghost" onClick={onReset}>
          Reset
        </Button>
      )}
    </Flex>
  );
}
