import React from "react";
import { VStack, Button } from "@chakra-ui/react";

export default function Sidebar({ onSelect }: { onSelect: (key: string) => void }) {
  return (
    <VStack as="nav" gap={3} alignItems="stretch" p={4}>
      <Button onClick={() => onSelect("tictactoe")} colorScheme="purple">
        Tic Tac Toe
      </Button>
      <Button onClick={() => onSelect("memory")} colorScheme="orange">
        Memory (placeholder)
      </Button>
    </VStack>
  );
}
