import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pokedex from "./pages/Pokedex";
import PokeDetails from "./pages/PokeDetails";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/pokemon/:name" element={<PokeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
