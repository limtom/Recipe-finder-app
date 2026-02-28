function IngredientItem({ ingrItem }) {
  return (
    <li className="group flex items-start justify-between gap-3 cursor-pointer select-none">
      <input className="peer sr-only" id="ing1" type="checkbox" />
      <label className="flex items-center justify-center w-6 h-6 mt-0.5 rounded border-2 border-gray-300 peer-checked:bg-primary peer-checked:border-primary peer-checked:text-white text-transparent transition-all">
        <span className="material-symbols-outlined text-sm font-bold">
          check
        </span>
      </label>
      <label className="flex-1 text-base text-text-main-light  peer-checked:text-text-sec-light  peer-checked:line-through transition-colors cursor-pointer leading-relaxed">
        <span className="font-bold">{ingrItem?.measure}</span>{" "}
        {ingrItem?.ingredient}
      </label>
    </li>
  );
}

export default IngredientItem;
