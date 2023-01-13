import Vignette from "../components/Vignette";
import campingCarData from "../services/datalist";

export default function List() {
  return (
    <div>
      <div className="vignetteContainer">
        {campingCarData.map((campingCar) => (
          <Vignette
            key={campingCar.id}
            name={campingCar.name}
            image={campingCar.image}
            price={campingCar.price}
            availability={campingCar.availability}
            licenseRequired={campingCar.licenseRequired}
            id={campingCar.id}
          />
        ))}
      </div>
    </div>
  );
}
