function Step({ instr, num }) {
  return (
    <div className="flex gap-6 relative">
      <div className="shrink-0 z-10">
        <div className="w-10 h-10 rounded-xl bg-primary shadow-lg shadow-primary/30 flex items-center justify-center text-white font-black text-lg">
          {num + 1}
        </div>
      </div>
      <div className="flex flex-col gap-2 pt-1">
        <h3 className="text-xl font-bold text-text-main-light dark:text-text-main-dark">
          {instr?.split(":")[0]}
        </h3>
        <p className="text-base md:text-lg text-text-main-light/80 dark:text-text-main-dark/80 leading-relaxed">
          {instr?.split(":")[1]}
        </p>
      </div>
    </div>
  );
}

export default Step;
