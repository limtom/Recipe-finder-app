import Nutrition from "./Nutrition";

function Ingredient() {
  return (
    <aside className="lg:col-span-4 flex flex-col gap-8">
      {/* Ingredients Card */}
      <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 shadow-sm border border-black/5 dark:border-white/5">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-text-main-light ">
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
              className="flex items-center justify-center w-6 h-6 mt-0.5 rounded border-2 border-gray-300 peer-checked:bg-primary peer-checked:border-primary peer-checked:text-white text-transparent transition-all"
              for="ing1"
            >
              <span className="material-symbols-outlined text-sm font-bold">
                check
              </span>
            </label>
            <label
              className="flex-1 text-base text-text-main-light  peer-checked:text-text-sec-light  peer-checked:line-through transition-colors cursor-pointer leading-relaxed"
              for="ing1"
            >
              <span className="font-bold">1 lb</span> Chicken Breast, minced or
              sliced
            </label>
          </li>
          <li className="group flex items-start gap-3 cursor-pointer select-none">
            <input className="peer sr-only" id="ing2" type="checkbox" />
            <label
              className="flex items-center justify-center w-6 h-6 mt-0.5 rounded border-2 border-gray-300 peer-checked:bg-primary peer-checked:border-primary peer-checked:text-white text-transparent transition-all"
              for="ing2"
            >
              <span className="material-symbols-outlined text-sm font-bold">
                check
              </span>
            </label>
            <label
              className="flex-1 text-base text-text-main-light  peer-checked:text-text-sec-light  peer-checked:line-through transition-colors cursor-pointer leading-relaxed"
              for="ing2"
            >
              <span className="font-bold">2 cups</span> Holy Basil leaves (or
              Thai Basil)
            </label>
          </li>
          <li className="group flex items-start gap-3 cursor-pointer select-none">
            <input className="peer sr-only" id="ing3" type="checkbox" />
            <label
              className="flex items-center justify-center w-6 h-6 mt-0.5 rounded border-2 border-gray-300 peer-checked:bg-primary peer-checked:border-primary peer-checked:text-white text-transparent transition-all"
              for="ing3"
            >
              <span className="material-symbols-outlined text-sm font-bold">
                check
              </span>
            </label>
            <label
              className="flex-1 text-base text-text-main-light  peer-checked:text-text-sec-light  peer-checked:line-through transition-colors cursor-pointer leading-relaxed"
              for="ing3"
            >
              <span className="font-bold">5 cloves</span> Garlic, minced
            </label>
          </li>
          <li className="group flex items-start gap-3 cursor-pointer select-none">
            <input className="peer sr-only" id="ing4" type="checkbox" />
            <label
              className="flex items-center justify-center w-6 h-6 mt-0.5 rounded border-2 border-gray-300 peer-checked:bg-primary peer-checked:border-primary peer-checked:text-white text-transparent transition-all"
              for="ing4"
            >
              <span className="material-symbols-outlined text-sm font-bold">
                check
              </span>
            </label>
            <label
              className="flex-1 text-base text-text-main-light  peer-checked:text-text-sec-light  peer-checked:line-through transition-colors cursor-pointer leading-relaxed"
              for="ing4"
            >
              <span className="font-bold">4-6</span> Thai bird's eye chilies
            </label>
          </li>
          <li className="group flex items-start gap-3 cursor-pointer select-none">
            <input className="peer sr-only" id="ing5" type="checkbox" />
            <label
              className="flex items-center justify-center w-6 h-6 mt-0.5 rounded border-2 border-gray-300 peer-checked:bg-primary peer-checked:border-primary peer-checked:text-white text-transparent transition-all"
              for="ing5"
            >
              <span className="material-symbols-outlined text-sm font-bold">
                check
              </span>
            </label>
            <label
              className="flex-1 text-base text-text-main-light  peer-checked:text-text-sec-light  peer-checked:line-through transition-colors cursor-pointer leading-relaxed"
              for="ing5"
            >
              <span className="font-bold">2 tbsp</span> Oyster sauce
            </label>
          </li>
          <li className="group flex items-start gap-3 cursor-pointer select-none">
            <input className="peer sr-only" id="ing6" type="checkbox" />
            <label
              className="flex items-center justify-center w-6 h-6 mt-0.5 rounded border-2 border-gray-300 peer-checked:bg-primary peer-checked:border-primary peer-checked:text-white text-transparent transition-all"
              for="ing6"
            >
              <span className="material-symbols-outlined text-sm font-bold">
                check
              </span>
            </label>
            <label
              className="flex-1 text-base text-text-main-light  peer-checked:text-text-sec-light  peer-checked:line-through transition-colors cursor-pointer leading-relaxed"
              for="ing6"
            >
              <span className="font-bold">1 tbsp</span> Soy sauce
            </label>
          </li>
          <li className="group flex items-start gap-3 cursor-pointer select-none">
            <input className="peer sr-only" id="ing7" type="checkbox" />
            <label
              className="flex items-center justify-center w-6 h-6 mt-0.5 rounded border-2 border-gray-300 peer-checked:bg-primary peer-checked:border-primary peer-checked:text-white text-transparent transition-all"
              for="ing7"
            >
              <span className="material-symbols-outlined text-sm font-bold">
                check
              </span>
            </label>
            <label
              className="flex-1 text-base text-text-main-light  peer-checked:text-text-sec-light  peer-checked:line-through transition-colors cursor-pointer leading-relaxed"
              for="ing7"
            >
              <span className="font-bold">1 tsp</span> Dark soy sauce
            </label>
          </li>
          <li className="group flex items-start gap-3 cursor-pointer select-none">
            <input className="peer sr-only" id="ing8" type="checkbox" />
            <label
              className="flex items-center justify-center w-6 h-6 mt-0.5 rounded border-2 border-gray-300 peer-checked:bg-primary peer-checked:border-primary peer-checked:text-white text-transparent transition-all"
              for="ing8"
            >
              <span className="material-symbols-outlined text-sm font-bold">
                check
              </span>
            </label>
            <label
              className="flex-1 text-base text-text-main-light  peer-checked:text-text-sec-light peer-checked:line-through transition-colors cursor-pointer leading-relaxed"
              for="ing8"
            >
              <span className="font-bold">1 tsp</span> Sugar
            </label>
          </li>
        </ul>
      </div>
      <Nutrition />
    </aside>
  );
}

export default Ingredient;
