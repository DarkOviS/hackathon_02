import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import "lrm-graphhopper";

import "./Routing.css";

function Routing({ points }) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: points.map((point) => L.latLng(...point)),
      router: L.Routing.graphHopper(import.meta.env.VITE_GRAPH_HOPPER_API_KEY),
      lineOptions: {
        styles: [
          { color: "black", opacity: 0.3, weight: 11 },
          { color: "white", opacity: 0.9, weight: 9 },
          { color: "blue", opacity: 1, weight: 3 },
        ],
      },
      autoRoute: true,
    }).addTo(map);
    // eslint-disable-next-line consistent-return
    return () => map.removeControl(routingControl);
  }, [map, points]);

  return null;
}

export default Routing;
