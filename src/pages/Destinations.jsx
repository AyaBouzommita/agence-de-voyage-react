import { useMemo, useState } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Row,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import DestinationCard from "../components/DestinationCard";
import AddDestinationModal from "../components/AddDestinationModal";
import { useDestinations } from "../context/DestinationsContext";

export default function Destinations() {
  const { destinations, favorites } = useDestinations();
  const [query, setQuery] = useState("");
  const [minRating, setMinRating] = useState("all");
  const [sortBy, setSortBy] = useState("rating");
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [toast, setToast] = useState("");

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return destinations
      .filter((item) => {
        const matchTitle =
          item.title.toLowerCase().includes(term) ||
          item.country.toLowerCase().includes(term);
        const matchRating =
          minRating === "all" || Number(item.rating) >= Number(minRating);
        const matchFav = !favoritesOnly || favorites.includes(item.id);
        return matchTitle && matchRating && matchFav;
      })
      .sort((a, b) => {
        if (sortBy === "price-asc") return a.price - b.price;
        if (sortBy === "price-desc") return b.price - a.price;
        if (sortBy === "title") return a.title.localeCompare(b.title);
        return b.rating - a.rating;
      });
  }, [destinations, query, minRating, sortBy, favoritesOnly, favorites]);

  return (
    <Container className="page-section">
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
        <div>
          <h1 className="mb-1">Destinations</h1>
          <p className="text-muted mb-0">
            {filtered.length} résultat{filtered.length > 1 ? "s" : ""} — recherche
            et filtre combinés
          </p>
        </div>
        <Button variant="success" onClick={() => setShowModal(true)}>
          + Ajouter une destination
        </Button>
      </div>

      <div className="filters">
        <Row className="g-3 align-items-end">
          <Col md={4}>
            <Form.Label>Recherche par titre (ou pays)</Form.Label>
            <Form.Control
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ex. Bali, Paris, Japon..."
            />
          </Col>
          <Col md={3}>
            <Form.Label>Filtre par rating</Form.Label>
            <Form.Select
              value={minRating}
              onChange={(e) => setMinRating(e.target.value)}
            >
              <option value="all">Tous les ratings</option>
              <option value="5">5 étoiles</option>
              <option value="4">4 étoiles et plus</option>
              <option value="3">3 étoiles et plus</option>
            </Form.Select>
          </Col>
          <Col md={3}>
            <Form.Label>Trier</Form.Label>
            <Form.Select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="rating">Meilleure note</option>
              <option value="price-asc">Prix croissant</option>
              <option value="price-desc">Prix décroissant</option>
              <option value="title">Titre A-Z</option>
            </Form.Select>
          </Col>
          <Col md={2}>
            <Form.Check
              type="switch"
              id="fav-only"
              label="Favoris"
              checked={favoritesOnly}
              onChange={(e) => setFavoritesOnly(e.target.checked)}
            />
            <Button
              variant="link"
              className="p-0 mt-1"
              onClick={() => {
                setQuery("");
                setMinRating("all");
                setSortBy("rating");
                setFavoritesOnly(false);
              }}
            >
              Réinitialiser
            </Button>
          </Col>
        </Row>
        {(query || minRating !== "all" || favoritesOnly) && (
          <p className="filter-hint mb-0 mt-3">
            Filtres actifs ensemble :
            {query.trim() && <span className="chip">titre « {query.trim()} »</span>}
            {minRating !== "all" && (
              <span className="chip">{minRating}+ étoiles</span>
            )}
            {favoritesOnly && <span className="chip">favoris</span>}
          </p>
        )}
      </div>

      {filtered.length === 0 ? (
        <Alert variant="light" className="empty-state">
          Aucune destination ne correspond à vos critères.
        </Alert>
      ) : (
        <Row className="g-4">
          {filtered.map((destination) => (
            <Col key={destination.id} sm={6} lg={4} xl={3}>
              <DestinationCard destination={destination} />
            </Col>
          ))}
        </Row>
      )}

      <AddDestinationModal
        show={showModal}
        onHide={() => setShowModal(false)}
        onCreated={(item) => setToast(`${item.title} a été ajoutée.`)}
      />

      <ToastContainer position="bottom-end" className="p-3">
        <Toast
          bg="success"
          onClose={() => setToast("")}
          show={!!toast}
          delay={2500}
          autohide
        >
          <Toast.Body className="text-white">{toast}</Toast.Body>
        </Toast>
      </ToastContainer>
    </Container>
  );
}
