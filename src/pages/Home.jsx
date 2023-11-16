import { Container, Card, Button } from 'react-bootstrap';
import { Navbarme } from '../components/Navbar';

export const Home = () => {
  return (
    <div>
      <Navbarme />
      {/* Content */}
      <Container className="mt-4">
        {/* Heading and Description */}
        <h2>Welcome to My App</h2>
        <p>This is a sample home page.</p>

        {/* Cards */}
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
          {/* Generating three cards */}
          {[1, 2, 3].map((index) => (
            <div className="col" key={index}>
              {/* Card Component */}
              <Card>
                {/* Card Image */}
                <Card.Img variant="top" src={`https://via.placeholder.com/300x200?text=Card+${index}`} />
                <Card.Body>
                  {/* Card Title */}
                  <Card.Title>Card {index}</Card.Title>
                  {/* Card Text */}
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the cards content.
                  </Card.Text>
                  {/* Card Button */}
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Container>

      {/* Footer */}
      <footer className="bg-light text-center p-3 mt-4">
        {/* Footer Text */}
        <p>&copy; 2023 My App. All rights reserved.</p>
      </footer>
    </div>
  );
};
