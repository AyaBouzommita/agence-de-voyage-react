import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDestinations } from "../context/DestinationsContext";

export default function Home() {
  const { stats } = useDestinations();

  return (
    <section className="hero">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={7}>
            <p className="eyebrow">Travel Destinations App 🌍</p>
            <h1>Trouvez votre prochaine destination en quelques clics.</h1>
            <p className="lead">
              Application réalisée pour les TP4 (Hooks) et TP5 (React Router
              DOM) : cartes, recherche, filtres, modal d’ajout et navigation
              vers les détails.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Button as={Link} to="/destinations" size="lg" variant="success">
                Voir les destinations
              </Button>
              <Button as={Link} to="/about" size="lg" variant="outline-success">
                Découvrir le projet
              </Button>
            </div>
            <div className="stats-row">
              <div>
                <strong>{stats.count}</strong>
                <span>destinations</span>
              </div>
              <div>
                <strong>{stats.avgRating}/5</strong>
                <span>note moyenne</span>
              </div>
              <div>
                <strong>dès {stats.minPrice} €</strong>
                <span>meilleur prix</span>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="hero-panel">
              <h3>Ce que vous pouvez faire</h3>
              <ul>
                <li>Parcourir des cartes interactives</li>
                <li>Filtrer par titre et par rating</li>
                <li>Ajouter un voyage via une modal Bootstrap</li>
                <li>Consulter le détail d’une destination</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
