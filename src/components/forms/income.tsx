import { useState } from "react";
import { BalanceInput, MainForm } from "../../interfaces/forms";
import { useBalanceContext } from "../../hooks/BalanceContextHook";

const Income = () => {
  const [inputType, setInputType] = useState<BalanceInput>(BalanceInput.income);
  const [formData, setFormData] = useState<MainForm>({ inputData: "" });
  const { updateBalance } = useBalanceContext();

  const handleClick = (value: BalanceInput) => {
    if (value === BalanceInput.income) setInputType(BalanceInput.income);
    else setInputType(BalanceInput.expense);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateBalance(parseInt(formData.inputData, 10), inputType);
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
        <div>
          <label htmlFor="inputData">Enter amount</label>
          <input
            type="text"
            placeholder=" $ 00.00 "
            name="inputData"
            id="inputData"
            value={formData.inputData}
            onChange={handleChange}
          />
        </div>

        <button>Enter</button>
      </form>
    </div>
  );
};

export default Income;
