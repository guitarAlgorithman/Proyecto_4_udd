import React from "react";
import { Button, Container, Row } from "react-bootstrap";

function CheckReserva() {
  return (
   
        <div>
          <hr />
        
      <header>
        <h3>Vea el estado de su reserva</h3>
      </header>
      <Container>
      <Row>

      <div className="col-lg-4 mx-auto">
          <label for="" className="form-label">Ingrese el Email de Reserva</label>
          <input type="text" className="form-control" name="" id="" ></input>        
        </div>
        <div className="col-lg-4 mx-auto">
          <label for="" className="form-label">Ingrese el código de reserva</label>
          <input type="text" className="form-control" name="" id="" ></input>        
        </div>
        <div className="col-lg-4 m-auto">
        <button className="btn btn-primary mt-3 mb-5 m-auto">Ver estado de reserva</button>       
        </div>
        

      </Row>
      
      </Container>
      </div>
   
  );
}

export default CheckReserva;
