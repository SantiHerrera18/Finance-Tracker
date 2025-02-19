import React, { createContext, useState } from "react";
import { BalanceContextType } from "../../interfaces/balanceContext";

const BalanceContext = createContext<BalanceContextType | undefined>(undefined);

export const BalanceProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [total, setTotal] = useState(0);

  const updateBalance = (value: number) => setTotal(total + value);

  return (
    <BalanceContext.Provider value={{ updateBalance, total }}>
      {children}
    </BalanceContext.Provider>
  );
};

export default BalanceContext;
