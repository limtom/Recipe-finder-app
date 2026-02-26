function ResultCard() {
  return (
    <div className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700 ">
      <div className="relative aspect-4/3 overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          alt="Healthy chicken avocado salad with greens"
          src="./images/r1.png"
        />
        <button className="absolute top-3 right-3 h-9 w-9 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-slate-400 hover:text-primary transition-colors shadow-sm">
          <span className="material-symbols-outlined text-xl">favorite</span>
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2 leading-tight">
          Chicken Avocado Salad
        </h3>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-3 text-xs font-medium text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">
                schedule
              </span>
              15 min
            </div>
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">
                nutrition
              </span>
              320 kcal
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
