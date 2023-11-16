import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Navbarme } from "../components/Navbar";

export const AboutMe = () => {
  return (
    <div>
      <Navbarme />
      <Container className="mt-4">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Card className="bg-light">
              <Card.Body>
                <Card.Title className="text-center mb-4">About Me</Card.Title>
                <Card.Text className="text-center">
                  Hi there! Im John Doe, a passionate developer based in XYZ. I
                  love coding and exploring new technologies.
                </Card.Text>
                <Card.Text className="text-center mb-4">
                  Connect with me:
                </Card.Text>
                <div className="d-grid gap-2">
                  <Button
                    variant="outline-primary"
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </Button>
                  <Button
                    variant="outline-info"
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </Button>
                  <Button
                    variant="outline-dark"
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </Button>
                  <Button
                    variant="outline-danger"
                    href="mailto:youremail@example.com"
                  >
                    Email
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
