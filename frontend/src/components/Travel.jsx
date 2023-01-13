import { useRef, useState } from "react";
import Leaflet from "./Leaflet";
import "../style/Travel.css";
import Header from "./Header";

export default function Travel() {
  const [map, setMap] = useState(false);
  const startRef = useRef();
  const endRef = useRef();
  const [styleMap, setStyleMap] = useState("leafletcontener");
  const [points, setPoints] = useState();
  function handleClick() {
    setMap(true);
    setStyleMap("leafletcontenerfull");
  }
  function handleSubmit(event) {
    event.preventDefault();

    fetch(
      `https://api-adresse.data.gouv.fr/search/?q=${startRef.current.value}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        let [lng, lat] = data.features[0].geometry.coordinates;
        const startLatLng = [lat, lng];

        fetch(
          `https://api-adresse.data.gouv.fr/search/?q=${endRef.current.value}`,
          {
            method: "GET",
          }
        )
          .then((res) => res.json())
          .then((data2) => {
            [lng, lat] = data2.features[0].geometry.coordinates;
            const endLatLng = [lat, lng];

            const vector = [
              endLatLng[0] - startLatLng[0],
              endLatLng[1] - startLatLng[1],
            ];

            /* const norm = math.sqrt(vector[0] ** 2 + vector[1] ** 2);
            const normalizedVector = vector.map((coord) => coord / norm); */

            const othersPoints = [
              [startLatLng[0] + vector[0] / 5, startLatLng[1] + vector[1] / 5],
              [
                startLatLng[0] + (2 * vector[0]) / 5,
                startLatLng[1] + (2 * vector[1]) / 5,
              ],
              [
                startLatLng[0] + (3 * vector[0]) / 5,
                startLatLng[1] + (3 * vector[1]) / 5,
              ],
            ];

            setPoints([startLatLng, ...othersPoints, endLatLng]);
          })
          .catch((err) => {
            console.warn(err);
          });
      })
      .catch((err) => {
        console.warn(err);
      });
  }

  return (
    <div>
      <Header />
      {map ? (
        <Leaflet styleMap={styleMap} points={points} />
      ) : (
        <form className="trajet_container" onSubmit={handleSubmit}>
          <div className="inputContainer">
            <input
              ref={startRef}
              type="text"
              id="depart"
              placeholder="  Départ..."
            />
            <input
              ref={endRef}
              type="text"
              id="arrivé"
              placeholder="  Arrivée..."
            />
          </div>
          <div className="container_btn">
            <button type="submit" className="validation_btn">
              valider
            </button>
          </div>
          <button
            type="button"
            className="leaflet_button"
            onClick={handleClick}
          >
            <Leaflet styleMap={styleMap} points={points} />
          </button>
        </form>
      )}
    </div>
  );
}
