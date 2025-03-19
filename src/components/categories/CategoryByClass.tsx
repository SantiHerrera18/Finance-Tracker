import { items } from "@/helpers/categories";
import capitalizeFirstLetter from "@/helpers/FirstToUpperCase";
import { BalanceInput } from "@/interfaces/forms";

const CategoryByClass = ({
  categorieClass,
}: {
  categorieClass: BalanceInput;
}) => {
  return (
    <div>
      <div>
        {categorieClass == BalanceInput.income
          ? items
              .filter((item) => {
                return item.categorieType === BalanceInput.income;
              })
              .map((item, index) => {
                return (
                  <div className="p-2 border-white" key={index}>
                    {capitalizeFirstLetter(item.name)}
                  </div>
                );
              })
          : items
              .filter((item) => {
                return item.categorieType === BalanceInput.expense;
              })
              .map((item, index) => {
                return (
                  <div className="p-2 border-white" key={index}>
                    {capitalizeFirstLetter(item.name)}
                  </div>
                );
              })}
      </div>
    </div>
  );
};

export default CategoryByClass;
