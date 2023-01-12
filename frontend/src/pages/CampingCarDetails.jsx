import React from "react";
import { useParams } from "react-router-dom";
import campingCarData from "../services/datalist";

export default function CampingCarDetails() {
  const { id } = useParams();
  const campingCar = campingCarData.find((c) => c.id === parseInt(id, 10));

  return (
    <div>
      <h1>{campingCar.name}</h1>
      <img src={campingCar.image} alt="campingcar" />
      <p>Price: {campingCar.price}</p>
      <p>Availability: {campingCar.availability}</p>
      <p>LicenseRequired: {campingCar.licenseRequired}</p>
    </div>
  );
}
