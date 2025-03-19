import "./App.css";
import AllCategories from "./components/categories/AllCategories";
import BalanceChart from "./components/BalanceChart";
import DoughnutChart from "./components/DoughnutChart";

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
        <div className="parent p-4">
          <div className="div1">
            <Income />
          </div>

          <section className="div4">
            <div className="flex flex-col p-3 bg-slate-500 rounded-2xl">
              <IncomeAndExpenses />
              <LineChart />
            </div>
          </section>

          <div className="div5">5</div>
          <section className="div6 p-4 flex flex-col">
            <DoughnutChart />
            <div>
              <p>Data here</p>
            </div>
          </section>
          <div className="div7">7</div>
          <section className="div8 p-2">
            <AllCategories />
          </section>
        </div>

        <BalanceChart />
      </BalanceProvider>
    </div>
  );
}

export default App;
