import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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
      <div className="CampingCarVignette">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>Price: {price}</p>
        <p>Availability: {availability}</p>
        <p>License required: {licenseRequired}</p>
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
