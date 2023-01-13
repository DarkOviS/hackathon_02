import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import campingCarData from "../services/datalist";
import styles from "../style/CampingCarDetails.module.css";
import Header from "../components/Header";

export default function CampingCarDetails() {
  const { id } = useParams();
  const campingCar = campingCarData.find((c) => c.id === parseInt(id, 10));

  return (
    <div className={styles.container}>
      <Header />
      <div>
        <h1 className={styles.line}>{campingCar.name}</h1>
        <p className={styles.line}>Prix: {campingCar.price}</p>
        <p className={styles.line}>Statue: {campingCar.Availability}</p>
        <p className={styles.line}>
          Permis Requis: {campingCar.LicenseRequired}
        </p>
      </div>
      <div className={styles.pic}>
        <img
          style={{ backgroundImage: `url(${campingCar.image})` }}
          className={styles.img}
          src={campingCar.image}
          alt={campingCar.name}
        />
      </div>
      <Footer />
    </div>
  );
}
