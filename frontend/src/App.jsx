import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";

import "./style/App.css";
import Trajet from "./components/Trajet";

function App() {
  return (
    <Router>
      <div className="App">
        <List />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trajet" element={<Trajet />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
