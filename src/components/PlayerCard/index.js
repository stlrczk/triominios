import React, { useState, useMemo } from "react";
import ScoreIndicator from "./ScoreIndicator";
import StoneCreator from "./StoneCreator";
import BonusPicker from "./BonusPicker";
import BankWithdrawals from "./BankWithdrawals";

import { BONUSES, BANK_WITHDRAWALS } from "./constants";

export default ({ name }) => {
  const [totalPlayerScore, setTotalPlayerScore] = useState(0);
  const [currentStone, setCurrentStone] = useState({});
  const [currentBonusKey, setCurrentBonusKey] = useState("nil");
  const [currentWithdraw, setCurrentWidthdraw] = useState("nil");

  const currentMoveScore = useMemo(() => {
    return (
      Object.values(currentStone).reduce((a, b) => a + b, 0) +
      BONUSES[currentBonusKey] +
      BANK_WITHDRAWALS[currentWithdraw]
    );
  }, [currentStone, currentBonusKey, currentWithdraw]);

  const submitMove = () => {
    setTotalPlayerScore(totalPlayerScore + currentMoveScore);
    setCurrentStone({});
    setCurrentBonusKey("nil");
    setCurrentWidthdraw("nil");
  };

  return (
    <div className="playerCard">
      <ScoreIndicator
        playerName={name}
        totalScore={totalPlayerScore}
        currentMoveScore={currentMoveScore}
      />
      <hr />
      <StoneCreator
        onStoneUpdate={(stoneValue) => setCurrentStone(stoneValue)}
        currentStoneSides={currentStone}
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
      <button className="submit" onClick={submitMove}>
        Submit
      </button>
    </div>
  );
};
