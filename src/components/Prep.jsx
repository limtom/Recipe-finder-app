import Step from "./Step";

function Prep({ prep }) {
  return (
    <section>
      <h2 className="text-3xl font-black tracking-tight text-text-main-light dark:text-text-main-dark mb-8">
        Preparation
      </h2>
      <div className="flex flex-col gap-8 relative">
        {/* Connecting line */}
        <div className="absolute left-4.75 top-10 bottom-10 w-0.5 bg-gray-200 dark:bg-gray-700 hidden sm:block"></div>
        {prep?.map((instr, i) => (
          <Step instr={instr} num={i} key={i} />
        ))}
      </div>
    </section>
  );
}

export default Prep;
