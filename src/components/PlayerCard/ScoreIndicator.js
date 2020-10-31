import React from "react";

export default ({ totalScore, currentMoveScore }) => (
  <div>
    <h1>
      Total: {totalScore}
      {currentMoveScore ? (
        <small>{`, current move: ${currentMoveScore}`}</small>
      ) : null}
    </h1>
  </div>
);
