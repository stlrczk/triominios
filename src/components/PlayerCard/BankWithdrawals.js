import React from "react";

import { BANK_WITHDRAWALS } from "./constants";

export default ({ onWithdrawSelect, currentWithdraw }) => (
  <div className="bank">
    {Object.keys(BANK_WITHDRAWALS).map((withdrawCode) => (
      <button onClick={() => onWithdrawSelect(withdrawCode)}>
        {currentWithdraw === withdrawCode ? (
          <strong>{withdrawCode}</strong>
        ) : (
          withdrawCode
        )}
      </button>
    ))}
  </div>
);
