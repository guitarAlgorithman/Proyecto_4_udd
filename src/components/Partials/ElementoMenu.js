import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function ElementoMenu() {
  let array = [
    {
      comida: "una comida",
      descripcion: "algo que se come",
      precio: 100,
    },
    {
      comida: "una comida 2",
      descripcion: "algo que se come 2",
      precio: 100,
    },
    {
      comida: "una comida 3",
      descripcion: "algo que se come2",
      precio: 100,
    },
    {
      comida: "una comida",
      descripcion: "algo que se come",
      precio: 100,
    },
  ];
  return (
    <Row xs={1} md={2} className="g-4">
      {array.map((i, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>{i.comida}</Card.Title>
              <Card.Text>
                {i.descripcion}
              </Card.Text>
              <Card.Subtitle>
                ${i.precio}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default ElementoMenu;
