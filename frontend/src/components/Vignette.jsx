import PropTypes from "prop-types";
import "../style/vignette.css";
import { Link } from "react-router-dom";

export default function Vignette({
  id,
  image,
  name,
  price,
  availability,
  licenseRequired,
}) {
  return (
    <div className="vignette">
      <Link to={`/camping-cars/${id}`}>
        <img className="campingCarImage" src={image} alt="campingcar" />
        <h2 className="campingCarName">{name}</h2>
      </Link>
      <ul className="listContainer">
        <li>{availability}</li>
        <li>{price}</li>
        <li>{licenseRequired}</li>
      </ul>
    </div>
  );
}
Vignette.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  availability: PropTypes.string.isRequired,
  licenseRequired: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
