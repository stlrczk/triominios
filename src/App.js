import React, { useEffect, useCallback } from "react";
import NoSleep from "nosleep.js";
import PlayerCard from "./components/PlayerCard";

import "./styles.css";

let noSleep = new NoSleep();

export default function App() {
  const enableNoSleep = useCallback(() => {
    document.removeEventListener("click", enableNoSleep, false);
    noSleep.enable();
  }, []);

  useEffect(() => {
    document.addEventListener("click", enableNoSleep, false);
    return () => {
      document.removeEventListener("click", enableNoSleep);
    };
  }, []);
  return (
    <div className="App">
      <PlayerCard name="Player 1" />
      <PlayerCard name="Player 2" />
    </div>
  );
}
