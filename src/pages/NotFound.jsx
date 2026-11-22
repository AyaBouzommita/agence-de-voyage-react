import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Container className="page-section text-center">
      <h1>404</h1>
      <p className="lead">Cette page n’existe pas.</p>
      <Button variant="success" onClick={() => navigate("/")}>
        Return Home
      </Button>
    </Container>
  );
}
