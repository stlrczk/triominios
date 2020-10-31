import React from "react";
import classnames from "classnames";

import { BANK_WITHDRAWALS } from "./constants";

export default ({ onWithdrawSelect, currentWithdraw }) => (
  <div className="bank">
    {Object.keys(BANK_WITHDRAWALS).map((withdrawCode) => (
      <button
        className={classnames({
          active: currentWithdraw === withdrawCode
        })}
        onClick={() => onWithdrawSelect(withdrawCode)}
      >
        {withdrawCode}
      </button>
    ))}
  </div>
);
