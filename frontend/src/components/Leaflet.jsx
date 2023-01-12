import { MapContainer, Marker, TileLayer } from "react-leaflet";
import PropTypes from "prop-types";
import "leaflet/dist/leaflet.css";
import "../style/Leaflet.css";
import Routing from "./RoutingMachine";

export default function Leaflet({ styleMap }) {
  const position = [48.6496, -2.02518];
  return (
    <MapContainer
      className={styleMap}
      center={[48.6, -2.0]}
      zoom={6}
      scrollWheelZoom
    >
      <Marker position={position} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Routing />
    </MapContainer>
  );
}
Leaflet.propTypes = {
  styleMap: PropTypes.string.isRequired,
};
