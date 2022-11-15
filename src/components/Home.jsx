import React from "react";

import { Routes, Route } from "react-router-dom";


import Container from "react-bootstrap/Container";
import Button_Menu from "./Partials/Button_Menu";
import Button_Reserva from "./Partials/Button_Reserva";

function Home() {
  return (
    <>
      <Container fluid>
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3 mt-5">¡Disfruta de la verdadera Italia!</h1>
              <h4 className="mb-3">
                ¡Opciones de pastas, lasagnas, quesos, vinos y mucho más!
              </h4>
              <div className="col-lg">
              <div className="m-2">
              <Button_Menu/>
              </div>
              <div className="m-2">
              <Button_Reserva/>
              </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Home;
