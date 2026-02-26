import Search from "./Search";

function Hero() {
  return (
    <header
      className="min-h-125 w-full rounded-2xl flex flex-col items-center justify-center shadow-lg mb-12 "
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
      <Search />
    </header>
  );
}

export default Hero;
