import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ElementoMenu=(props)=> {
  let array = []
  props.comidas.map(x=>{
    if(x.tipo===props.tipo){
    array.push(
    {
      comida:x.nombre,
      descripcion:x.descripcion,
      precio:x.precio,
      imagen:x.imagen
    })}})
  return (
    <Row xs={1} md={2} className="g-4">
      {array.map((i, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={i.imagen} />
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
