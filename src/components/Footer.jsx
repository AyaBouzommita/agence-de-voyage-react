import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="app-footer">
      <Container className="d-flex flex-column flex-md-row justify-content-between gap-2">
        <span>Travel Destinations App — TP4 Hooks & TP5 React Router</span>
        <span>ISIMG · FIGL3 · 2026-2027</span>
      </Container>
    </footer>
  );
}
