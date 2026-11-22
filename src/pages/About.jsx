import { Col, Container, Row } from "react-bootstrap";

export default function About() {
  return (
    <Container className="page-section">
      <h1>À propos</h1>
      <p className="lead">
        Travel Destinations App présente des voyages sous forme de cartes, avec
        recherche, filtrage et navigation vers une fiche détaillée.
      </p>
      <Row className="g-4 mt-2">
        <Col md={6}>
          <article className="info-card">
            <h3>TP4 — React Hooks</h3>
            <ul>
              <li>useState pour le formulaire, la recherche et les filtres</li>
              <li>Gestion des événements utilisateur</li>
              <li>Modal React-Bootstrap pour l’ajout</li>
              <li>Filtrage combiné titre + rating</li>
            </ul>
          </article>
        </Col>
        <Col md={6}>
          <article className="info-card">
            <h3>TP5 — React Router DOM</h3>
            <ul>
              <li>Routes : Home, Destinations, About, Contact, Details</li>
              <li>Link / NavLink pour la navigation</li>
              <li>useParams pour l’identifiant</li>
              <li>useNavigate pour Return Home</li>
            </ul>
          </article>
        </Col>
        <Col md={12}>
          <article className="info-card">
            <h3>Extras (bonus)</h3>
            <ul className="mb-0">
              <li>Context API + hooks useMemo / useCallback / useEffect</li>
              <li>Favoris et thème clair/sombre (localStorage)</li>
              <li>Tri, page 404, validation des formulaires</li>
              <li>Identifiants générés avec Math.random() à l’ajout</li>
            </ul>
          </article>
        </Col>
      </Row>
    </Container>
  );
}
