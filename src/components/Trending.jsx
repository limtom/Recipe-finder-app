function Trending() {
  return (
    <div className="px-4 md:px-20 py-8 max-w-7xl mx-auto w-full mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-secondary">
          Trending Now
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* card-1*/}
        <div className="flex flex-col bg-white  rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-2 ">
          <div
            className="h-48 bg-cover bg-center w-full"
            data-alt="Avocado toast with poached egg on wooden board"
            style={{
              backgroundImage: "url('/public/images/t1.png')",
            }}
          ></div>
          <div className="p-4 flex flex-col gap-2">
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-lg leading-tight">
                Avocado Toast Supreme
              </h3>
              <div className="flex items-center gap-1 text-primary text-sm font-bold">
                <span className="material-symbols-outlined text-base fill-current">
                  star
                </span>
                4.9
              </div>
            </div>
            <p className="text-sm text-gray-500 line-clamp-2">
              Crispy sourdough topped with smashed avocado, poached egg, and
              chili flakes.
            </p>
            <div className="flex items-center gap-4 mt-2 text-xs font-medium text-gray-500 ">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-base">
                  schedule
                </span>
                15 min
              </div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-base">
                  local_fire_department
                </span>
                320 kcal
              </div>
            </div>
          </div>
        </div>
        {/*card 2*/}
        <div className="flex flex-col bg-white  rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-2 ">
          <div
            className="h-48 bg-cover bg-center w-full"
            data-alt="Creamy tomato basil pasta in a bowl"
            style={{
              backgroundImage: "url('/public/images/t2.png')",
            }}
          ></div>
          <div className="p-4 flex flex-col gap-2">
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-lg leading-tight">
                Creamy Tomato Basil Pasta
              </h3>
              <div className="flex items-center gap-1 text-primary text-sm font-bold">
                <span className="material-symbols-outlined text-base fill-current">
                  star
                </span>
                4.7
              </div>
            </div>
            <p className="text-sm text-gray-500 line-clamp-2">
              A simple yet delicious pasta dish made with fresh tomatoes, basil,
              and a hint of cream.
            </p>
            <div className="flex items-center gap-4 mt-2 text-xs font-medium text-gray-500">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-base">
                  schedule
                </span>
                25 min
              </div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-base">
                  local_fire_department
                </span>
                450 kcal
              </div>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className="flex flex-col bg-white  rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-2 ">
          <div
            className="h-48 bg-cover bg-center w-full"
            data-alt="Grilled salmon fillet with asparagus"
            style={{
              backgroundImage: "url('/public/images/t3.png')",
            }}
          ></div>
          <div className="p-4 flex flex-col gap-2">
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-lg leading-tight">
                Grilled Salmon &amp; Asparagus
              </h3>
              <div className="flex items-center gap-1 text-primary text-sm font-bold">
                <span className="material-symbols-outlined text-base fill-current">
                  star
                </span>
                4.8
              </div>
            </div>
            <p className="text-sm text-gray-500 line-clamp-2">
              Healthy and flavorful grilled salmon served with roasted asparagus
              spears.
            </p>
            <div className="flex items-center gap-4 mt-2 text-xs font-medium text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-base">
                  schedule
                </span>
                30 min
              </div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-base">
                  local_fire_department
                </span>
                380 kcal
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trending;
