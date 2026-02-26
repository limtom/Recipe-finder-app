import Ingredient from "../components/Ingredient";
import Prep from "../components/Prep";
import Ratings from "../components/Ratings";
import RecipeDetailsHero from "../components/RecipeDetailsHero";

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
          <RecipeDetailsHero />
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Ingredients & Nutrition */}
            <Ingredient />
            {/* Right Column: Preparation Instructions & Reviews */}
            <div className="lg:col-span-8 flex flex-col gap-10">
              <Prep />
              <hr className="border-black/5 dark:border-white/10 my-4" />
              <Ratings />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default RecipeDetails;
