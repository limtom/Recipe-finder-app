function Navbar() {
  return (
    <nav className="max-w-full flex items-center h-18.75 bg-gray-3 border-b border-gray-2 ">
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
          <li className="text-sm text-secondary font-bold font-sans hover:text-primary transition-all duration-200">
            Home
          </li>
          <li className="text-sm text-secondary font-medium font-sans hover:text-primary transition-all duration-200">
            Saved Recipes
          </li>
          <li className="text-sm text-secondary font-medium font-sans hover:text-primary transition-all duration-200">
            About
          </li>
        </ul>

        <button className="bg-primary text-white py-3 px-6 rounded-full text-sm cursor-pointer font-bold font-sans hover:bg-secondary">
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
