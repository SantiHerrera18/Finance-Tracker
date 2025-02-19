import { useBalanceContext } from "../hooks/BalanceContextHook";

const Balance = () => {
  const { total } = useBalanceContext();

  return (
    <header className=" h-80">
      <h1 className="text-8xl">Hello User!</h1>
      <h3 className="text-4xl">{`$ ${total}`}</h3>
    </header>
  );
};

export default Balance;
