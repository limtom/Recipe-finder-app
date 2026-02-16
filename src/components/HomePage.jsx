import { Fragment } from "react";
import Categories from "./Categories";
import Hero from "./Hero";
import Trending from "./Trending";
import Footer from "./Footer";

function HomePage() {
  return (
    <Fragment>
      <main classNameName="max-w-7xl mx-auto p-7">
        {/*Hero */}
        <Hero />
        {/* Categories Section*/}
        <Categories />
        {/* Trending Section */}
        <Trending />
      </main>
      {/*footer */}
      <Footer />
    </Fragment>
  );
}

export default HomePage;
