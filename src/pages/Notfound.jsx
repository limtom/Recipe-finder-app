import { Link } from "react-router-dom";
import Search from "../components/Search";

function Notfound() {
  return (
    <main className="mx-auto grow flex items-center justify-center px-6 py-12 md:py-20">
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-12">
        {/* Illustration Side */}
        <div className="flex-1 flex justify-center w-full">
          <div className="relative w-64 h-64 md:w-96 md:h-96 bg-primary/5 rounded-full flex items-center justify-center">
            <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-transparent rounded-full blur-2xl"></div>
            <div className="relative z-10 text-primary flex flex-col items-center">
              <span className="material-symbols-outlined text-9xl! mb-4">
                breakfast_dining
              </span>
              <div className="flex gap-2 -mt-8">
                <span className="material-symbols-outlined text-4xl! text-slate-400 ">
                  close
                </span>
                <span className="material-symbols-outlined text-4xl! text-slate-400 ">
                  close
                </span>
              </div>
              <p className="mt-4 font-bold text-slate-400  uppercase tracking-widest text-xs">
                Burnt to a crisp
              </p>
            </div>
          </div>
        </div>
        {/* Content Side */}
        <div className="flex-1 text-center md:text-left space-y-8">
          <div className="space-y-4">
            <h1 className="text-slate-900 dark:text-slate-100 text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
              404 - Page Not Found
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              It seems this page has simmered away or never even hit the stove.
              The link you followed may be broken or the page has been moved.
              Let's get you back to the kitchen.
            </p>
          </div>
          {/* Search Bar */}
          <div className="w-1/5">
            <Search />
          </div>
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/">
              <a
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                href="#"
              >
                <span className="material-symbols-outlined mr-2">home</span>
                Go Back Home
              </a>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Notfound;
