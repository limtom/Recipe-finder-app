import { useQuery } from "@tanstack/react-query";
import { Fragment, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Search({ initialQuery = "" }) {
  const [query, setquery] = useState("");
  const [activeQuery, setActiveQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  // Get a recipe
  async function getRecipe() {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${activeQuery}`,
    );

    const data = await res.json();
    return data;
  }

  // Create the query
  const { data, isSuccess } = useQuery({
    queryKey: ["search", activeQuery],
    queryFn: getRecipe,
    enabled: !!activeQuery,
  });

  // Navigate to search results when data is successfully fetched
  useEffect(() => {
    if (isSuccess && data) {
      // Navigate to search results page with the search term and data
      navigate("/search-results", {
        state: {
          searchResults: data.meals,
          searchQuery: activeQuery,
        },
      });
    }
  }, [isSuccess, data, activeQuery, navigate]);

  // Auto-search if initialSearchTerm is provided
  useEffect(() => {
    if (initialQuery && !activeQuery) {
      setActiveQuery(initialQuery);
    }
  }, [initialQuery, activeQuery]);

  function handleSearch() {
    if (query.trim()) {
      setActiveQuery(query);
    }
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleSearch();
    }
  }

  return (
    <Fragment>
      <div className="flex md:min-w-2xl items-center justify-center rounded-3xl bg-white text-center mt-10 p-2">
        <span className="material-symbols-outlined text-primary ml-3">
          search
        </span>
        <input
          type="text"
          name="search"
          className="flex-1 w-full bg-transparent border-none focus:ring-0 text-secondary placeholder:text-gray-400 px-4 text-base md:text-lg"
          placeholder="Enter ingredients (e.g., chicken, basil) or dish names..."
          value={query}
          onChange={(e) => setquery(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button
          className="bg-primary text-white py-3 px-6 rounded-2xl text-lg cursor-pointer font-bold font-sans"
          onClick={handleSearch}
        >
          search
        </button>
      </div>
    </Fragment>
  );
}

export default Search;
