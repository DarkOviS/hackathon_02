import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import "lrm-graphhopper";

import "./Routing.css";

function Routing() {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: [L.latLng(1.350794, 103.83595), L.latLng(1.392755, 103.91367)],
      router: L.Routing.graphHopper("4c036dcd-7ebb-451c-ba4b-c3c189f82d71"),
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
  }, [map]);

  return null;
}

export default Routing;
