import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Inicio
        </Link>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Link to="/listado" className="nav-link">
                Listado
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/contacto" className="nav-link">
                Contacto
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavBar;
