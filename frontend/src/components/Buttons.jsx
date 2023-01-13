import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../style/Buttons.css";
import Filters from "./Filters";

export default function Buttons({ openMenu, setOpenMenu }) {
  return (
    <>
      <div className="buttonsContainer">
        <button
          type="button"
          className="buttonFilter"
          onClick={() => setOpenMenu(!openMenu)}
        >
          Filter
        </button>
        <Link to="/travel">
          <button type="button" className="buttonFilter">
            Trajet
          </button>
        </Link>
      </div>
      {openMenu && <Filters />}
    </>
  );
}
Buttons.propTypes = {
  openMenu: PropTypes.bool.isRequired,
  setOpenMenu: PropTypes.func.isRequired,
};
