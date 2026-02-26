import TrendingCard from "./TrendingCard";

function Trending() {
  return (
    <div className="px-4 md:px-20 py-8 max-w-7xl mx-auto w-full mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-secondary">
          Trending Now
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
      </div>
    </div>
  );
}

export default Trending;
