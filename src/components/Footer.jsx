function Footer() {
  return (
    <footer className="bg-white border-t border-gray-2 py-8 px-6 md:px-20 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="size-6 text-primary">
            <span className="material-symbols-outlined text-2xl">
              restaurant_menu
            </span>
          </div>
          <span className="font-bold text-lg">RecipeFinder</span>
        </div>
        <div className="text-sm text-gray-500">© 2023 RecipeFinder. Tommy.</div>
      </div>
    </footer>
  );
}

export default Footer;
