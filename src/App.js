import React from "react";
import PlayerCard from "./components/PlayerCard";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PlayerCard name="Player 1" />
      <PlayerCard name="Player 2" />
    </div>
  );
}
