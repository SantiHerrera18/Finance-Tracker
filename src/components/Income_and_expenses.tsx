import { useBalanceContext } from "@/hooks/BalanceContextHook";

const IncomeAndExpenses = () => {
  const { expenses, incomes } = useBalanceContext();

  return (
    <div className="flex w-full justify-start gap-2">
      <h3>Income: {incomes}</h3>
      <h3>Expenses: {expenses}</h3>
    </div>
  );
};

export default IncomeAndExpenses;
