import React, { useState } from "react";
import { Box, SimpleGrid, Button, Text, VStack } from "@chakra-ui/react";

type Player = "X" | "O" | null;

function calculateWinner(board: Player[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

export default function TicTacToe() {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(board);
  const status = winner ? `Winner: ${winner}` : `Next: ${xIsNext ? "X" : "O"}`;

  function handleClick(i: number) {
    if (board[i] || winner) return;
    const next = board.slice();
    next[i] = xIsNext ? "X" : "O";
    setBoard(next);
    setXIsNext(!xIsNext);
  }

  function reset() {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
    <VStack gap={4} alignItems="stretch">
      <Box>
        <Text fontSize="lg" fontWeight="semibold">
          {status}
        </Text>
      </Box>
      <SimpleGrid columns={3} gap={2} width="240px">
        {board.map((cell, i) => (
          <Button key={i} height="72px" onClick={() => handleClick(i)}>
            {cell}
          </Button>
        ))}
      </SimpleGrid>
      <Button onClick={reset} colorScheme="blue" w="fit-content">
        Reset
      </Button>
    </VStack>
  );
}
