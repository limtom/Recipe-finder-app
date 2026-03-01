import { useParams, Link } from "react-router-dom";
import Ingredient from "../components/Ingredient";
import Prep from "../components/Prep";
import RecipeDetailsHero from "../components/RecipeDetailsHero";
import { useQuery } from "@tanstack/react-query";
import {
  pairIngredientsAndMeasures,
  removeEmptyValues,
  splitInstructions,
} from "../utilities/mealUtilities";

function RecipeDetails() {
  // const [meal, setMeal] = useState({});
  const { id } = useParams();
  let result;

  async function getRecipeById() {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    );
    const data = await res.json();
    return data;
  }

  const { data, isSuccess } = useQuery({
    queryKey: ["recipes", id],
    queryFn: getRecipeById,
    enabled: !!id,
  });

  let meal = data?.meals[0];
  try {
    // Check if data and mealObj exist
    if (data && isSuccess) {
      meal = data?.meals[0];
    }

    // Apply the functions
    const cleanedMeal = removeEmptyValues(meal);
    const pairedIngredients = pairIngredientsAndMeasures(meal);
    const instructionSteps = splitInstructions(meal.strInstructions);

    // Create a new object with the cleaned data
    result = {
      ...cleanedMeal,
      ingredients: pairedIngredients,
      instructions: instructionSteps,
    };

    console.log(result);

    // Remove the individual strIngredient, strMeasure, and original strInstructions properties
    for (let i = 1; i <= 20; i++) {
      delete result[`strIngredient${i}`];
      delete result[`strMeasure${i}`];
    }
    delete result?.strInstructions;
  } catch (error) {
    console.error("Error processing data:", error.message);
    // Return a safe default object
    console.log(
      JSON.stringify(
        {
          idMeal: "",
          strMeal: "",
          ingredients: [],
          instructions: [],
        },
        null,
        2,
      ),
    );
  }

  return (
    <div className="flex flex-col items-center max-w-7xl mx-auto w-full">
      <main className="flex flex-col items-center w-full min-h-screen pb-20 mt-20">
        <div className="w-full max-w-280 px-4 md:px-10 flex flex-col gap-8 pt-6">
          {/* Hero Section */}
          <RecipeDetailsHero mealObj={result} />
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <Ingredient ingrObj={result?.ingredients} />
            <div className="lg:col-span-8 flex flex-col gap-10">
              <Prep prep={result?.instructions} />
              <hr className="border-black/5 dark:border-white/10 my-4" />
              {/*Back link*/}
              <Link to="/search-results">
                <p className="text-primary font-light text-xl hover:underline tracking-wide">
                  &larr; Back
                </p>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default RecipeDetails;
