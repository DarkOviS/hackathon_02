import { MapContainer, TileLayer } from "react-leaflet";
import PropTypes from "prop-types";
import "leaflet/dist/leaflet.css";
import "../style/Leaflet.css";

export default function Leaflet({ styleMap }) {
  return (
    <MapContainer
      className={styleMap}
      center={[46.227638, 2.213749]}
      zoom={6}
      scrollWheelZoom
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}
Leaflet.propTypes = {
  styleMap: PropTypes.string.isRequired,
};
