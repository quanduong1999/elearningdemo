import Carousel from "./carousel";
import React from "react";
import TypicalCarousel from "./typicalCarousel";
import Teacher from "./teacher";

function Home() {
  return (
    <div className="home">
      <Carousel />
      <TypicalCarousel />
      <Teacher />
    </div>
  );
}

export default Home;
