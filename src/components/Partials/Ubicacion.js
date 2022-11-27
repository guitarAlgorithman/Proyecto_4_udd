import React from "react";
import { Row } from "react-bootstrap";

function Ubicacion() {
  return (
    <div>
      <Row>
        <h3>Nuestro local:</h3>
      </Row>
      <div className="embed-responsive embed-responsive-4by3 m-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3331.0527306434556!2d-70.66644718498202!3d-33.39578848078961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c67c9728d48f%3A0xfb6cfa0887e96d55!2sNiter%C3%B3i%203244%2C%20Conchal%C3%AD%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1sen!2scl!4v1669488739199!5m2!1sen!2scl"
          width="80%"
          height="50%"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          title="mapa"
        />
      </div>
    </div>
  );
}

export default Ubicacion;
