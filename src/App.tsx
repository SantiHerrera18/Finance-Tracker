import "./App.css";
import Balance from "./components/Balance";
import Income from "./components/forms/income";
import { BalanceProvider } from "./helpers/context/BalanceContext";

function App() {
  return (
    <div>
      <BalanceProvider>
        <Balance />
        <Income />
      </BalanceProvider>
    </div>
  );
}

export default App;
