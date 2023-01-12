import { useGeolocated } from "react-geolocated";

function Geolocation() {
  const { coords } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });

  return (
    <div>
      {coords ? (
        <table>
          <tbody>
            <tr>
              <td>latitude</td>
              <td>{coords.latitude}</td>
            </tr>
            <tr>
              <td>longitude</td>
              <td>{coords.longitude}</td>
            </tr>
            <tr>
              <td>altitude</td>
              <td>{coords.altitude}</td>
            </tr>
            <tr>
              <td>heading</td>
              <td>{coords.heading}</td>
            </tr>
            <tr>
              <td>speed</td>
              <td>{coords.speed}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <div>Getting the location data&hellip; </div>
      )}
    </div>
  );
}

export default Geolocation;

// another way to do it (not using react-geolocated)):

/* function useGeolocated() {
  const [coords, setCoords] = useState();

  useEffect(() => {
    function success(pos) {
      setCoords(pos.coords);
    }

    function error(err) {
      console.error(`ERROR(${err.code}): ${err.message}`);
    }

    const options = {
      enableHighAccuracy: false,
      timeout: 5000,
      maximumAge: 0,
    };

    const id = navigator.geolocation.watchPosition(success, error, options);

    return () => {
      navigator.geolocation.clearWatch(id);
    };
  }, []);
  return { coords };
} */
