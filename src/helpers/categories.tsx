import { Categorie } from "@/interfaces/categories";
import { BalanceInput } from "@/interfaces/forms";

export const items: Categorie[] = [
  { name: "home", categorieType: BalanceInput.expense },
  { name: "work", categorieType: BalanceInput.income },
  { name: "gym", categorieType: BalanceInput.expense },
];
