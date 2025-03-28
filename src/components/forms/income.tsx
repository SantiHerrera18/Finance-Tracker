import { useState } from "react";
import { BalanceInput, MainForm } from "../../interfaces/forms";
import { useBalanceContext } from "../../hooks/BalanceContextHook";
import Dropdown from "../CategorieSelect";

const Income = () => {
  const [inputType, setInputType] = useState<BalanceInput>(BalanceInput.income);
  const [submited, setSubmited] = useState(false);
  const [formData, setFormData] = useState<MainForm>({
    inputData: "",
    categorie: "",
  });
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
    console.log(formData);
    setFormData({ inputData: "", categorie: "" });
    setSubmited(true);
    updateBalance(parseInt(formData.inputData, 10), inputType);
  };

  const handleDropdown = (value: string) => {
    setFormData({ ...formData, categorie: value });
  };

  return (
    <div className="bg-slate-500  p-3 pt-0 w-full h-full rounded-2xl">
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
      <form
        className="border p-6 w-fit mx-auto flex flex-col"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="inputData">Enter amount</label>
          <p>{`This is ${inputType}`}</p>
          <input
            type="text"
            placeholder=" $ 00.00 "
            name="inputData"
            id="inputData"
            value={formData.inputData}
            onChange={handleChange}
          />
        </div>
        <Dropdown
          inputType={inputType}
          getSelectionValue={handleDropdown}
          submited={submited}
        />
        <button>Enter</button>
      </form>
    </div>
  );
};

export default Income;
