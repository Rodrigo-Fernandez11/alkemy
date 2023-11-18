import { Container, Row, Col } from 'react-bootstrap';
import { DiBootstrap, DiReact } from 'react-icons/di';
import { SiReactrouter, SiVite, SiAxios } from 'react-icons/si';

export const TechnologiesUsed = () => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={8}>
          <div className="text-center">
            <h2 className="mb-4">Tecnologías utilizadas</h2>
            <ul className="list-unstyled d-flex justify-content-center flex-wrap">
              <li className="d-flex align-items-center mb-3 me-4">
                <DiReact style={{ fontSize: '3rem', color: '#61DAFB' }} />
                <span className="ms-2">React</span>
              </li>
              <li className="d-flex align-items-center mb-3 me-4">
                <SiReactrouter style={{ fontSize: '3rem', color: '#61DAFB' }} />
                <span className="ms-2">React Router DOM 6</span>
              </li>
              <li className="d-flex align-items-center mb-3 me-4">
                <SiAxios style={{ fontSize: '3rem', color: '#58BAC7' }} />
                <span className="ms-2">Axios</span>
              </li>
              <li className="d-flex align-items-center mb-3 me-4">
                <DiBootstrap style={{ fontSize: '3rem', color: '#7952B3' }} />
                <span className="ms-2">React Bootstrap</span>
              </li>
              <li className="d-flex align-items-center mb-3 me-4">
                <SiVite style={{ fontSize: '3rem', color: '#646464' }} />
                <span className="ms-2">Vite</span>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
