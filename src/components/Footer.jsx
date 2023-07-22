import { Navbar, Nav } from 'react-bootstrap'; // Importa los componentes de React Bootstrap

function Footer() {
  return (
    <footer className="bg-light text-center">
      <Navbar expand="lg" bg="light" className="justify-content-center"> {/* Utiliza el componente Navbar de React Bootstrap */}
        <Navbar.Collapse>
          <Nav>
            <Nav.Item>
              <Nav.Link href="http://instagram.com" target="_blank" rel="noopener noreferrer"> {/* Utiliza el componente Nav.Link de React Bootstrap */}
                INSTAGRAM
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <p className="text-muted">© Alkemy Challenge</p>
    </footer>
  );
}

export default Footer;
