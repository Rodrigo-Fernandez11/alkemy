import { Container, Row, Col, ListGroup } from 'react-bootstrap';

export const KeyFeatures = () => {
  const features = [
    'Create a routing system with React Router DOM 6',
    'Login with data validation',
    'Inform the user if validation was successful with an alert using SweetAlert2',
    'Use protected routes from React Router for login',
    'Create a NotFound route to display when the user searches for a non-existent route',
    'API consumption using Axios to display detailed information of Rick and Morty characters in card format',
    'Create a contact page with details for communication',
  ];

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={8}>
          <div className="text-center">
            <h2 className="mb-4">Tasks I Completed</h2>
            <ListGroup as="ol" numbered>
              {features.map((feature, index) => (
                <ListGroup.Item key={index} as="li">
                  {feature}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
