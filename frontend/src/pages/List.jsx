import Vignette from "../Components/Vignette";

const campingCarData = [
  {
    id: 1,
    name: "campingcar1",
    image: "src/assets/campingcar1.png",
    price: "100,000€",
    available: "Disponible",
    license: "Permis B",
  },
  {
    id: 2,
    name: "campingcar2",
    image: "src/assets/campingcar1.png",
    price: "45,000€",
    available: "En maintenance",
    license: "Permis poids lourd",
  },
  {
    id: 3,
    name: "campingcar3",
    image: "src/assets/campingcar1.png",
    price: "80,000€",
    available: "Déjà loué",
    license: "Permis B",
  },
];
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
            available={campingCar.available}
            license={campingCar.license}
          />
        ))}
      </div>
    </div>
  );
}
