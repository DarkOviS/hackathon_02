import Header from "../components/Header";
import Vignette from "../components/Vignette";
import campingCarData from "../services/datalist";

export default function List() {
  return (
    <div>
      <Header />
      <div className="vignetteContainer">
        {campingCarData.map((campingCar) => (
          <Vignette
            key={campingCar.id}
            name={campingCar.name}
            image={campingCar.image}
            price={campingCar.price}
            available={campingCar.available}
            license={campingCar.license}
            id={campingCar.id}
          />
        ))}
      </div>
    </div>
  );
}
