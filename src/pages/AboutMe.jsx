import { Row, Col, Card, Button, Image } from "react-bootstrap";
import { Navbarme } from "../components/Navbar";
import meImage from "../assets/meImage.jpg";

export const AboutMe = () => {
  return (
    <div>
      <Navbarme />
      <div className="mt-4 d-flex justify-content-center align-items-center">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Card className="bg-light">
              <Card.Body>
                <Card.Title className="text-center mb-4">Contact me</Card.Title>
                <Col className="text-center mb-4">
                  <Image
                    src={meImage}
                    roundedCircle
                    style={{ width: "250px" }}
                  />
                  <h4>Software engineer</h4>
                </Col>

                <Card.Text className="text-center">
                  Hello, my name is Rodrigo Peña Fernández. I hope you liked my
                  project. If you have any questions or recommendations, they
                  will be very welcome. Also, if you´d like to see more of my
                  projects, I invite you to explore my Github or other social
                  networks where I share a bit about myself and my experience as
                  a software engineer. If you´d like to discuss a job proposal,
                  feel free to contact me via LinkedIn or Gmail:
                  <br />
                  rodrip602@gmail.com
                </Card.Text>
                <Card.Text className="text-center mb-4">
                  Connect with me:
                </Card.Text>
                <div className="d-grid gap-2">
                  <Button
                    variant="outline-primary"
                    href="https://www.linkedin.com/in/rodrigo-frontend-developer/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </Button>
                  <Button
                    variant="outline-info"
                    href="https://twitter.com/RodrigoPeaFern1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </Button>
                  <Button
                    variant="outline-dark"
                    href="https://github.com/Rodrigo-Fernandez11"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};