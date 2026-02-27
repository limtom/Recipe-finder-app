import { useLocation } from "react-router-dom";
import ResultCard from "../components/ResultCard";
import Search from "../components/Search";

function SearchResult() {
  const location = useLocation();
  const { searchResults, searchQuery } = location.state || {};

  console.log(location.state);
  return (
    <div className="flex flex-col items-center max-w-7xl mx-auto w-full ">
      <div className="max-w-2xl md:min-w-2xl mt-20">
        <Search />
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header & Controls */}
        <div className="mb-8">
          <h2 className="text-3xl text-slate-900 dark:text-white mb-6 font-bold capitalize">
            Results for "{searchQuery}"
          </h2>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Filters */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400 mr-2">
                Filters:
              </span>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20 hover:bg-primary/20 transition-colors cursor-pointer">
                Ingredient: Chicken
                <span className="material-symbols-outlined text-sm">close</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20 hover:bg-primary/20 transition-colors cursor-pointer">
                Ingredient: Avocado
                <span className="material-symbols-outlined text-sm">close</span>
              </div>
              <button className="text-xs font-bold text-slate-400 hover:text-primary transition-colors ml-2 uppercase tracking-wider">
                Clear all
              </button>
            </div>
            {/* Sort */}
            <div className="flex items-center gap-3">
              <label
                className="text-sm font-medium text-slate-500 dark:text-slate-400 shrink-0"
                for="sort"
              >
                Sort by
              </label>
              <div className="relative">
                <select
                  className="appearance-none pl-3 pr-10 py-2 text-sm border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 focus:ring-primary focus:border-primary outline-none cursor-pointer"
                  id="sort"
                >
                  <option>Relevance</option>
                  <option>Newest</option>
                  <option>Prep Time</option>
                  <option>Calories</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        {/* Recipe Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {searchResults ? (
            searchResults.map((meal) => (
              <ResultCard mealObj={meal} key={meal.idMeal} />
            ))
          ) : (
            <div className="text-center text-gray-500 mt-10">
              No recipes found for "{searchQuery}". Try a different search term.
            </div>
          )}
        </div>
        {/* Load More */}
        <div className="flex justify-center">
          <button
            className="inline-flex items-center gap-2 px-10 py-3.5 bg-primary text-white font-bold rounded-full cursor-pointer hover:shadow-lg hover:shadow-primary/30 transition-all active:scale-95"
            disabled={!!searchResults}
          >
            Load More Recipes
            <span className="material-symbols-outlined">expand_more</span>
          </button>
        </div>
      </main>
    </div>
  );
}

export default SearchResult;
