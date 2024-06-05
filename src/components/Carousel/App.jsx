import React from "react";
import { slides } from "../../Data/carouselData.json";
import Carousel from "./Carousel";
import "./Carousel.css";
const App = () => {
   return (
      <div className="App">
         <Carousel data={slides} />
      </div>
   );
};

export default App;
