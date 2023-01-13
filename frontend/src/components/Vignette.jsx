import PropTypes from "prop-types";
import "../style/vignette.css";
import { Link } from "react-router-dom";

export default function Vignette({
  id,
  image,
  name,
  price,
  available,
  license,
}) {
  return (
    <div className="vignette">
      <Link to={`/camping-cars/${id}`}>
        <img className="campingCarImage" src={image} alt="campingcar" />
      </Link>
      <p className="campingCarName">{name}</p>
      <ul className="listContainer">
        <li>{available}</li>
        <li>{price}</li>
        <li>{license}</li>
      </ul>
    </div>
  );
}
Vignette.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  available: PropTypes.string.isRequired,
  license: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
