import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="max-w-full flex items-center h-18.75 bg-gray-3 border-b border-gray-2 fixed top-0 left-0 right-0 z-9999">
      <div className="w-full md:max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-primary">
            local_dining
          </span>
          <Link to="/">
            <span className="text-secondary capitalize font-bold text-xl font-sans">
              recipefinder
            </span>
          </Link>
        </div>

        <ul className="hidden sm:flex sm:items-center sm:gap-8 cursor-pointer ">
          <NavLink
            to="/"
            className="text-sm text-secondary font-medium font-sans hover:text-primary transition-all duration-200"
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="recipes/all-categories"
            className="text-sm text-secondary font-medium font-sans hover:text-primary transition-all duration-200"
          >
            <li className="">Categories</li>
          </NavLink>
          <NavLink
            to="/recipes/favorites"
            className="text-sm text-secondary font-medium font-sans hover:text-primary transition-all duration-200"
          >
            <li>Saved</li>
          </NavLink>
        </ul>

        <button className="border border-primary text-primary py-3 px-6 rounded-full text-sm cursor-pointer font-bold font-sans hover:bg-primary hover:text-white hover:border-white">
          About
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
