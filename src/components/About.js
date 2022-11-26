import React from "react";
import { Container, Row } from "react-bootstrap";
import Ubicacion from "./Partials/Ubicacion";

function About() {
  return (
    <Container >
      <h1 className="text-center">Sobre nosotros</h1>
      <hr />
      <Row>
        
      <div className="mt-5  text-justify col-lg-6 bg-warning">
        
        <Row className="m-2">
        <h2>¿Quienes Somos?</h2>
        Somos un restaurant de comida italiana cuya función es brindarles la
        mejor experiencia en lo que se refiere a la gastronomía de nuestro país.
        Para ello contamos con una variada carta que mezcla tanto lo tradicional de 
        comida italana como también los más nuevo.
        </Row>

      </div>
      <p className="mt-5  text-justify col-lg-6">
        <h2>¿Donde encontranos?</h2>
        <p className="bg-warning ">Niteroi 3244, Conchalí, Santiago, Chile</p>
      </p>
      </Row>
      <Row>
        <Ubicacion/>
      </Row>
      <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    </Container>
  );
}

export default About;
