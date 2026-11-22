import { Container, Nav, Navbar as BsNavbar, Badge } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useDestinations } from "../context/DestinationsContext";

export default function AppNavbar() {
  const { stats, theme, toggleTheme, favorites } = useDestinations();

  return (
    <BsNavbar expand="lg" className="app-navbar" sticky="top">
      <Container>
        <BsNavbar.Brand as={NavLink} to="/" className="brand">
          Travel Destinations 🌍
        </BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="main-nav" />
        <BsNavbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-lg-center gap-lg-2">
            <Nav.Link as={NavLink} to="/" end>
              Accueil
            </Nav.Link>
            <Nav.Link as={NavLink} to="/destinations">
              Destinations
              <Badge bg="success" pill className="ms-2">
                {stats.count}
              </Badge>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              À propos
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
            {favorites.length > 0 && (
              <Badge bg="danger" pill title="Favoris">
                ♥ {favorites.length}
              </Badge>
            )}
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Changer le thème"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}
