export interface LoginForm {
  email: string;
  password: string;
}

export interface MainForm {
  inputData: string;
  categorie: string;
}

export enum BalanceInput {
  income = "income",
  expense = "expense",
}

export interface CategorieForm {
  name: string;
  categorieType: BalanceInput;
}
