import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import "./App.css";
import Trajet from "./components/Trajet";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trajet" element={<Trajet />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
