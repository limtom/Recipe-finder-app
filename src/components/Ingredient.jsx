import IngredientItem from "./IngredientItem";
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
          <IngredientItem />
          <IngredientItem />
          <IngredientItem />
          <IngredientItem />
          <IngredientItem />
          <IngredientItem />
          <IngredientItem />
          <IngredientItem />
        </ul>
      </div>
      <Nutrition />
    </aside>
  );
}

export default Ingredient;
