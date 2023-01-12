import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import "./style/App.css";
import Travel from "./components/Travel";
import FiltersPage from "./pages/FiltersPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filters" element={<FiltersPage />} />;
          <Route path="/travel" element={<Travel />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
