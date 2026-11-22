# Travel Destinations App 🌍

Application React unique pour **TP4 (Hooks)** et **TP5 (React Router DOM)** — ISIMG, FIGL3, 2026-2027.

## Lancer le projet

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:5173](http://localhost:5173).

## Correspondance avec les TPs

### TP4 — React Hooks
- Cartes destinations : image, titre, description, prix, rating (étoiles)
- Recherche par titre (`useState`)
- Filtre par rating, **combinable** avec la recherche
- Ajout d’une destination dans une **React-Bootstrap Modal**

### TP5 — React Router DOM 6.3.0
| URL | Composant |
| --- | --- |
| `/` | Home |
| `/destinations` | Destinations |
| `/about` | About |
| `/contact` | Contact |
| `/destinations/:id` | Details (`useParams`) |

- Navbar avec `Link` / `NavLink`
- Bouton **View Details** sur chaque carte
- Fiche détail : image, titre, description, prix, rating, pays, durée de vol, compagnie, saison
- **Return Home** via `useNavigate`
- `id` des nouvelles destinations : `Math.random()`

## Extras (bonus note)
- Context API (`useContext`, `useMemo`, `useCallback`, `useEffect`)
- Favoris + thème clair/sombre (localStorage)
- Tri (note, prix, titre) et filtre favoris
- Validation des formulaires (ajout + contact)
- Page 404
- Fil d’Ariane sur la page détail

## Structure

```
src/
  components/   Navbar, cartes, modal, étoiles
  context/      DestinationsContext
  data/         destinations.js
  pages/        Home, Destinations, Details, About, Contact, NotFound
  App.jsx       BrowserRouter + Routes
```
