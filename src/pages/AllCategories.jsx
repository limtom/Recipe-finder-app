import { useQuery } from "@tanstack/react-query";
import CategoryCard from "../components/CategoryCard";

function AllCategories() {
  const { data, isPending } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  //Set the data on derived state
  const categories = data?.categories || [];

  return (
    <main className="flex-1 max-w-300 mx-auto w-full px-6 py-8 md:px-10 mt-15">
      {/* Hero Section & Intro */}
      <div className="flex flex-col gap-6 mb-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-slate-900 dark:text-slate-100 text-4xl md:text-5xl font-black leading-tight tracking-tight">
            Explore All Categories
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg font-normal leading-normal">
            Find the perfect recipe for any occasion, diet, or craving.
          </p>
        </div>
      </div>
      {/* Categories Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
        {categories.map((cate, i) => (
          <CategoryCard categoryObj={cate} key={i} />
        ))}
      </div>
    </main>
  );
}

async function getCategories() {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php",
  );
  return await res.json();
}

export default AllCategories;
