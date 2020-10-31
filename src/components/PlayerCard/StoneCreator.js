import React, { useState } from "react";

const STONE_SIDE_NO = 3;
const STONE_NUMBERS = [0, 1, 2, 3, 4, 5];
const INITIAL_SIDES = { 0: 0, 1: 0, 2: 0 };

export default ({ onStoneUpdate }) => {
  const [stoneSides, setStoneSides] = useState({});
  const [currentSide, setCurrentSide] = useState(0);

  const handleStoneUpdate = (value) => {
    const updatedStone = {
      ...stoneSides,
      [currentSide]: value
    };
    setStoneSides(updatedStone);
    onStoneUpdate(Object.values(updatedStone).reduce((a, b) => a + b, 0));
    setCurrentSide((prevState) => (prevState + 1) % STONE_SIDE_NO);
  };

  const handleClearSides = () => {
    setStoneSides(INITIAL_SIDES);
    setCurrentSide(0);
  };

  return (
    <div>
      <p>Stones: {Object.values(stoneSides).map((el) => ` ${el} `)}</p>
      <button onClick={handleClearSides}>Clear</button>
      {STONE_NUMBERS.map((stone) => (
        <button onClick={() => handleStoneUpdate(stone)}>{stone}</button>
      ))}
    </div>
  );
};
