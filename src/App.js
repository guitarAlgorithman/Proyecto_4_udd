import "./App.css";

import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Home from "./components/Home";
import Menu from "./components/Menu";
import Reserva from "./components/Reserva";
import About from "./components/About";
import NavBar from "./components/Partials/NavBar";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="Home" element={<Home />} />
            <Route path="Menu" element={<Menu />} />
            <Route path="Reserva" element={<Reserva />} />
            <Route path="About" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
