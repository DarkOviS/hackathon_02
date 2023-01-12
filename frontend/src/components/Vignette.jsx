import PropTypes from "prop-types";
import "../style/vignette.css";
import { Link } from "react-router-dom";

export default function Vignette({
  name,
  image,
  price,
  available,
  license,
  id,
}) {
  return (
    <div className="vignette">
      <Link to={`/camping-cars/${id}`}>
        <img src={image} alt="campingcar" />
        <h1>{name}</h1>
      </Link>
      <ul>
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
