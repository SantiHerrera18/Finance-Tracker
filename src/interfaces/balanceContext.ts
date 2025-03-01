import { BalanceInput } from "./forms";

export interface BalanceContextType {
  updateBalance: (value: number, inputData: BalanceInput) => void;
  total: number;
  incomes: number;
  expenses: number;
}
