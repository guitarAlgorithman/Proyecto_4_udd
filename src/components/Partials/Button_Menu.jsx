import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Button_Menu() {
  return (
    <Link className="btn btn-outline-light btn-lg" to="/Menu" role="button">
      Menú
    </Link>
  );
}

export default Button_Menu;
