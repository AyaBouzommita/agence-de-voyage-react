import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDestinations } from "../context/DestinationsContext";

const emptyForm = {
  title: "",
  country: "",
  description: "",
  price: "",
  rating: "5",
  image: "",
  flightDuration: "",
  airline: "",
  bestSeason: "",
};

export default function AddDestinationModal({ show, onHide, onCreated }) {
  const { addDestination } = useDestinations();
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const next = {};
    if (!form.title.trim()) next.title = "Le titre est obligatoire.";
    if (!form.country.trim()) next.country = "Le pays est obligatoire.";
    if (!form.description.trim() || form.description.trim().length < 20) {
      next.description = "Description d’au moins 20 caractères.";
    }
    if (!form.price || Number(form.price) <= 0) {
      next.price = "Prix positif requis.";
    }
    if (!form.image.trim() || !/^https?:\/\//i.test(form.image)) {
      next.image = "URL d’image valide (http/https).";
    }
    if (!form.flightDuration.trim()) {
      next.flightDuration = "Durée de vol requise.";
    }
    if (!form.airline.trim()) next.airline = "Compagnie requise.";
    if (!form.bestSeason.trim()) next.bestSeason = "Saison requise.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) return;
    const created = addDestination(form);
    setForm(emptyForm);
    setErrors({});
    onCreated?.(created);
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Form onSubmit={handleSubmit} noValidate>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter une destination</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row g-3">
            <div className="col-md-6">
              <Form.Group>
                <Form.Label>Titre</Form.Label>
                <Form.Control
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  isInvalid={!!errors.title}
                  placeholder="Ex. Lisbonne"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.title}
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group>
                <Form.Label>Pays</Form.Label>
                <Form.Control
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  isInvalid={!!errors.country}
                  placeholder="Ex. Portugal"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.country}
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            <div className="col-12">
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  isInvalid={!!errors.description}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.description}
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group>
                <Form.Label>Prix (€)</Form.Label>
                <Form.Control
                  type="number"
                  min="1"
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  isInvalid={!!errors.price}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.price}
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group>
                <Form.Label>Rating</Form.Label>
                <Form.Select
                  name="rating"
                  value={form.rating}
                  onChange={handleChange}
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n === 1 ? "1 étoile" : `${n} étoiles`}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group>
                <Form.Label>Durée du vol</Form.Label>
                <Form.Control
                  name="flightDuration"
                  value={form.flightDuration}
                  onChange={handleChange}
                  isInvalid={!!errors.flightDuration}
                  placeholder="Ex. 2h 30min"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.flightDuration}
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group>
                <Form.Label>Compagnie aérienne</Form.Label>
                <Form.Control
                  name="airline"
                  value={form.airline}
                  onChange={handleChange}
                  isInvalid={!!errors.airline}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.airline}
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group>
                <Form.Label>Meilleure saison</Form.Label>
                <Form.Control
                  name="bestSeason"
                  value={form.bestSeason}
                  onChange={handleChange}
                  isInvalid={!!errors.bestSeason}
                  placeholder="Ex. Avril — Juin"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.bestSeason}
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            <div className="col-12">
              <Form.Group>
                <Form.Label>URL de l’image</Form.Label>
                <Form.Control
                  name="image"
                  value={form.image}
                  onChange={handleChange}
                  isInvalid={!!errors.image}
                  placeholder="https://..."
                />
                <Form.Control.Feedback type="invalid">
                  {errors.image}
                </Form.Control.Feedback>
              </Form.Group>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={onHide}>
            Annuler
          </Button>
          <Button type="submit" variant="success">
            Enregistrer
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
