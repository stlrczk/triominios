import React from "react";
import classnames from "classnames";

import { BONUSES } from "./constants";

export default ({ onBonusSelect, currentBonus }) => {
  return (
    <div className="bonus">
      {Object.keys(BONUSES).map((bonusCode) => (
        <button
          className={classnames({
            active: currentBonus === bonusCode
          })}
          onClick={() => onBonusSelect(bonusCode)}
        >
          {bonusCode}
        </button>
      ))}
    </div>
  );
};
