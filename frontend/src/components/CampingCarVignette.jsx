import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "../style/CampingCarVignette.module.css";

function CampingCarVignette({
  id,
  image,
  name,
  price,
  availability,
  licenseRequired,
}) {
  return (
    <Link to={`/camping-cars/${id}`}>
      <div className={styles.container}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.line}>Prix: {price}</p>
        <p className={styles.line}>Disponibilité: {availability}</p>
        <p className={styles.line}>Permis Requis: {licenseRequired}</p>
      </div>
      <div className={styles.pic}>
        <img className={styles.img} src={image} alt={name} />
      </div>
    </Link>
  );
}

CampingCarVignette.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  availability: PropTypes.string.isRequired,
  licenseRequired: PropTypes.string.isRequired,
};
export default CampingCarVignette;
