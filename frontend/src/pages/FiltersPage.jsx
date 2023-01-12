import Header from "../components/Header";
import "../style/filterPage.css";

export default function FiltersPage() {
  return (
    <>
      <Header />
      <main className="mainFilter">
        <div id="container1">
          <label htmlFor="price">Price:</label>
          <input type="number" placeholder="minimum..." />
          <input type="number" placeholder="maximum" />
        </div>
        <div id="disponibilité">
          <label htmlFor="disponibilité">Disponibilité:</label>
          <input type="checkbox" />
        </div>
        <div id="permis">
          <p className="permisStatusB">Permis B:</p>
          <input type="checkbox" />
          <p className="permisStatusB">Permis poids lourd:</p>
          <input type="checkbox" />
        </div>
        <div id="carburant">
          <p className="carburantElectrique">Electrique:</p>
          <input type="checkbox" />
          <p className="carburantEssence">Essence:</p>
          <input type="checkbox" />
          <p className="carburantDiesel">Diesel:</p>
          <input type="checkbox" />
        </div>
        <div id="personnes">
          <label htmlFor="nbrPersonne">Nombre de personnes:</label>
          <br />
          <select name="numberofpassengers">
            <option value="">--Nombre de passagers--</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
        </div>
      </main>
    </>
  );
}
