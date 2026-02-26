function Prep() {
  return (
    <section>
      <h2 className="text-3xl font-black tracking-tight text-text-main-light dark:text-text-main-dark mb-8">
        Preparation
      </h2>
      <div className="flex flex-col gap-8 relative">
        {/* Connecting line */}
        <div className="absolute left-4.75 top-10 bottom-10 w-0.5 bg-gray-200 dark:bg-gray-700 hidden sm:block"></div>
        {/* Step 1 */}
        <div className="flex gap-6 relative">
          <div className="shrink-0 z-10">
            <div className="w-10 h-10 rounded-xl bg-primary shadow-lg shadow-primary/30 flex items-center justify-center text-white font-black text-lg">
              1
            </div>
          </div>
          <div className="flex flex-col gap-2 pt-1">
            <h3 className="text-xl font-bold text-text-main-light dark:text-text-main-dark">
              Prep the Aromatics
            </h3>
            <p className="text-base md:text-lg text-text-main-light/80 dark:text-text-main-dark/80 leading-relaxed">
              Pound garlic and chilies together in a mortar and pestle until
              they form a coarse paste. If you don't have a mortar, you can
              mince them finely with a knife. This releases the essential oils
              for better flavor.
            </p>
          </div>
        </div>
        {/* Step 2 */}
        <div className="flex gap-6 relative">
          <div className="shrink-0 z-10">
            <div className="w-10 h-10 rounded-xl bg-primary shadow-lg shadow-primary/30 flex items-center justify-center text-white font-black text-lg">
              2
            </div>
          </div>
          <div className="flex flex-col gap-2 pt-1">
            <h3 className="text-xl font-bold text-text-main-light dark:text-text-main-dark">
              Sear the Chicken
            </h3>
            <p className="text-base md:text-lg text-text-main-light/80 dark:text-text-main-dark/80 leading-relaxed">
              Heat oil in a wok or large pan over high heat. Add the
              garlic-chili paste and stir-fry for 20 seconds until fragrant (be
              careful not to burn it, your kitchen will smell spicy!). Add the
              chicken and stir-fry until cooked through.
            </p>
          </div>
        </div>
        {/* Step 3 */}
        <div className="flex gap-6 relative">
          <div className="shrink-0 z-10">
            <div className="w-10 h-10 rounded-xl bg-primary shadow-lg shadow-primary/30 flex items-center justify-center text-white font-black text-lg">
              3
            </div>
          </div>
          <div className="flex flex-col gap-2 pt-1">
            <h3 className="text-xl font-bold text-text-main-light dark:text-text-main-dark">
              Season
            </h3>
            <p className="text-base md:text-lg text-text-main-light/80 dark:text-text-main-dark/80 leading-relaxed">
              Add oyster sauce, soy sauce, dark soy sauce, and sugar. Toss
              everything to coat the chicken evenly. If the pan gets too dry,
              add a splash of water (about 1-2 tbsp).
            </p>
          </div>
        </div>
        {/* Step 4 */}
        <div className="flex gap-6 relative">
          <div className="shrink-0 z-10">
            <div className="w-10 h-10 rounded-xl bg-primary shadow-lg shadow-primary/30 flex items-center justify-center text-white font-black text-lg">
              4
            </div>
          </div>
          <div className="flex flex-col gap-2 pt-1">
            <h3 className="text-xl font-bold text-text-main-light dark:text-text-main-dark">
              Add Basil &amp; Serve
            </h3>
            <p className="text-base md:text-lg text-text-main-light/80 dark:text-text-main-dark/80 leading-relaxed">
              Turn off the heat. Immediately toss in the basil leaves. The
              residual heat will wilt the basil perfectly without overcooking
              it, keeping the flavor fresh. Serve hot over jasmine rice,
              optionally topped with a crispy fried egg.
            </p>
            <div
              className="mt-4 rounded-xl overflow-hidden h-64 w-full bg-cover bg-center"
              alt="Final dish plated with rice and topped with a fried egg"
              style={{
                backgroundImage: 'url("/public/images/d1.png")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Prep;
