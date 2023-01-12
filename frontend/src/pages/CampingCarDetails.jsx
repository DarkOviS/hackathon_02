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
      <p>Prix: {campingCar.price}</p>
      <p>Disponibilité: {campingCar.available}</p>
      <p>Permis requis: {campingCar.license}</p>
    </div>
  );
}
