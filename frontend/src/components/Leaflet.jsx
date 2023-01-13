import { MapContainer, TileLayer } from "react-leaflet";
import PropTypes from "prop-types";
import "leaflet/dist/leaflet.css";
import "../style/Leaflet.css";
import Routing from "./RoutingMachine";

export default function Leaflet({ styleMap, points }) {
  return (
    <MapContainer
      className={styleMap}
      center={[46.76667, 2.45]}
      zoom={5}
      scrollWheelZoom
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {points && <Routing points={points} />}
    </MapContainer>
  );
}
Leaflet.propTypes = {
  styleMap: PropTypes.string.isRequired,
  points: PropTypes.arrayOf(PropTypes.number).isRequired,
};
