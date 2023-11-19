import { Container, Row, Col } from 'react-bootstrap';

export const Introduction = () => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={8}>
          <div className="text-center p-4 rounded">
            <h1 className="mb-4">Welcome to My Application! 👨‍💻</h1>
            <p>
              In this project, I put my development skills into practice, learning to use React Router Dom 6 and Axios based on the official documentation and video resources.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
