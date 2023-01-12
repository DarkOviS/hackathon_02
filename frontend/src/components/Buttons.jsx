import { useState } from "react";
import "../style/Buttons.css";

function Buttons() {
  const [openMenu, setOpenMenu] = useState(false);

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
        <button type="button" className="buttonTrajet">
          Trajet
        </button>
      </div>
      {openMenu && <div>Menu filtre</div>}
    </>
  );
}

export default Buttons;
