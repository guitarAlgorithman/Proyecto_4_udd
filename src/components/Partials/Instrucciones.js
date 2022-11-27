import React from "react";
import { Container } from "react-bootstrap";

function Instrucciones() {
  return (
    <Container className=" bg-warning fluid">
      <h2>Instrucciones sobre la reserva</h2>
      <ol>
        <li>Ingrese su nombre y apellido</li>
        <li>Ingrese sus datos de contacto, en este caso su Email y Teléfono (+56 xxxx xxxx)</li>
        <li>Ingrese la fecha y hora que asistirá (recuerde llegar idealmente unos 10 minutos antes)</li>
        <li>Presione reserva y revise su email con su código de reserva</li>
      </ol>
    </Container>
  );
}

export default Instrucciones;
