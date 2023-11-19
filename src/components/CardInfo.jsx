import { Card, Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';


export const CardInfo = ({ title, message }) => {
  return (
    <Card className="m-4">
      <Card.Header as="h5" className="bg-black text-white">{title}</Card.Header>
      <Card.Body>
        <Alert >
          {message}
        </Alert>
      </Card.Body>
    </Card>
  );
};

CardInfo.propTypes = {
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  };