import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Cerca ordini con ID"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className=" rounded-full bg-yellow-100 text-stone-400 px-4 py-2 w-28 sm:w-64 focus:outline-none focus:ring focus:ring-yellow-800"
      />
    </form>
  );
}

export default SearchOrder;
