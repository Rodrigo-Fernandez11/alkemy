import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { CardInfo } from "../components/CardInfo";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook para navegar

  const handleLogin = () => {
    if (username === "user" && password === "1234") {
      navigate("/home"); // Redirección a '/home'
    } else {
      Swal.fire({
        title: "Error",
        text: "Invalid username or password.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md={6}>
          <h2 className="text-center mb-4">Login Page</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="primary" onClick={handleLogin}>
                Login
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
      <CardInfo
        message="This login does not perform validation with the backend, we simply simulate a login to practice react router dom 6 protected routes"
        title="🚨 Important"
      />
      <CardInfo
        message="Access information password='1234' username='user'"
        title="🔑 Info"
      />
    </Container>
  );
};
