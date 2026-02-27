import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="max-w-full flex items-center h-18.75 bg-gray-3 border-b border-gray-2 fixed top-0 left-0 right-0 z-9999">
      <div className="w-full md:max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-primary">
            local_dining
          </span>
          <span className="text-secondary capitalize font-bold text-xl font-sans">
            recipefinder
          </span>
        </div>

        <ul className="hidden sm:flex sm:items-center sm:gap-8 cursor-pointer ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm font-bold font-sans hover:text-primary transition-all duration-200 ${
                isActive ? "text-primary" : "text-secondary"
              }`
            }
          >
            <li>Home</li>
          </NavLink>
          <NavLink>
            <li className="text-sm text-secondary font-medium font-sans hover:text-primary transition-all duration-200">
              Saved Recipes
            </li>
          </NavLink>
          <NavLink>
            <li className="text-sm text-secondary font-medium font-sans hover:text-primary transition-all duration-200">
              About
            </li>
          </NavLink>
        </ul>

        <button className="bg-primary text-white py-3 px-6 rounded-full text-sm cursor-pointer font-bold font-sans hover:bg-secondary">
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
