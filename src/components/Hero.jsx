import { useState } from "react";

function Hero() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <header
      className="min-h-125 w-full rounded-2xl flex flex-col items-center justify-center shadow-lg "
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%), url("/public/images/hero.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/*Main text */}
      <div className="">
        <div className="flex flex-col gap-4 max-w-3xl z-10 items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight drop-shadow-md font-sans">
            Cook with what you have.
          </h1>
          <p className="text-lg md:text-xl font-medium max-w-2xl mx-auto drop-shadow-sm text-white text-center">
            Discover delicious recipes in seconds based on ingredients you
            already have in your kitchen.
          </p>
        </div>
      </div>

      {/*The search bar */}
      <div className="flex md:min-w-2xl items-center justify-center rounded-3xl bg-white text-center mt-10 p-2">
        <span className="material-symbols-outlined text-primary ml-3">
          search
        </span>
        <input
          type="text"
          name="search"
          id=""
          className="flex-1 w-full bg-transparent border-none focus:ring-0 text-secondary placeholder:text-gray-400 px-4 text-base md:text-lg"
          placeholder="Enter ingredients (e.g., chicken, basil) or dish names..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className="bg-primary text-white py-3 px-6 rounded-2xl text-lg cursor-pointer font-bold font-sans">
          search
        </button>
      </div>

      {/*filter buttons */}
      <div className="flex flex-wrap mt-6 items-center justify-center gap-4">
        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-colors border border-white/10 text-white text-sm font-medium cursor-pointer">
          <span className="material-symbols-outlined text-[18px]">
            temp_preferences_custom
          </span>
          By Ingredients
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-colors border border-white/10 text-white text-sm font-medium cursor-pointer">
          <span className="material-symbols-outlined text-[18px]">
            restaurant
          </span>
          By Dish Name
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-colors border border-white/10 text-white text-sm font-medium cursor-pointer">
          <span className="material-symbols-outlined text-[18px]">eco</span>
          Vegetarian
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-colors border border-white/10 text-white text-sm font-medium cursor-pointer">
          <span className="material-symbols-outlined text-[18px]">timer</span>
          Under 30 Mins
        </button>
      </div>
    </header>
  );
}

export default Hero;
