import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import StarRating from "../components/StarRating";
import { useDestinations } from "../context/DestinationsContext";

export default function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { destinations, favorites, toggleFavorite } = useDestinations();
  const destination = destinations.find(
    (item) => String(item.id) === String(id)
  );

  if (!destination) {
    return (
      <Container className="page-section">
        <Alert variant="warning">
          Destination introuvable. Vérifiez l’identifiant dans l’URL.
        </Alert>
        <Button variant="success" onClick={() => navigate("/")}>
          Return Home
        </Button>
      </Container>
    );
  }

  const isFavorite = favorites.includes(destination.id);

  return (
    <Container className="page-section">
      <nav className="details-breadcrumb mb-3" aria-label="Fil d’Ariane">
        <Link to="/">Accueil</Link>
        <span>/</span>
        <Link to="/destinations">Destinations</Link>
        <span>/</span>
        <strong>{destination.title}</strong>
      </nav>
      <Row className="g-4">
        <Col lg={6}>
          <img
            className="details-image"
            src={destination.image}
            alt={destination.title}
          />
        </Col>
        <Col lg={6}>
          <p className="eyebrow">{destination.country}</p>
          <h1>{destination.title}</h1>
          <div className="d-flex align-items-center gap-3 mb-3">
            <StarRating value={destination.rating} size="1.4rem" />
            <strong className="price-text">{destination.price} €</strong>
          </div>
          <p className="lead">{destination.description}</p>
          <ul className="details-list">
            <li>
              <span>Pays</span>
              <strong>{destination.country}</strong>
            </li>
            <li>
              <span>Durée du vol</span>
              <strong>{destination.flightDuration}</strong>
            </li>
            <li>
              <span>Compagnie aérienne</span>
              <strong>{destination.airline}</strong>
            </li>
            <li>
              <span>Meilleure saison</span>
              <strong>{destination.bestSeason}</strong>
            </li>
            <li>
              <span>Rating</span>
              <strong>{destination.rating} / 5</strong>
            </li>
          </ul>
          <div className="d-flex flex-wrap gap-2">
            <Button variant="success" onClick={() => navigate("/")}>
              Return Home
            </Button>
            <Button as={Link} to="/destinations" variant="outline-success">
              Retour aux destinations
            </Button>
            <Button
              variant={isFavorite ? "danger" : "outline-danger"}
              onClick={() => toggleFavorite(destination.id)}
            >
              {isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
