import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const submitHandler = (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      Swal.fire('Los campos no deben estar vacíos');
      return;
    }

    if (!regexEmail.test(email)) {
      Swal.fire('Debes escribir una dirección de correo electrónico válida');
      return;
    }

    if (email !== 'challenge@alkemy.org' || password !== 'react') {
      Swal.fire('Credenciales inválidas');
      return;
    }

    axios
      .post('http://challenge-react.alkemy.org', { email, password })
      .then((res) => {
        Swal.fire('¡Perfecto, ingresaste correctamente!');
        console.log(res.data);
        const tokenRecibido = res.data.token;
        localStorage.setItem('token', tokenRecibido);
        navigate('/listado'); // Redirige a la ruta '/listado'
      })
      .catch((error) => {
        Swal.fire('Hubo un error en la solicitud');
        console.error(error);
      });
  };

  return (
    <Container className="login-container">
    <Row className="justify-content-center align-items-center vh-100">
      <Col xs={12} md={6}>
        <h2 className="text-center mb-4">Formulario de login</h2>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="formEmail">
            <Form.Label>Correo electrónico:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Ingresa tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Contraseña:</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button type="submit" variant="primary" className="w-100 mt-3">
            Ingresar
          </Button>
        </Form>
      </Col>
    </Row>
  </Container>
  );
}
