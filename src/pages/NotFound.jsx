import { Container, Row, Col, Alert } from 'react-bootstrap';

export const NotFound = () => {
  return (
    <Container className="m-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6} className="text-center">
          <Alert variant="danger">
            <Alert.Heading>404 - Página no encontrada</Alert.Heading>
            <p>Lo sentimos, la página que estás buscando no pudo ser encontrada.</p>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};
