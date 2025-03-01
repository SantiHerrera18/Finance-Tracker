import "./App.css";
import BalanceChart from "./components/BalanceChart";

import Income from "./components/forms/income";
import CustomHeader from "./components/Header";
import IncomeAndExpenses from "./components/Income_and_expenses";
import { BalanceProvider } from "./helpers/context/BalanceContext";

function App() {
  return (
    <div>
      <BalanceProvider>
        <CustomHeader />
        <BalanceChart />
        <Income />
        <IncomeAndExpenses />
      </BalanceProvider>
    </div>
  );
}

export default App;
