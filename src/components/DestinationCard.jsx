import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import { useDestinations } from "../context/DestinationsContext";

export default function DestinationCard({ destination }) {
  const { favorites, toggleFavorite } = useDestinations();
  const isFavorite = favorites.includes(destination.id);

  return (
    <Card className="destination-card h-100">
      <div className="card-img-wrap">
        <Card.Img
          variant="top"
          src={destination.image}
          alt={destination.title}
        />
        <button
          type="button"
          className={`fav-btn ${isFavorite ? "active" : ""}`}
          onClick={() => toggleFavorite(destination.id)}
          aria-label="Ajouter aux favoris"
        >
          {isFavorite ? "♥" : "♡"}
        </button>
        <span className="price-chip">{destination.price} €</span>
      </div>
      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <div>
            <Card.Title className="mb-1">{destination.title}</Card.Title>
            <small className="text-muted">{destination.country}</small>
          </div>
          <StarRating value={destination.rating} />
        </div>
        <Card.Text className="flex-grow-1">{destination.description}</Card.Text>
        <Button
          as={Link}
          to={`/destinations/${destination.id}`}
          variant="success"
          className="mt-auto"
        >
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
}
