import { useState } from "react";
import Leaflet from "./Leaflet";
import "../style/Travel.css";
import Geolocation from "./Geolocation";
import Header from "./Header";

export default function Travel() {
  const [map, setMap] = useState(false);
  const [styleMap, setStyleMap] = useState("leafletcontener");
  function handleClick() {
    setMap(true);
    setStyleMap("leafletcontenerfull");
  }
  return (
    <div>
      <Header />
      {map ? (
        <Leaflet styleMap={styleMap} />
      ) : (
        <div className="trajet_container">
          <div className="inputContainer">
            <input type="text" id="depart" placeholder="  Départ..." />
            <input type="text" id="arrivé" placeholder="  Arrivée..." />
          </div>
          <div className="container_btn">
            <input type="submit" value="valider" className="validation_btn" />
          </div>
          <p>Destination: Biarritz - 1000 km</p>
          <button
            type="button"
            className="leaflet_button"
            onClick={handleClick}
          >
            <Leaflet styleMap={styleMap} />
          </button>

          <p>Arrêts stationnement disponible:</p>
          <ul>
            <li>coucou</li>
            <li>coucou</li>
            <li>coucou</li>
            <li>coucou</li>
          </ul>
          <Geolocation />
        </div>
      )}
    </div>
  );
}
