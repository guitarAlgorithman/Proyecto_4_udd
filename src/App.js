import "./App.css";

import { Routes, Route, Navigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Home from "./components/Home";
import Menu from "./components/Menu";
import Reserva from "./components/Reserva";
import About from "./components/About";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
           <Route path="" element={<Home />} />
            <Route path="Home" element={<Home />} />
            <Route path="Menu" element={<Menu />} />
            <Route path="Reserva" element={<Reserva />} />
            <Route path="About" element={<About />} />
            <Route path="*" element={<Navigate to={'/'} />}
      />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
