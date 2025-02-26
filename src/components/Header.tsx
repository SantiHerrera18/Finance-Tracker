import { useBalanceContext } from "@/hooks/BalanceContextHook";

const CustomHeader = () => {
  const { total } = useBalanceContext();

  return (
    <header className="flex w-full justify-between gap-5">
      <div className="bg-gray-500 p-2 text-4xl w-[40vw]">
        <h1>Available Balance</h1>
        <span> $ {total}</span>
      </div>
      <nav className="w-full bg-gray-500 p-5">
        <ul className="flex justify-between">
          <li>
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="#">Categories</a>
          </li>
          <li>
            <a href="#">Calendar</a>
          </li>
          <li>
            <a href="#">Profile</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default CustomHeader;
