import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import SearchResult from "./pages/SearchResult";
import RecipeDetails from "./pages/RecipeDetails";
import Notfound from "./pages/Notfound";
import AllCategories from "./pages/AllCategories";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="search-results" element={<SearchResult />} />
        <Route path="recipes/:id" element={<RecipeDetails />} />
        <Route path="recipes/all-categories" element={<AllCategories />} />
        <Route path="*" element={<Notfound />} />
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
}

export default App;
