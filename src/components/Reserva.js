import React from "react";
import { Row } from "react-bootstrap";
import Instrucciones from "./Partials/Instrucciones";
import Reservacion from "./Partials/Reservacion";

function Reserva() {
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <Row className="mx-auto mb-5 col-lg-7">
        <Instrucciones className="m-5"/>
      </Row>
      <Row>
        <Reservacion />
      </Row>

    </div>
  );
}

export default Reserva;
