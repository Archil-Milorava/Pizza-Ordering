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
        className="border border-red-400"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
