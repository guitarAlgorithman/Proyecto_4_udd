import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { NavLink } from "react-router-dom";
import "../statics/styles/NavBar.css";

function NavBar() {
  return (
    <div className="navbarclase">

      <Navbar bg="warning" variant="dark">
        <Container>
          <Navbar.Brand src="" to="/Home">
            Image
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/Home">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Menu">
              Menu
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Reserva">
              Reservas
            </Nav.Link>
            <Nav.Link as={NavLink} to="/About">
              Sobre Nosotros
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
