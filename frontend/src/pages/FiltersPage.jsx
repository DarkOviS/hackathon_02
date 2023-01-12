import Header from "../components/Header";

export default function FiltersPage() {
  return (
    <main>
      <Header />
      <label htmlFor="price">Price:</label>
      <p>Minimum:</p>
      <input type="number" />
      <p className="maxPrice">Maximum:</p>
      <input type="number" />
      <br />
      <label htmlFor="disponibilité">Disponibilité:</label>
      <input type="checkbox" />
      <br />
      <label htmlFor="permis">Permis:</label>
      <p className="permisStatusB">B:</p>
      <input type="checkbox" />
      <p className="permisStatusB">Poids Lourd:</p>
      <input type="checkbox" />
      <br />
      <label htmlFor="carburant">Carburant:</label>
      <p className="carburantElectrique">Electrique:</p>
      <input type="checkbox" />
      <p className="carburantEssence">Essence:</p>
      <input type="checkbox" />
      <p className="carburantDiesel">Diesel:</p>
      <input type="checkbox" />
      <br />
      <label htmlFor="nbrPersonne">Nombre de personnes:</label>
      <p className="pers4">4:</p>
      <input type="checkbox" />
      <p className="pers5">5:</p>
      <input type="checkbox" />
      <p className="pers6">6:</p>
      <input type="checkbox" />
      <p className="pers7">7:</p>
      <input type="checkbox" />
      <p className="pers8">8:</p>
      <input type="checkbox" />
      <p className="pers9">9:</p>
      <input type="checkbox" />
      <br />
    </main>
  );
}
