function CategoryCard() {
  return (
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
  );
}

export default CategoryCard;
