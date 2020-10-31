import React from "react";

export default ({ playerName, totalScore, currentMoveScore }) => (
  <div className="scores">
    <p className="playerName">{playerName}</p>
    <h1 className="totalScore">{totalScore}</h1>
    <h2 className="currentMove">({currentMoveScore || 0})</h2>
  </div>
);
