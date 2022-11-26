import React from "react";
import { Container } from "react-bootstrap";
import { saveData } from "../../database/DataManager";

const nombre = React.createRef();
const email = React.createRef();
const telefono = React.createRef();
const comensales = React.createRef();
const fechaReserva = React.createRef();
const horaReserva = React.createRef();

function Reservacion() {
  

  async function handleSubmit(e) {

    let fechaAjustada=new Date(fechaReserva.current.value+" "+horaReserva.current.value)

    console.log(fechaAjustada);

    let reserva=({
      nombre: nombre.current.value,
      email: email.current.value,
      telefono: telefono.current.value,
      comensales: comensales.current.value,
      fecha: fechaAjustada,
    });
    await saveData("reservas", reserva).then(
      
    )
    .catch((e) => {
      console.log(e);
    });
    console.log(reserva);
    e.preventDefault();
  }

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
            <input type="text" className="form-control" ref={nombre}></input>
          </div>

          <div className="col-lg-4">
            <label for="" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" ref={email}></input>
          </div>

          <div className="col-lg-4">
            <label for="" className="form-label">
              Teléfono
            </label>
            <input type="phone" className="form-control" ref={telefono}></input>
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
                ref={comensales}
              ></input>
            </div>

            <div className="col-lg-4">
              <label for="" className="form-label">
                Fecha de reserva
              </label>
              <input
                type="date"
                className="form-control"
                ref={fechaReserva}
              ></input>
            </div>

            <div className="col-lg-4">
              <label for="" className="form-label">
                Hora de llegada
              </label>
              <input
                type="time"
                className="form-control"
                ref={horaReserva}
              ></input>
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-primary mb-3" onClick={handleSubmit}>
        Reservar
      </button>
    </Container>
  );
}

export default Reservacion;
