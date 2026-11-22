import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  createDestinationId,
  initialDestinations,
} from "../data/destinations";

const DestinationsContext = createContext(null);
const FAVORITES_KEY = "travel-favorites";
const THEME_KEY = "travel-theme";

export function DestinationsProvider({ children }) {
  const [destinations, setDestinations] = useState(initialDestinations);
  const [favorites, setFavorites] = useState(() => {
    try {
      const stored = localStorage.getItem(FAVORITES_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem(THEME_KEY) || "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem(THEME_KEY, theme);
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);

  const addDestination = useCallback((payload) => {
    const destination = {
      ...payload,
      id: createDestinationId(),
      price: Number(payload.price),
      rating: Number(payload.rating),
    };
    setDestinations((prev) => [destination, ...prev]);
    return destination;
  }, []);

  const toggleFavorite = useCallback((id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  const stats = useMemo(() => {
    if (!destinations.length) {
      return { count: 0, avgRating: 0, minPrice: 0 };
    }
    const avgRating =
      destinations.reduce((sum, item) => sum + Number(item.rating), 0) /
      destinations.length;
    const minPrice = Math.min(...destinations.map((item) => Number(item.price)));
    return {
      count: destinations.length,
      avgRating: avgRating.toFixed(1),
      minPrice,
    };
  }, [destinations]);

  const value = useMemo(
    () => ({
      destinations,
      favorites,
      theme,
      stats,
      addDestination,
      toggleFavorite,
      toggleTheme,
    }),
    [
      destinations,
      favorites,
      theme,
      stats,
      addDestination,
      toggleFavorite,
      toggleTheme,
    ]
  );

  return (
    <DestinationsContext.Provider value={value}>
      {children}
    </DestinationsContext.Provider>
  );
}

export function useDestinations() {
  const context = useContext(DestinationsContext);
  if (!context) {
    throw new Error("useDestinations must be used inside DestinationsProvider");
  }
  return context;
}
