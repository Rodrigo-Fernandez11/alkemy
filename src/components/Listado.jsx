import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Card, Button } from 'react-bootstrap';

// Función para verificar si el usuario está autenticado
const isUserAuthenticated = () => {
  const token = localStorage.getItem('token');
  // Devuelve true si el token existe y es válido
  return token !== null && token !== 'null'; // Aquí puedes ajustar la condición según tu implementación de autenticación
};

function Listado() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserAuthenticated()) {
      navigate('/');
    }
  }, [navigate]);

  // Ejemplo de datos de películas (puedes reemplazar esto con la data de la API)
  const movies = [
    {
      id: 1,
      title: 'Movie 1',
      description: 'Description of Movie 1',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Movie 2',
      description: 'Description of Movie 2',
      image: 'https://via.placeholder.com/150',
    },
    // Agregar más películas aquí...
  ];

  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {movies.map((movie) => (
        <Col key={movie.id}>
          <Card>
            <Card.Img variant="top" src={movie.image} />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>{movie.description}</Card.Text>
              <Button variant="primary" onClick={() => navigate('/')}>
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Listado;
