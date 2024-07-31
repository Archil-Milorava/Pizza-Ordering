import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-500 bg-yellow-500 py-3 px-2 uppercase sm:px-6 sm:h-16">
      <Link className="tracking-widest" to="/">Fast Pizza & Co.</Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
