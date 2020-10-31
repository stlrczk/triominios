import React from "react";

export default ({ totalScore, currentMoveScore }) => (
  <div>
    Total: {totalScore}
    {currentMoveScore ? `, current move: ${currentMoveScore}` : null}
  </div>
);
