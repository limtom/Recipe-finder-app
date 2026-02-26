function Nutrition() {
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 shadow-sm border border-black/5 dark:border-white/5">
      <h3 className="text-xl font-bold text-text-main-light dark:text-text-main-dark mb-4">
        Nutrition Facts
      </h3>
      <p className="text-sm text-text-sec-light dark:text-text-sec-dark mb-6">
        Per serving (based on 4 servings)
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1 p-3 bg-background-light dark:bg-background-dark rounded-xl">
          <span className="text-xs text-text-sec-light dark:text-text-sec-dark uppercase font-bold tracking-wider">
            Calories
          </span>
          <span className="text-2xl font-black text-primary">450</span>
        </div>
        <div className="flex flex-col gap-1 p-3 bg-background-light dark:bg-background-dark rounded-xl">
          <span className="text-xs text-text-sec-light dark:text-text-sec-dark uppercase font-bold tracking-wider">
            Protein
          </span>
          <span className="text-2xl font-black text-text-main-light dark:text-text-main-dark">
            32g
          </span>
        </div>
        <div className="flex flex-col gap-1 p-3 bg-background-light dark:bg-background-dark rounded-xl">
          <span className="text-xs text-text-sec-light dark:text-text-sec-dark uppercase font-bold tracking-wider">
            Carbs
          </span>
          <span className="text-2xl font-black text-text-main-light dark:text-text-main-dark">
            12g
          </span>
        </div>
        <div className="flex flex-col gap-1 p-3 bg-background-light dark:bg-background-dark rounded-xl">
          <span className="text-xs text-text-sec-light dark:text-text-sec-dark uppercase font-bold tracking-wider">
            Fat
          </span>
          <span className="text-2xl font-black text-text-main-light dark:text-text-main-dark">
            18g
          </span>
        </div>
      </div>
    </div>
  );
}

export default Nutrition;
