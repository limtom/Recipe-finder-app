import { useLocation } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import Search from "../components/Search";
import { useState, useEffect, Fragment } from "react";

function SearchResult() {
  const location = useLocation();
  const { searchResults, searchQuery } = location.state || {};

  // Pagination state
  const [displayedMeals, setDisplayedMeals] = useState([]);
  const [displayCount, setDisplayCount] = useState(8);
  const [loading, setLoading] = useState(false);

  // Get all meals from searchResults
  const allMeals = searchResults || [];

  // Initialize displayed meals when allMeals changes
  useEffect(() => {
    setDisplayedMeals(allMeals.slice(0, displayCount));
  }, [allMeals, displayCount]);

  // Check if there are more meals to load
  const hasMore = displayCount < allMeals.length;

  // Load more function
  const handleLoadMore = () => {
    setLoading(true);
    console.log("Loadmore clicked");

    // Simulate loading
    setTimeout(() => {
      const newCount = Math.min(displayCount + 8, allMeals.length);
      setDisplayCount(newCount);
      setDisplayedMeals(allMeals.slice(0, newCount));
      setLoading(false);
    }, 500);
  };

  return (
    <div className="flex flex-col items-center max-w-7xl mx-auto w-full ">
      <div className="max-w-2xl md:min-w-2xl mt-20">
        <Search initialQuery={searchQuery} />
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header & Controls */}
        <div className="mb-8">
          <h2 className="text-3xl text-slate-900 dark:text-white mb-6 font-bold capitalize">
            Results for "{searchQuery}"
          </h2>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {allMeals.length > 0 ? (
            displayedMeals.map((meal) => (
              <RecipeCard mealObj={meal} key={meal.idMeal} />
            ))
          ) : (
            <div className="text-center text-gray-500 mt-10 col-span-full">
              No recipes found for "{searchQuery}". Try a different search term.
            </div>
          )}
        </div>

        {/* Load More - Only show if there are more meals to load */}
        {hasMore && (
          <div className="flex justify-center">
            <button
              className="inline-flex items-center gap-2 px-10 py-3.5 bg-primary text-white font-bold rounded-full cursor-pointer hover:shadow-lg hover:shadow-primary/30 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleLoadMore}
              disabled={loading}
            >
              {loading ? (
                <Fragment>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Loading...
                </Fragment>
              ) : (
                <Fragment>
                  Load More Recipes ({allMeals.length - displayCount} remaining)
                  <span className="material-symbols-outlined">expand_more</span>
                </Fragment>
              )}
            </button>
          </div>
        )}

        {/* Show message when all meals are loaded */}
        {!hasMore && allMeals.length > 8 && (
          <p className="text-center text-gray-500 mt-8">
            You've seen all {allMeals.length} recipes
          </p>
        )}
      </main>
    </div>
  );
}

export default SearchResult;
