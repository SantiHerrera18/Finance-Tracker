import { BalanceInput } from "@/interfaces/forms";
import CategoryByClass from "./CategoryByClass";
import { useState } from "react";
import CategorieCreation from "../forms/categorieCreation";

const AllCategories = () => {
  const [createCategorie, setCreateCategorie] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="border p-4">
        <h2>Income categories</h2>
        <CategoryByClass categorieClass={BalanceInput.income} />
      </div>
      <div className="border p-4">
        <h2>Expenses categories</h2>
        <CategoryByClass categorieClass={BalanceInput.expense} />
      </div>
      <button
        className="cursor-pointer"
        onClick={() => {
          setCreateCategorie(true);
        }}
      >
        Create
      </button>
      {createCategorie && (
        <div className="absolute top-40 z-10 w-[480px] h-[480px] bg-gray-900 flex  justify-center items-center">
          <button
            className="absolute top-0 right-0 cursor-pointer"
            onClick={() => {
              setCreateCategorie(false);
            }}
          >
            X
          </button>
          <CategorieCreation />
        </div>
      )}
    </div>
  );
};

export default AllCategories;
