import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const categoriesStore = (set) => ({
  categories: [],
  setCategories: (newCategories) => {
    set({ categories: newCategories });
  },
});

const useCategoriesStore = create(categoriesStore);

export default useCategoriesStore;
