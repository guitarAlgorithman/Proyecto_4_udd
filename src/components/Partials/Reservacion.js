import React from "react";
import { Container } from "react-bootstrap";

function Reservacion() {
  return (
    <Container>
      <header>
        <h3>Reserve su mesa</h3>
      </header>
      <div className="m-5">
        <div className="row mx-auto">
          <div className="col-lg-4">
            <label for="" className="form-label">
              Nombre
            </label>
            <input type="text" className="form-control" name="" id=""></input>
          </div>

          <div className="col-lg-4">
            <label for="" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" name="" id=""></input>
          </div>

          <div className="col-lg-4">
            <label for="" className="form-label">
              Teléfono
            </label>
            <input type="phone" className="form-control" name="" id=""></input>
          </div>
        </div>
        <div className="m-5">
          <div className="row mx-auto">
            <div className="col-lg-4">
              <label for="" className="form-label">
                Número de comensales
              </label>
              
              
              <input
                type="number"
                className="form-control"
                name=""
                id=""
                aria-describedby="helpId"
                placeholder=""
              ></input>
            </div>

            <div className="col-lg-4">
              <label for="" className="form-label">
                Fecha de reserva
              </label>
              <input
                type="date"
                className="form-control"
                name=""
                id=""
                aria-describedby="helpId"
                placeholder=""
              ></input>
            </div>

            <div className="col-lg-4">
              <label for="" className="form-label">
                Hora de llegada
              </label>
              <input
                type="time"
                className="form-control"
                name=""
                id=""
                aria-describedby="helpId"
                placeholder=""
              ></input>
            </div>
        </div>
        </div>
      </div>
      <button className="btn btn-primary mb-3">Reservar</button>
    </Container>
  );
}

export default Reservacion;
