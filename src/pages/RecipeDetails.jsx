function RecipeDetails() {
  return (
    <div className="flex flex-col items-center max-w-7xl mx-auto w-full">
      <main className="flex flex-col items-center w-full min-h-screen pb-20">
        <div className="w-full max-w-280 px-4 md:px-10 flex flex-col gap-8 pt-6">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap gap-2 text-sm">
            <a
              className="text-text-sec-light dark:text-text-sec-dark font-medium hover:underline"
              href="#"
            >
              Home
            </a>
            <span className="text-text-sec-light dark:text-text-sec-dark font-medium">
              /
            </span>
            <a
              className="text-text-sec-light dark:text-text-sec-dark font-medium hover:underline"
              href="#"
            >
              Asian Cuisine
            </a>
            <span className="text-text-sec-light dark:text-text-sec-dark font-medium">
              /
            </span>
            <span className="text-text-main-light dark:text-text-main-dark font-medium">
              Spicy Basil Chicken
            </span>
          </div>
          {/* Hero Section */}
          <section
            className="relative rounded-2xl overflow-hidden min-h-120 bg-cover bg-center group"
            alt="Close up of spicy basil chicken stir fry in a dark ceramic bowl"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.7) 100%), url("/public/images/hero2.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 flex flex-col items-start gap-4">
              {/* Chips inside Hero */}
              <div className="flex gap-2 flex-wrap mb-2">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-bold border border-white/10">
                  Gluten-Free
                </span>
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-bold border border-white/10">
                  High Protein
                </span>
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-bold border border-white/10">
                  Spicy
                </span>
              </div>
              <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight drop-shadow-sm">
                Spicy Basil Chicken
              </h1>
              <p className="text-white/90 text-lg max-w-2xl font-medium drop-shadow-sm leading-relaxed">
                A quick and aromatic stir-fry dish perfect for weeknights. Fresh
                basil leaves and Thai chilies bring a vibrant heat that pairs
                perfectly with steamed jasmine rice.
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-4">
                <button className="flex items-center gap-2 h-12 px-6 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-base transition-all shadow-lg shadow-primary/30">
                  <span className="material-symbols-outlined">favorite</span>
                  <span>Save to Favorites</span>
                </button>
                <button className="flex items-center gap-2 h-12 px-6 bg-white/90 hover:bg-white text-black rounded-xl font-bold text-base transition-all backdrop-blur-sm">
                  <span className="material-symbols-outlined">print</span>
                  <span>Print Recipe</span>
                </button>
                <div className="flex items-center gap-2 ml-2 text-white/90 font-medium bg-black/30 px-4 py-2 rounded-lg backdrop-blur-sm">
                  <span className="material-symbols-outlined text-primary">
                    schedule
                  </span>
                  <span>30 mins</span>
                  <span className="mx-2 opacity-50">|</span>
                  <span className="material-symbols-outlined text-primary">
                    restaurant
                  </span>
                  <span>4 Servings</span>
                </div>
              </div>
            </div>
          </section>
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Ingredients & Nutrition */}
            <aside className="lg:col-span-4 flex flex-col gap-8">
              {/* Ingredients Card */}
              <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 shadow-sm border border-black/5 dark:border-white/5">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-text-main-light dark:text-text-main-dark">
                    Ingredients
                  </h3>
                  <button className="text-primary text-sm font-bold hover:underline">
                    Adjust Servings
                  </button>
                </div>
                <ul className="flex flex-col gap-4">
                  {/* Ingredient Item */}
                  <li className="group flex items-start gap-3 cursor-pointer select-none">
                    <input className="peer sr-only" id="ing1" type="checkbox" />
                    <label
                      className="flex items-center justify-center w-6 h-6 mt-0.5 rounded border-2 border-gray-300 dark:border-gray-600 peer-checked:bg-primary peer-checked:border-primary peer-checked:text-white text-transparent transition-all"
                      for="ing1"
                    >
                      <span className="material-symbols-outlined text-sm font-bold">
                        check
                      </span>
                    </label>
                    <label
                      className="flex-1 text-base text-text-main-light dark:text-text-main-dark peer-checked:text-text-sec-light dark:peer-checked:text-text-sec-dark peer-checked:line-through transition-colors cursor-pointer leading-relaxed"
                      for="ing1"
                    >
                      <span className="font-bold">1 lb</span> Chicken Breast,
                      minced or sliced
                    </label>
                  </li>
                  <li className="group flex items-start gap-3 cursor-pointer select-none">
                    <input className="peer sr-only" id="ing2" type="checkbox" />
                    <label
                      className="flex items-center justify-center w-6 h-6 mt-0.5 rounded border-2 border-gray-300 dark:border-gray-600 peer-checked:bg-primary peer-checked:border-primary peer-checked:text-white text-transparent transition-all"
                      for="ing2"
                    >
                      <span className="material-symbols-outlined text-sm font-bold">
                        check
                      </span>
                    </label>
                    <label
                      className="flex-1 text-base text-text-main-light dark:text-text-main-dark peer-checked:text-text-sec-light dark:peer-checked:text-text-sec-dark peer-checked:line-through transition-colors cursor-pointer leading-relaxed"
                      for="ing2"
                    >
                      <span className="font-bold">2 cups</span> Holy Basil
                      leaves (or Thai Basil)
                    </label>
                  </li>
                  <li className="group flex items-start gap-3 cursor-pointer select-none">
                    <input className="peer sr-only" id="ing3" type="checkbox" />
                    <label
                      className="flex items-center justify-center w-6 h-6 mt-0.5 rounded border-2 border-gray-300 dark:border-gray-600 peer-checked:bg-primary peer-checked:border-primary peer-checked:text-white text-transparent transition-all"
                      for="ing3"
                    >
                      <span className="material-symbols-outlined text-sm font-bold">
                        check
                      </span>
                    </label>
                    <label
                      className="flex-1 text-base text-text-main-light dark:text-text-main-dark peer-checked:text-text-sec-light dark:peer-checked:text-text-sec-dark peer-checked:line-through transition-colors cursor-pointer leading-relaxed"
                      for="ing3"
                    >
                      <span className="font-bold">5 cloves</span> Garlic, minced
                    </label>
                  </li>
                  <li className="group flex items-start gap-3 cursor-pointer select-none">
                    <input className="peer sr-only" id="ing4" type="checkbox" />
                    <label
                      className="flex items-center justify-center w-6 h-6 mt-0.5 rounded border-2 border-gray-300 dark:border-gray-600 peer-checked:bg-primary peer-checked:border-primary peer-checked:text-white text-transparent transition-all"
                      for="ing4"
                    >
                      <span className="material-symbols-outlined text-sm font-bold">
                        check
                      </span>
                    </label>
                    <label
                      className="flex-1 text-base text-text-main-light dark:text-text-main-dark peer-checked:text-text-sec-light dark:peer-checked:text-text-sec-dark peer-checked:line-through transition-colors cursor-pointer leading-relaxed"
                      for="ing4"
                    >
                      <span className="font-bold">4-6</span> Thai bird's eye
                      chilies
                    </label>
                  </li>
                  <li className="group flex items-start gap-3 cursor-pointer select-none">
                    <input className="peer sr-only" id="ing5" type="checkbox" />
                    <label
                      className="flex items-center justify-center w-6 h-6 mt-0.5 rounded border-2 border-gray-300 dark:border-gray-600 peer-checked:bg-primary peer-checked:border-primary peer-checked:text-white text-transparent transition-all"
                      for="ing5"
                    >
                      <span className="material-symbols-outlined text-sm font-bold">
                        check
                      </span>
                    </label>
                    <label
                      className="flex-1 text-base text-text-main-light dark:text-text-main-dark peer-checked:text-text-sec-light dark:peer-checked:text-text-sec-dark peer-checked:line-through transition-colors cursor-pointer leading-relaxed"
                      for="ing5"
                    >
                      <span className="font-bold">2 tbsp</span> Oyster sauce
                    </label>
                  </li>
                  <li className="group flex items-start gap-3 cursor-pointer select-none">
                    <input className="peer sr-only" id="ing6" type="checkbox" />
                    <label
                      className="flex items-center justify-center w-6 h-6 mt-0.5 rounded border-2 border-gray-300 dark:border-gray-600 peer-checked:bg-primary peer-checked:border-primary peer-checked:text-white text-transparent transition-all"
                      for="ing6"
                    >
                      <span className="material-symbols-outlined text-sm font-bold">
                        check
                      </span>
                    </label>
                    <label
                      className="flex-1 text-base text-text-main-light dark:text-text-main-dark peer-checked:text-text-sec-light dark:peer-checked:text-text-sec-dark peer-checked:line-through transition-colors cursor-pointer leading-relaxed"
                      for="ing6"
                    >
                      <span className="font-bold">1 tbsp</span> Soy sauce
                    </label>
                  </li>
                  <li className="group flex items-start gap-3 cursor-pointer select-none">
                    <input className="peer sr-only" id="ing7" type="checkbox" />
                    <label
                      className="flex items-center justify-center w-6 h-6 mt-0.5 rounded border-2 border-gray-300 dark:border-gray-600 peer-checked:bg-primary peer-checked:border-primary peer-checked:text-white text-transparent transition-all"
                      for="ing7"
                    >
                      <span className="material-symbols-outlined text-sm font-bold">
                        check
                      </span>
                    </label>
                    <label
                      className="flex-1 text-base text-text-main-light dark:text-text-main-dark peer-checked:text-text-sec-light dark:peer-checked:text-text-sec-dark peer-checked:line-through transition-colors cursor-pointer leading-relaxed"
                      for="ing7"
                    >
                      <span className="font-bold">1 tsp</span> Dark soy sauce
                    </label>
                  </li>
                  <li className="group flex items-start gap-3 cursor-pointer select-none">
                    <input className="peer sr-only" id="ing8" type="checkbox" />
                    <label
                      className="flex items-center justify-center w-6 h-6 mt-0.5 rounded border-2 border-gray-300 dark:border-gray-600 peer-checked:bg-primary peer-checked:border-primary peer-checked:text-white text-transparent transition-all"
                      for="ing8"
                    >
                      <span className="material-symbols-outlined text-sm font-bold">
                        check
                      </span>
                    </label>
                    <label
                      className="flex-1 text-base text-text-main-light dark:text-text-main-dark peer-checked:text-text-sec-light dark:peer-checked:text-text-sec-dark peer-checked:line-through transition-colors cursor-pointer leading-relaxed"
                      for="ing8"
                    >
                      <span className="font-bold">1 tsp</span> Sugar
                    </label>
                  </li>
                </ul>
              </div>
              {/* Nutrition Facts */}
              <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 shadow-sm border border-black/5 dark:border-white/5">
                <h3 className="text-xl font-bold text-text-main-light dark:text-text-main-dark mb-4">
                  Nutrition Facts
                </h3>
                <p className="text-sm text-text-sec-light dark:text-text-sec-dark mb-6">
                  Per serving (based on 4 servings)
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1 p-3 bg-background-light dark:bg-background-dark rounded-xl">
                    <span className="text-xs text-text-sec-light dark:text-text-sec-dark uppercase font-bold tracking-wider">
                      Calories
                    </span>
                    <span className="text-2xl font-black text-primary">
                      450
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 p-3 bg-background-light dark:bg-background-dark rounded-xl">
                    <span className="text-xs text-text-sec-light dark:text-text-sec-dark uppercase font-bold tracking-wider">
                      Protein
                    </span>
                    <span className="text-2xl font-black text-text-main-light dark:text-text-main-dark">
                      32g
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 p-3 bg-background-light dark:bg-background-dark rounded-xl">
                    <span className="text-xs text-text-sec-light dark:text-text-sec-dark uppercase font-bold tracking-wider">
                      Carbs
                    </span>
                    <span className="text-2xl font-black text-text-main-light dark:text-text-main-dark">
                      12g
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 p-3 bg-background-light dark:bg-background-dark rounded-xl">
                    <span className="text-xs text-text-sec-light dark:text-text-sec-dark uppercase font-bold tracking-wider">
                      Fat
                    </span>
                    <span className="text-2xl font-black text-text-main-light dark:text-text-main-dark">
                      18g
                    </span>
                  </div>
                </div>
              </div>
            </aside>
            {/* Right Column: Preparation Instructions & Reviews */}
            <div className="lg:col-span-8 flex flex-col gap-10">
              <section>
                <h2 className="text-3xl font-black tracking-tight text-text-main-light dark:text-text-main-dark mb-8">
                  Preparation
                </h2>
                <div className="flex flex-col gap-8 relative">
                  {/* Connecting line */}
                  <div className="absolute left-4.75 top-10 bottom-10 w-0.5 bg-gray-200 dark:bg-gray-700 hidden sm:block"></div>
                  {/* Step 1 */}
                  <div className="flex gap-6 relative">
                    <div className="shrink-0 z-10">
                      <div className="w-10 h-10 rounded-xl bg-primary shadow-lg shadow-primary/30 flex items-center justify-center text-white font-black text-lg">
                        1
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 pt-1">
                      <h3 className="text-xl font-bold text-text-main-light dark:text-text-main-dark">
                        Prep the Aromatics
                      </h3>
                      <p className="text-base md:text-lg text-text-main-light/80 dark:text-text-main-dark/80 leading-relaxed">
                        Pound garlic and chilies together in a mortar and pestle
                        until they form a coarse paste. If you don't have a
                        mortar, you can mince them finely with a knife. This
                        releases the essential oils for better flavor.
                      </p>
                    </div>
                  </div>
                  {/* Step 2 */}
                  <div className="flex gap-6 relative">
                    <div className="shrink-0 z-10">
                      <div className="w-10 h-10 rounded-xl bg-primary shadow-lg shadow-primary/30 flex items-center justify-center text-white font-black text-lg">
                        2
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 pt-1">
                      <h3 className="text-xl font-bold text-text-main-light dark:text-text-main-dark">
                        Sear the Chicken
                      </h3>
                      <p className="text-base md:text-lg text-text-main-light/80 dark:text-text-main-dark/80 leading-relaxed">
                        Heat oil in a wok or large pan over high heat. Add the
                        garlic-chili paste and stir-fry for 20 seconds until
                        fragrant (be careful not to burn it, your kitchen will
                        smell spicy!). Add the chicken and stir-fry until cooked
                        through.
                      </p>
                    </div>
                  </div>
                  {/* Step 3 */}
                  <div className="flex gap-6 relative">
                    <div className="shrink-0 z-10">
                      <div className="w-10 h-10 rounded-xl bg-primary shadow-lg shadow-primary/30 flex items-center justify-center text-white font-black text-lg">
                        3
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 pt-1">
                      <h3 className="text-xl font-bold text-text-main-light dark:text-text-main-dark">
                        Season
                      </h3>
                      <p className="text-base md:text-lg text-text-main-light/80 dark:text-text-main-dark/80 leading-relaxed">
                        Add oyster sauce, soy sauce, dark soy sauce, and sugar.
                        Toss everything to coat the chicken evenly. If the pan
                        gets too dry, add a splash of water (about 1-2 tbsp).
                      </p>
                    </div>
                  </div>
                  {/* Step 4 */}
                  <div className="flex gap-6 relative">
                    <div className="shrink-0 z-10">
                      <div className="w-10 h-10 rounded-xl bg-primary shadow-lg shadow-primary/30 flex items-center justify-center text-white font-black text-lg">
                        4
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 pt-1">
                      <h3 className="text-xl font-bold text-text-main-light dark:text-text-main-dark">
                        Add Basil &amp; Serve
                      </h3>
                      <p className="text-base md:text-lg text-text-main-light/80 dark:text-text-main-dark/80 leading-relaxed">
                        Turn off the heat. Immediately toss in the basil leaves.
                        The residual heat will wilt the basil perfectly without
                        overcooking it, keeping the flavor fresh. Serve hot over
                        jasmine rice, optionally topped with a crispy fried egg.
                      </p>
                      <div
                        className="mt-4 rounded-xl overflow-hidden h-64 w-full bg-cover bg-center"
                        alt="Final dish plated with rice and topped with a fried egg"
                        style={{
                          backgroundImage: 'url("/public/images/d1.png")',
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </section>
              <hr className="border-black/5 dark:border-white/10 my-4" />
              <section>
                <h2 className="text-2xl font-bold tracking-tight text-text-main-light dark:text-text-main-dark mb-6">
                  Reviews &amp; Rating
                </h2>
                <div className="flex flex-wrap gap-x-12 gap-y-6 items-start">
                  {/* Rating Summary Block */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-baseline gap-2">
                      <p className="text-text-main-light dark:text-text-main-dark text-5xl font-black leading-tight tracking-[-0.033em]">
                        4.8
                      </p>
                      <p className="text-text-sec-light dark:text-text-sec-dark text-sm font-medium">
                        out of 5
                      </p>
                    </div>
                    <div className="flex gap-1 text-primary">
                      <span className="material-symbols-outlined">star</span>
                      <span className="material-symbols-outlined">star</span>
                      <span className="material-symbols-outlined">star</span>
                      <span className="material-symbols-outlined">star</span>
                      <span className="material-symbols-outlined">
                        star_half
                      </span>
                    </div>
                    <p className="text-text-main-light dark:text-text-main-dark text-sm font-medium">
                      124 reviews
                    </p>
                  </div>
                  {/* Rating Bars */}
                  <div className="flex-1 min-w-70 max-w-md grid grid-cols-[20px_1fr_40px] items-center gap-y-3 gap-x-3">
                    <span className="text-text-main-light dark:text-text-main-dark text-xs font-bold">
                      5
                    </span>
                    <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: "77%" }}
                      ></div>
                    </div>
                    <span className="text-text-sec-light dark:text-text-sec-dark text-xs text-right">
                      77%
                    </span>
                    <span className="text-text-main-light dark:text-text-main-dark text-xs font-bold">
                      4
                    </span>
                    <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: "15%" }}
                      ></div>
                    </div>
                    <span className="text-text-sec-light dark:text-text-sec-dark text-xs text-right">
                      15%
                    </span>
                    <span className="text-text-main-light dark:text-text-main-dark text-xs font-bold">
                      3
                    </span>
                    <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: "5%" }}
                      ></div>
                    </div>
                    <span className="text-text-sec-light dark:text-text-sec-dark text-xs text-right">
                      5%
                    </span>
                    <span className="text-text-main-light dark:text-text-main-dark text-xs font-bold">
                      2
                    </span>
                    <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: "1%" }}
                      ></div>
                    </div>
                    <span className="text-text-sec-light dark:text-text-sec-dark text-xs text-right">
                      1%
                    </span>
                    <span className="text-text-main-light dark:text-text-main-dark text-xs font-bold">
                      1
                    </span>
                    <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: "2%" }}
                      ></div>
                    </div>
                    <span className="text-text-sec-light dark:text-text-sec-dark text-xs text-right">
                      2%
                    </span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default RecipeDetails;
