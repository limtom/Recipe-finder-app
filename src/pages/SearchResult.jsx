import Search from "../components/Search";

function SearchResult() {
  return (
    <div className="flex flex-col items-center max-w-7xl mx-auto w-full">
      <div className="max-w-2xl md:min-w-2xl">
        <Search />
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header & Controls */}
        <div className="mb-8">
          <h2 className="text-3xl text-slate-900 dark:text-white mb-6 font-bold">
            Results for "Chicken, Avocado"
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
          {/* Card 1 */}
          <div className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700 ">
            <div className="relative aspect-4/3 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Healthy chicken avocado salad with greens"
                src="./images/r1.png"
              />
              <button className="absolute top-3 right-3 h-9 w-9 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-slate-400 hover:text-primary transition-colors shadow-sm">
                <span className="material-symbols-outlined text-xl">
                  favorite
                </span>
              </button>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2 leading-tight">
                Chicken Avocado Salad
              </h3>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-3 text-xs font-medium text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">
                      schedule
                    </span>
                    15 min
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">
                      nutrition
                    </span>
                    320 kcal
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700 ">
            <div className="relative aspect-4/3 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Grilled chicken wraps with sliced avocado"
                src="./images/r2.png"
              />
              <button className="absolute top-3 right-3 h-9 w-9 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-primary transition-colors shadow-sm">
                <span className="material-symbols-outlined text-xl fill-icon">
                  favorite
                </span>
              </button>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2 leading-tight">
                Chicken Avocado Salad
              </h3>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-3 text-xs font-medium text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">
                      schedule
                    </span>
                    15 min
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">
                      nutrition
                    </span>
                    320 kcal
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700 ">
            <div className="relative aspect-4/3 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Bowl of creamy avocado lime chicken soup"
                src="./images/r3.png"
              />
              <button className="absolute top-3 right-3 h-9 w-9 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-slate-400 hover:text-primary transition-colors shadow-sm">
                <span className="material-symbols-outlined text-xl">
                  favorite
                </span>
              </button>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2 leading-tight">
                Chicken Avocado Salad
              </h3>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-3 text-xs font-medium text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">
                      schedule
                    </span>
                    15 min
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">
                      nutrition
                    </span>
                    320 kcal
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700">
            <div className="relative aspect-4/3 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Pasta with creamy avocado sauce and grilled chicken"
                src="./images/r4.png"
              />
              <button className="absolute top-3 right-3 h-9 w-9 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-slate-400 hover:text-primary transition-colors shadow-sm">
                <span className="material-symbols-outlined text-xl">
                  favorite
                </span>
              </button>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2 leading-tight">
                Chicken Avocado Salad
              </h3>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-3 text-xs font-medium text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">
                      schedule
                    </span>
                    15 min
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">
                      nutrition
                    </span>
                    320 kcal
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card 5 */}
          <div className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700 ">
            <div className="relative aspect-4/3 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Street tacos with chicken and avocado slices"
                src="./images/r5.png"
              />
              <button className="absolute top-3 right-3 h-9 w-9 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-slate-400 hover:text-primary transition-colors shadow-sm">
                <span className="material-symbols-outlined text-xl">
                  favorite
                </span>
              </button>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2 leading-tight">
                Chicken Avocado Salad
              </h3>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-3 text-xs font-medium text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">
                      schedule
                    </span>
                    15 min
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">
                      nutrition
                    </span>
                    320 kcal
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card 6 */}
          <div className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700 ">
            <div className="relative aspect-4/3 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Honey mustard glazed chicken with avocado"
                src="./images/r6.png"
              />
              <button className="absolute top-3 right-3 h-9 w-9 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-slate-400 hover:text-primary transition-colors shadow-sm">
                <span className="material-symbols-outlined text-xl">
                  favorite
                </span>
              </button>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2 leading-tight">
                Chicken Avocado Salad
              </h3>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-3 text-xs font-medium text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">
                      schedule
                    </span>
                    15 min
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">
                      nutrition
                    </span>
                    320 kcal
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card 7 */}
          <div className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700">
            <div className="relative aspect-4/3 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Grilled salmon with avocado salsa"
                src="./images/r7.png"
              />
              <button className="absolute top-3 right-3 h-9 w-9 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-slate-400 hover:text-primary transition-colors shadow-sm">
                <span className="material-symbols-outlined text-xl">
                  favorite
                </span>
              </button>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2 leading-tight">
                Chicken Avocado Salad
              </h3>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-3 text-xs font-medium text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">
                      schedule
                    </span>
                    15 min
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">
                      nutrition
                    </span>
                    320 kcal
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card 8 */}
          <div className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700 ">
            <div className="relative aspect-4/3 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Macro view of a chicken avocado sandwich"
                src="./images/r8.png"
              />
              <button className="absolute top-3 right-3 h-9 w-9 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-slate-400 hover:text-primary transition-colors shadow-sm">
                <span className="material-symbols-outlined text-xl">
                  favorite
                </span>
              </button>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2 leading-tight">
                Chicken Avocado Salad
              </h3>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-3 text-xs font-medium text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">
                      schedule
                    </span>
                    15 min
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">
                      nutrition
                    </span>
                    320 kcal
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Load More */}
        <div className="flex justify-center">
          <button className="inline-flex items-center gap-2 px-10 py-3.5 bg-primary text-white font-bold rounded-full cursor-pointer hover:shadow-lg hover:shadow-primary/30 transition-all active:scale-95">
            Load More Recipes
            <span className="material-symbols-outlined">expand_more</span>
          </button>
        </div>
      </main>
    </div>
  );
}

export default SearchResult;
