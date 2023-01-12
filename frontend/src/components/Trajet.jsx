import Leaflet from "./Leaflet";
import "./Trajet.css";

export default function Trajet() {
  return (
    <div className="trajet_container">
      <label htmlFor="depart">Départ : </label>
      <input type="text" id="depart" />
      <label htmlFor="arrivé">Arrivé : </label>
      <input type="text" id="arrivé" />
      <input type="submit" value="valider" className="validation_btn" />
      <p>Destination: Biarritz - 1000 km</p>
      <Leaflet />
      <p>Arrêts stationnement disponible:</p>
      <ul>
        <li>coucou</li>
        <li>coucou</li>
        <li>coucou</li>
        <li>coucou</li>
      </ul>
    </div>
  );
}
