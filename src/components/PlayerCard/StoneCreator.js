import React, { useState } from "react";

const STONE_SIDE_NO = 3;
const STONE_NUMBERS = [0, 1, 2, 3, 4, 5];

export default ({ onStoneUpdate, currentStoneSides = {} }) => {
  const [currentSide, setCurrentSide] = useState(0);

  const handleStoneUpdate = (value) => {
    const updatedStone = {
      ...currentStoneSides,
      [currentSide]: value
    };
    onStoneUpdate(updatedStone);
    setCurrentSide((prevState) => (prevState + 1) % STONE_SIDE_NO);
  };

  const handleClearSides = () => {
    setCurrentSide(0);
  };

  return (
    <div>
      <p>
        Stones:{" "}
        {Object.values(currentStoneSides).map((el, key) =>
          key + 1 === currentSide ? <u> {el} </u> : ` ${el} `
        )}
      </p>
      <button onClick={handleClearSides}>Clear</button>
      {STONE_NUMBERS.map((stone) => (
        <button onClick={() => handleStoneUpdate(stone)}>{stone}</button>
      ))}
    </div>
  );
};
