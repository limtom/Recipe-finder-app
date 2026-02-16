function Categories() {
  return (
    <div className="px-4 md:px-20 py-8 max-w-7xl mx-auto w-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-primary dark:text-[#f3ede7]">
          Popular Categories
        </h2>
        <a className="text-primary font-bold text-sm hover:underline" href="#">
          View all
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {/* Category 1*/}
        <a
          className="group relative aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
          href="#"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            data-alt="Stack of fluffy pancakes with syrup and berries"
            style={{
              backgroundImage: 'url("/public/images/p1.png")',
            }}
          ></div>
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-5 w-full">
            <p className="text-white text-xl font-bold">Breakfast</p>
            <p className="text-white/80 text-sm mt-1">Start your day right</p>
          </div>
        </a>
        {/* Category 2*/}
        <a
          className="group relative aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
          href="#"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            data-alt="Fresh green vegan salad bowl with avocado"
            style={{
              backgroundImage: 'url("/public/images/p2.png")',
            }}
          ></div>
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-5 w-full">
            <p className="text-white text-xl font-bold">Vegan</p>
            <p className="text-white/80 text-sm mt-1">Plant-based power</p>
          </div>
        </a>
        {/* Category 3*/}
        <a
          className="group relative aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
          href="#"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            data-alt="Quick stir fry noodles in a bowl"
            style={{
              backgroundImage: 'url("/public/images/p3.png")',
            }}
          ></div>
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-5 w-full">
            <p className="text-white text-xl font-bold">Quick Meals</p>
            <p className="text-white/80 text-sm mt-1">Ready in 20 mins</p>
          </div>
        </a>
        {/* Category 4*/}
        <a
          className="group relative aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
          href="#"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            data-alt="Delicious chocolate cake slice on a plate"
            style={{
              backgroundImage: 'url("/public/images/p4.png")',
            }}
          ></div>
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-5 w-full">
            <p className="text-white text-xl font-bold">Desserts</p>
            <p className="text-white/80 text-sm mt-1">Sweet treats</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Categories;
