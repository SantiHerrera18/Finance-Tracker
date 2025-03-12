import "./App.css";
import BalanceChart from "./components/BalanceChart";

import Income from "./components/forms/income";
import CustomHeader from "./components/Header";
import IncomeAndExpenses from "./components/Income_and_expenses";
import LineChart from "./components/LineChart";
import { BalanceProvider } from "./helpers/context/BalanceContext";

function App() {
  return (
    <div>
      <BalanceProvider>
        <CustomHeader />
        <BalanceChart />
        <Income />
        <div className="flex flex-col w-[50%] p-2 bg-slate-500 rounded-2xl">
          <IncomeAndExpenses />
          <LineChart />
        </div>
      </BalanceProvider>
    </div>
  );
}

export default App;
