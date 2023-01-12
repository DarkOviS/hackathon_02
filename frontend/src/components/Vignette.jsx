import PropTypes from "prop-types";
import "../style/vignette.css";

export default function Vignette({ name, image, price, available, license }) {
  return (
    <div className="vignette">
      <img className="campingCarImage" src={image} alt="campingcar" />
      <h2 className="campingCarName">{name}</h2>
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
};
