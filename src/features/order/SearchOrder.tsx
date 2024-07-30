import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const onSearchOrder = (e) => {
    e.preventDefault();
    navigate(`/order/${query}`);
    setQuery("");
  };

  return (
    <form onSubmit={onSearchOrder}>
      <input
      placeholder="Search order #"
        className="w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 focus:outline-none focus:ring-yellow-400 placeholder:text-stone-400 sm:focus:w-72 sm:w-64"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
