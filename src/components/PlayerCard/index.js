import React, { useState, useMemo } from "react";
import ScoreIndicator from "./ScoreIndicator";
import StoneCreator from "./StoneCreator";
import BonusPicker from "./BonusPicker";
import BankWithdrawals from "./BankWithdrawals";

import { BONUSES, BANK_WITHDRAWALS } from "./constants";

const getSavedTotalPlayerScore = (name) => {
  const savedUserTotal = localStorage.getItem(`user-${name}`);

  if (/\d/.test(savedUserTotal)) {
    return parseInt(savedUserTotal, 10);
  }
  return 0;
};

export default ({ name }) => {
  const [totalPlayerScore, setTotalPlayerScore] = useState(
    getSavedTotalPlayerScore(name)
  );
  const [currentStone, setCurrentStone] = useState({});
  const [currentBonusKey, setCurrentBonusKey] = useState("∅");
  const [currentWithdraw, setCurrentWidthdraw] = useState("∅");

  const currentMoveScore = useMemo(() => {
    return (
      Object.values(currentStone).reduce((a, b) => a + b, 0) +
      BONUSES[currentBonusKey] +
      BANK_WITHDRAWALS[currentWithdraw]
    );
  }, [currentStone, currentBonusKey, currentWithdraw]);

  const submitMove = () => {
    const newTotal = totalPlayerScore + currentMoveScore;
    localStorage.setItem(`user-${name}`, newTotal);
    setTotalPlayerScore(newTotal);
    setCurrentStone({});
    setCurrentBonusKey("∅");
    setCurrentWidthdraw("∅");
  };

  const handleReset = () => {
    localStorage.setItem(`user-${name}`, 0);
    setTotalPlayerScore(0);
    setCurrentStone({});
    setCurrentBonusKey("∅");
    setCurrentWidthdraw("∅");
  };

  return (
    <div className="playerCard">
      <ScoreIndicator
        playerName={name}
        totalScore={totalPlayerScore}
        currentMoveScore={currentMoveScore}
      />
      <StoneCreator
        onStoneUpdate={(stoneValue) => setCurrentStone(stoneValue)}
        currentStoneSides={currentStone}
      />
      <BonusPicker
        onBonusSelect={(bonusCode) => setCurrentBonusKey(bonusCode)}
        currentBonus={currentBonusKey}
      />
      <BankWithdrawals
        onWithdrawSelect={(withdrawCode) => setCurrentWidthdraw(withdrawCode)}
        currentWithdraw={currentWithdraw}
      />
      <div className="actions">
        <button className="reset" onClick={handleReset}>
          ❌
        </button>
        <button className="submit" onClick={submitMove}>
          Submit
        </button>
      </div>
    </div>
  );
};
