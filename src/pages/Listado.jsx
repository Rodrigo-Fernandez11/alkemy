import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Row, Col } from "react-bootstrap";
import { Navbarme } from "../components/Navbar";

export function Listado() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );
        setCharacters(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbarme />
      <h1 className="text-center mt-4 mb-4">Rick and Morty Characters</h1>
      <Row xs={1} md={2} lg={4} className="g-4 m-4">
        {characters.map((character) => (
          <Col key={character.id}>
            <Card>
              <Card.Img
                variant="top"
                src={character.image}
                alt={character.name}
              />
              <Card.Body>
                <Card.Title>{character.name}</Card.Title>
                <Card.Text>Status: {character.status}</Card.Text>
                <Card.Text>Species: {character.species}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
