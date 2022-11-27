import React from "react";
import { Link } from "react-router-dom";

function Button_Menu() {
  return (
    <Link className="btn btn-outline-light btn-lg" to="/Menu" role="button">
      Menú
    </Link>
  );
}

export default Button_Menu;
