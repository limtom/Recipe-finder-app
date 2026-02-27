function RecipeDetailsHero() {
  return (
    <section
      className="relative rounded-2xl overflow-hidden min-h-120 bg-cover bg-center group"
      alt="Close up of spicy basil chicken stir fry in a dark ceramic bowl"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.7) 100%), url("/images/hero2.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 flex flex-col items-start gap-4">
        {/* Chips inside Hero */}
        <div className="flex gap-2 flex-wrap mb-2">
          <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-bold border border-white/10">
            Gluten-Free
          </span>
          <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-bold border border-white/10">
            High Protein
          </span>
          <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-bold border border-white/10">
            Spicy
          </span>
        </div>
        <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight drop-shadow-sm">
          Spicy Basil Chicken
        </h1>
        <p className="text-white/90 text-lg max-w-2xl font-medium drop-shadow-sm leading-relaxed">
          A quick and aromatic stir-fry dish perfect for weeknights. Fresh basil
          leaves and Thai chilies bring a vibrant heat that pairs perfectly with
          steamed jasmine rice.
        </p>
        <div className="flex flex-wrap items-center gap-4 mt-4">
          <button className="flex items-center gap-2 h-12 px-6 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-base transition-all shadow-lg shadow-primary/30">
            <span className="material-symbols-outlined">favorite</span>
            <span>Save to Favorites</span>
          </button>
          <button className="flex items-center gap-2 h-12 px-6 bg-white/90 hover:bg-white text-black rounded-xl font-bold text-base transition-all backdrop-blur-sm">
            <span className="material-symbols-outlined">print</span>
            <span>Print Recipe</span>
          </button>
          <div className="flex items-center gap-2 ml-2 text-white/90 font-medium bg-black/30 px-4 py-2 rounded-lg backdrop-blur-sm">
            <span className="material-symbols-outlined text-primary">
              schedule
            </span>
            <span>30 mins</span>
            <span className="mx-2 opacity-50">|</span>
            <span className="material-symbols-outlined text-primary">
              restaurant
            </span>
            <span>4 Servings</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecipeDetailsHero;
