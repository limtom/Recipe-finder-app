function TrendingCard() {
  return (
    <div className="flex flex-col bg-white  rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-2 ">
      <div
        className="h-48 bg-cover bg-center w-full"
        data-alt="Avocado toast with poached egg on wooden board"
        style={{
          backgroundImage: "url('/public/images/t1.png')",
        }}
      ></div>
      <div className="p-4 flex flex-col gap-2">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-lg leading-tight">
            Avocado Toast Supreme
          </h3>
          <div className="flex items-center gap-1 text-primary text-sm font-bold">
            <span className="material-symbols-outlined text-base fill-current">
              star
            </span>
            4.9
          </div>
        </div>
        <p className="text-sm text-gray-500 line-clamp-2">
          Crispy sourdough topped with smashed avocado, poached egg, and chili
          flakes.
        </p>
        <div className="flex items-center gap-4 mt-2 text-xs font-medium text-gray-500 ">
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-base">
              schedule
            </span>
            15 min
          </div>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-base">
              local_fire_department
            </span>
            320 kcal
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingCard;
