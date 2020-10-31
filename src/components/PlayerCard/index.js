import React, { useState, useMemo } from "react";
import ScoreIndicator from "./ScoreIndicator";
import StoneCreator from "./StoneCreator";
import BonusPicker from "./BonusPicker";
import BankWithdrawals from "./BankWithdrawals";

import { BONUSES, BANK_WITHDRAWALS } from "./constants";

export default () => {
  const [totalPlayerScore, setTotalPlayerScore] = useState(0);
  const [currentStoneValue, setCurrentStoneValue] = useState(0);
  const [currentBonusKey, setCurrentBonusKey] = useState("nil");
  const [currentWithdraw, setCurrentWidthdraw] = useState("nil");

  const currentMoveScore = useMemo(() => {
    return (
      currentStoneValue +
      BONUSES[currentBonusKey] +
      BANK_WITHDRAWALS[currentWithdraw]
    );
  }, [currentStoneValue, currentBonusKey, currentWithdraw]);

  const submitMove = () => {
    setTotalPlayerScore(totalPlayerScore + currentMoveScore);
    setCurrentStoneValue(0);
    setCurrentBonusKey("nil");
    setCurrentWidthdraw("nil");
  };

  return (
    <div>
      <h1>Player Card component</h1>
      <ScoreIndicator
        totalScore={totalPlayerScore}
        currentMoveScore={currentMoveScore}
      />
      <hr />
      <StoneCreator
        onStoneUpdate={(stoneValue) => setCurrentStoneValue(stoneValue)}
      />
      <hr />
      <BonusPicker
        onBonusSelect={(bonusCode) => setCurrentBonusKey(bonusCode)}
        currentBonus={currentBonusKey}
      />
      <hr />
      <BankWithdrawals
        onWithdrawSelect={(withdrawCode) => setCurrentWidthdraw(withdrawCode)}
        currentWithdraw={currentWithdraw}
      />
      <hr />
      <button onClick={submitMove}>Submit</button>
    </div>
  );
};
