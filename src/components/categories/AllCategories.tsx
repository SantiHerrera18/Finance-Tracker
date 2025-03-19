import { BalanceInput } from "@/interfaces/forms";
import CategoryByClass from "./CategoryByClass";

const AllCategories = () => {
  return (
    <div>
      <div className="border p-4">
        <h2>Income categories</h2>
        <CategoryByClass categorieClass={BalanceInput.income} />
      </div>
      <div className="border p-4">
        <h2>Expenses categories</h2>
        <CategoryByClass categorieClass={BalanceInput.expense} />
      </div>
    </div>
  );
};

export default AllCategories;
