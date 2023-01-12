import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./style/App.css";

import Home from "./pages/Home";
import Travel from "./components/Travel";
import List from "./pages/List";
import CampingCarDetails from "./pages/CampingCarDetails";
import FiltersPage from "./pages/FiltersPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filters" element={<FiltersPage />} />;
          <Route path="/travel" element={<Travel />} />
          <Route path="/list" element={<List />} />
          <Route path="/camping-cars/:id" element={<CampingCarDetails />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
