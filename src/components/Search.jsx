import { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const location = useLocation();

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
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className="bg-primary text-white py-3 px-6 rounded-2xl text-lg cursor-pointer font-bold font-sans">
          search
        </button>
      </div>
      {/*filter buttons */}
      <div className="flex flex-wrap mt-6 items-center justify-center gap-4">
        <button
          className={`flex items-center gap-2 px-4 py-2 rounded-full ${location === "/" ? "bg-white/20 text-white hover:bg-white/30" : "bg-gray-4 text-gray-5"} backdrop-blur-md  transition-colors border border-white/10  text-sm font-medium cursor-pointer`}
        >
          <span className="material-symbols-outlined text-lg">
            temp_preferences_custom
          </span>
          By Ingredients
        </button>
        <button
          className={`flex items-center gap-2 px-4 py-2 rounded-full ${location === "/" ? "bg-white/20 text-white hover:bg-white/30" : "bg-gray-4 text-gray-5"} backdrop-blur-md  transition-colors border border-white/10  text-sm font-medium cursor-pointer`}
        >
          <span className="material-symbols-outlined text-lg">restaurant</span>
          By Dish Name
        </button>
        <button
          className={`flex items-center gap-2 px-4 py-2 rounded-full ${location === "/" ? "bg-white/20 text-white hover:bg-white/30" : "bg-gray-4 text-gray-5"} backdrop-blur-md  transition-colors border border-white/10  text-sm font-medium cursor-pointer`}
        >
          <span className="material-symbols-outlined text-lg">eco</span>
          Vegetarian
        </button>
        <button
          className={`flex items-center gap-2 px-4 py-2 rounded-full ${location === "/" ? "bg-white/20 text-white hover:bg-white/30" : "bg-gray-4 text-gray-5"} backdrop-blur-md  transition-colors border border-white/10  text-sm font-medium cursor-pointer`}
        >
          <span className="material-symbols-outlined text-lg">timer</span>
          Under 30 Mins
        </button>
      </div>
    </Fragment>
  );
}

export default Search;
