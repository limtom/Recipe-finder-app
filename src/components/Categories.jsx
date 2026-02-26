import CategoryCard from "./CategoryCard";

function Categories() {
  return (
    <div className="px-4 md:px-20 py-8 max-w-7xl mx-auto w-full">
      <div className="flex items-center justify-between mb-6 ">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-secondary">
          Popular Categories
        </h2>
        <a className="text-primary font-bold text-sm hover:underline" href="#">
          View all
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </div>
  );
}

export default Categories;
