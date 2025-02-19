import { useState } from "react";
import { BalanceInput } from "../../interfaces/forms";
import { useBalanceContext } from "../../hooks/BalanceContextHook";

const Income = () => {
  const [inputType, setInputType] = useState<BalanceInput>(BalanceInput.income);
  const { updateBalance } = useBalanceContext();

  const handleClick = (value: BalanceInput) => {
    if (value === BalanceInput.income) setInputType(BalanceInput.income);
    else setInputType(BalanceInput.expense);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const test = 5000;
    updateBalance(test);
  };

  return (
    <div className="bg-slate-500 w-fit p-3 pt-0 mx-auto">
      <div className="flex justify-between">
        <button
          onClick={() => {
            handleClick(BalanceInput.income);
          }}
        >
          Income
        </button>
        <button
          onClick={() => {
            handleClick(BalanceInput.expense);
          }}
        >
          Expenses
        </button>
      </div>
      <form className="border p-6 w-fit mx-auto" onSubmit={handleSubmit}>
        {inputType === BalanceInput.income ? (
          <div>
            <label htmlFor="income">Enter amount</label>
            <input type="text" placeholder=" $ income " name="income" />
          </div>
        ) : (
          <div>
            <label htmlFor="expense">Enter amount</label>
            <input type="text" placeholder=" $ expense " name="expense" />
          </div>
        )}
        <button>Enter</button>
      </form>
    </div>
  );
};

export default Income;
