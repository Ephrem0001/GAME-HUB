import React, { useState } from "react";
import { Grid, GridItem, Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TicTacToe from "./components/TicTacToe";
import Memory from "./components/Memory";

type GameKey = "tictactoe" | "memory";

function App() {
  const [game, setGame] = useState<GameKey>("tictactoe");
  const [resetKey, setResetKey] = useState(0);

  function handleReset() {
    // bump a key to force child reset if they use it
    setResetKey((k) => k + 1);
  }

  return (
    <Grid
      templateAreas={`
        "nav nav"
        "aside main"
      `}
      gridTemplateRows={"64px 1fr"}
      gridTemplateColumns={"220px 1fr"}
      gap={4}
      minH="100vh"
    >
      <GridItem area="nav">
        <Header onReset={handleReset} />
      </GridItem>

      <GridItem area="aside" bg="gray.50">
        <Sidebar onSelect={(k) => setGame(k as GameKey)} />
      </GridItem>

      <GridItem area="main" p={6}>
        <Box>
          {game === "tictactoe" && <TicTacToe key={resetKey} />}
          {game === "memory" && <Memory key={resetKey} />}
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
