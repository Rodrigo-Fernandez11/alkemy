import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const Navbarme = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">My App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavLink to="/Home" className="nav-link" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/Listado" className="nav-link" activeClassName="active">
            Listado
          </NavLink>
          <NavLink to="/AboutMe" className="nav-link" activeClassName="active">
            About Me
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
