import React from 'react'
import { Link } from "react-router-dom";
function Button_Reserva() {
    return (
        <Link className="btn btn-outline-light btn-lg" to="/Reserva" role="button">
          Reserva tu mesa
        </Link>
      );
}

export default Button_Reserva