import { Link } from "react-router-dom";
import { useState } from "react";
import "../style/Buttons.css";

function Buttons() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className="buttonsContainer">
        <Link to="/filters">
          <button
            type="button"
            className="buttonFilter"
            onClick={() => setOpenMenu(!openMenu)}
          >
            Filter
          </button>
        </Link>
        <Link to="/travel">
          <button type="button" className="buttonTrajet">
            Trajet
          </button>
        </Link>
      </div>
      {openMenu && <div>Menu filtre</div>}
    </>
  );
}

export default Buttons;
