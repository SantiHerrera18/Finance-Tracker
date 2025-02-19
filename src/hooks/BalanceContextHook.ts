import { useContext } from "react";
import { BalanceContextType } from "../interfaces/balanceContext";
import BalanceContext from "../helpers/context/BalanceContext";

export const useBalanceContext = (): BalanceContextType => {
  const context = useContext(BalanceContext) as BalanceContextType;
  return context;
};
