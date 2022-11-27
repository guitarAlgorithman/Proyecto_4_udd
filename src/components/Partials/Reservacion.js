import React from "react";
import { Container} from "react-bootstrap";
import { saveData } from "../../database/DataManager";
import emailjs from "@emailjs/browser";



const nombre = React.createRef();
const email = React.createRef();
const telefono = React.createRef();
const comensales = React.createRef();
const fechaReserva = React.createRef();
const horaReserva = React.createRef();


function Reservacion() {


  async function handleSubmit(e) {

    e.preventDefault()

    let fechaAjustada = new Date(
      fechaReserva.current.value + " " + horaReserva.current.value
    );
    let codigo = (Math.random() + 1).toString(36).substring(7);

    let reserva = {
      nombre: nombre.current.value,
      email: email.current.value,
      telefono: telefono.current.value,
      comensales: comensales.current.value,
      fecha: fechaAjustada,
      codigo: codigo,
    };

    if (
      reserva.nombre === "" ||
      reserva.email === "" ||
      reserva.telefono === "" ||
      reserva.comensales < 1
    ) {

      alert("Favor ingrese todos los datos solicitados.")

    } else {
      emailjs.init("8FBVW-xfYDvAPkBul");
      emailjs
        .send("service_ari3tzm", "template_j9raikm", {
          from_name: "gustavo.henriquez.m@gmail.com",
          to_name: nombre.current.value,
          message: `Su reserva tiene codigo: ${codigo}`,
          reply_to: email.current.value,
        })
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      await saveData("reservas", reserva)
        .then()
        .catch((e) => {
          console.log(e);
        });

        alert("Reserva lista, favor revise su correo.")
        e.target.reset();
    }
  }

  return (
    <Container>
      <header>
        <h3>Reserve su mesa</h3>
      </header>
      <form className="m-5"  onSubmit={handleSubmit}>
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
        <button className="btn btn-primary mb-5" type="submit">
        Reservar
      </button>
      </form>

    </Container>
  );
}

export default Reservacion;
