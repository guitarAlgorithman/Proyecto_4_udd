import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "../statics/styles/Menu.css";
import {ComidasMenu} from "./Context";
import ElementoMenu from "./ElementoMenu";


function Menus() {


  let comidasMenu =useContext(ComidasMenu)
    
  //console.log(comidasMenu);

  return (
    <div >
      
      <header>
            <h1>¡Bienvenido a nuestro menú!</h1>
        </header>
   
    <div className="mt-5">
        <Container className="text-center">
      <Accordion defaultActiveKey={["0"]} alwaysOpen >
        <Accordion.Item eventKey="0">
          <Accordion.Header >Recomendaciones</Accordion.Header>
          <Accordion.Body>
            <ElementoMenu tipo="Recomendacion" comidas={comidasMenu}/>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Bebidas y licores</Accordion.Header>
          <Accordion.Body>
            <ElementoMenu tipo="Bebestibles" comidas={comidasMenu}/>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Comida Italiana - Pastas y otros</Accordion.Header>
          <Accordion.Body>
            <ElementoMenu tipo="Comidas" comidas={comidasMenu}/>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Postres</Accordion.Header>
          <Accordion.Body>
            <ElementoMenu tipo="Postres" comidas={comidasMenu}/>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </Container>
    </div>
    </div>
  );
}

export default Menus;
