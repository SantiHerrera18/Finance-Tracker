import React, { createContext, useState } from "react";
import { BalanceContextType } from "../../interfaces/balanceContext";
import { BalanceInput } from "../../interfaces/forms";

const BalanceContext = createContext<BalanceContextType | undefined>(undefined);

export const BalanceProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [total, setTotal] = useState(80000);

  const updateBalance = (value: number, input: BalanceInput) => {
    if (input === BalanceInput.income) setTotal(total + value);
    else setTotal(total - value);
  };

  return (
    <BalanceContext.Provider value={{ updateBalance, total }}>
      {children}
    </BalanceContext.Provider>
  );
};

export default BalanceContext;
