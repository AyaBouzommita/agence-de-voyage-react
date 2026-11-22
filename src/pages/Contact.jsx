import { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Tous les champs sont obligatoires.");
      setSent(false);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Adresse e-mail invalide.");
      setSent(false);
      return;
    }
    setError("");
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Container className="page-section">
      <Row className="g-4">
        <Col md={5}>
          <h1>Contact</h1>
          <p className="lead">Une question sur un voyage ? Écrivez-nous.</p>
          <div className="info-card">
            <p>
              <strong>Agence</strong>
              <br />
              Travel Destinations — ISIMG
            </p>
            <p>
              <strong>Email</strong>
              <br />
              contact@travel-destinations.app
            </p>
            <p className="mb-0">
              <strong>Téléphone</strong>
              <br />
              +216 00 000 000
            </p>
          </div>
        </Col>
        <Col md={7}>
          {sent && (
            <Alert variant="success">
              Message envoyé (démonstration, aucune API).
            </Alert>
          )}
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit} className="info-card" noValidate>
            <Form.Group className="mb-3">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Votre nom"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="vous@email.com"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                value={form.message}
                onChange={handleChange}
              />
            </Form.Group>
            <Button type="submit" variant="success">
              Envoyer
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
