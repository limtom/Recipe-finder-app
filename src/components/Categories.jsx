import { useQuery } from "@tanstack/react-query";
import CategoryCard from "./CategoryCard";
import { Link } from "react-router-dom";

function Categories() {
  const { data, isPending } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  //Set the data on derived state
  const categories = data?.categories || [];

  // Filter for just four category
  const categoriesToFilter = ["Breakfast", "Dessert", "Starter", "Vegan"];

  // Filter the categories
  const filteredCategories = categories.filter((category) =>
    categoriesToFilter.some(
      (filterName) =>
        category.strCategory.toLowerCase() === filterName.toLowerCase(),
    ),
  );

  return (
    <div className="px-4 md:px-20 py-8 max-w-7xl mx-auto w-full">
      <div className="flex items-center justify-between mb-6 ">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-secondary">
          Popular Categories
        </h2>
        <Link to="recipes/all-categories">
          <p className="text-primary font-bold text-sm hover:underline">
            View all
          </p>
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {filteredCategories?.map((cate) => (
          <CategoryCard categoryObj={cate} key={cate?.strCategory} />
        ))}
      </div>
    </div>
  );
}

async function getCategories() {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php",
  );
  return await res.json();
}

export default Categories;
