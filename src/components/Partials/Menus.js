import React from "react";
import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "../statics/styles/Menu.css";
import ElementoMenu from "./ElementoMenu";


function Menus() {
  return (
    <div >
        <header>
            <h1>¡Bienvenido a nuestro menú!</h1>
        </header>
    <div className="mt-5">
        <Container className="text-center">
      <Accordion defaultActiveKey={["0"]} alwaysOpen >
        <Accordion.Item eventKey="0">
          <Accordion.Header class>Recomendaciones</Accordion.Header>
          <Accordion.Body>
            <ElementoMenu/>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Bebidas y licores</Accordion.Header>
          <Accordion.Body>
            
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Comida Italiana - Pastas y otros</Accordion.Header>
          <Accordion.Body>
            
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Postres</Accordion.Header>
          <Accordion.Body>
            
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </Container>
    </div>
    </div>
  );
}

export default Menus;
