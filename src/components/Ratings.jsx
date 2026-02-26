function Ratings() {
  return (
    <section>
      <h2 className="text-2xl font-bold tracking-tight text-text-main-light dark:text-text-main-dark mb-6">
        Reviews &amp; Rating
      </h2>
      <div className="flex flex-wrap gap-x-12 gap-y-6 items-start">
        {/* Rating Summary Block */}
        <div className="flex flex-col gap-2">
          <div className="flex items-baseline gap-2">
            <p className="text-text-main-light dark:text-text-main-dark text-5xl font-black leading-tight tracking-[-0.033em]">
              4.8
            </p>
            <p className="text-text-sec-light dark:text-text-sec-dark text-sm font-medium">
              out of 5
            </p>
          </div>
          <div className="flex gap-1 text-primary">
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star_half</span>
          </div>
          <p className="text-text-main-light dark:text-text-main-dark text-sm font-medium">
            124 reviews
          </p>
        </div>
        {/* Rating Bars */}
        <div className="flex-1 min-w-70 max-w-md grid grid-cols-[20px_1fr_40px] items-center gap-y-3 gap-x-3">
          <span className="text-text-main-light dark:text-text-main-dark text-xs font-bold">
            5
          </span>
          <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full"
              style={{ width: "77%" }}
            ></div>
          </div>
          <span className="text-text-sec-light dark:text-text-sec-dark text-xs text-right">
            77%
          </span>
          <span className="text-text-main-light dark:text-text-main-dark text-xs font-bold">
            4
          </span>
          <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full"
              style={{ width: "15%" }}
            ></div>
          </div>
          <span className="text-text-sec-light dark:text-text-sec-dark text-xs text-right">
            15%
          </span>
          <span className="text-text-main-light dark:text-text-main-dark text-xs font-bold">
            3
          </span>
          <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full"
              style={{ width: "5%" }}
            ></div>
          </div>
          <span className="text-text-sec-light dark:text-text-sec-dark text-xs text-right">
            5%
          </span>
          <span className="text-text-main-light dark:text-text-main-dark text-xs font-bold">
            2
          </span>
          <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full"
              style={{ width: "1%" }}
            ></div>
          </div>
          <span className="text-text-sec-light dark:text-text-sec-dark text-xs text-right">
            1%
          </span>
          <span className="text-text-main-light dark:text-text-main-dark text-xs font-bold">
            1
          </span>
          <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full"
              style={{ width: "2%" }}
            ></div>
          </div>
          <span className="text-text-sec-light dark:text-text-sec-dark text-xs text-right">
            2%
          </span>
        </div>
      </div>
    </section>
  );
}

export default Ratings;
