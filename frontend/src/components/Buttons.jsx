import { useState } from "react";

function Buttons() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
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
      {openMenu && <div>Menu filtre</div>}
    </>
  );
}

export default Buttons;
