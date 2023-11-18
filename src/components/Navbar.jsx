import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const Navbarme = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavLink to="/Home" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/Listado" className="nav-link">
            Listado
          </NavLink>
          <NavLink to="/AboutMe" className="nav-link">
            About Me
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
