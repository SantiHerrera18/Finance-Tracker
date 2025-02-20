export interface LoginForm {
  email: string;
  password: string;
}

export interface MainForm {
  inputData: string;
}

export enum BalanceInput {
  income = "income",
  expense = "expense",
}
