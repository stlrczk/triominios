import React from "react";

import { BONUSES } from "./constants";

export default ({ onBonusSelect, currentBonus }) => {
  return (
    <div>
      {Object.keys(BONUSES).map((bonusCode) => (
        <button onClick={() => onBonusSelect(bonusCode)}>
          {currentBonus === bonusCode ? (
            <strong>{bonusCode}</strong>
          ) : (
            bonusCode
          )}
        </button>
      ))}
    </div>
  );
};
