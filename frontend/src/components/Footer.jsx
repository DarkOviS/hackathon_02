import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import campingCarData from "../services/datalist";
import "../style/header.css";

export default function Footer() {
  const carousel = campingCarData.map((campingCar) => {
    return (
      <div key={campingCar.id}>
        <img src={campingCar.image} alt={campingCar.name} />
      </div>
    );
  });
  return (
    <div>
      <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay
        infiniteLoop
        interval={3000}
      >
        {carousel}
      </Carousel>
    </div>
  );
}
