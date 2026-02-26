import { Fragment } from "react";
import Categories from "../components/Categories";
import Hero from "../components/Hero";
import Trending from "../components/Trending";

function HomePage() {
  return (
    <Fragment>
      <main className="max-w-7xl mx-auto p-7">
        {/*Hero */}
        <Hero />
        {/* Categories Section*/}
        <Categories />
        {/* Trending Section */}
        <Trending />
      </main>
    </Fragment>
  );
}

export default HomePage;
