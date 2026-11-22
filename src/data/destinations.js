export const initialDestinations = [
  {
    id: 1,
    title: "Santorin",
    country: "Grèce",
    description:
      "Villages blancs, coucher de soleil sur la caldeira et plages de sable volcanique. Un classique de la Méditerranée.",
    price: 890,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80",
    flightDuration: "3h 20min",
    airline: "Aegean Airlines",
    bestSeason: "Mai — Octobre",
  },
  {
    id: 2,
    title: "Kyoto",
    country: "Japon",
    description:
      "Temples, jardins zen et cerisiers en fleurs. Kyoto offre le Japon traditionnel dans un cadre apaisant.",
    price: 1450,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
    flightDuration: "12h 45min",
    airline: "Japan Airlines",
    bestSeason: "Mars — Mai / Novembre",
  },
  {
    id: 3,
    title: "Marrakech",
    country: "Maroc",
    description:
      "Souks colorés, palais et palmeraie. Une immersion sensorielle au cœur du Maghreb.",
    price: 420,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&w=1200&q=80",
    flightDuration: "2h 40min",
    airline: "Royal Air Maroc",
    bestSeason: "Mars — Mai / Septembre — Novembre",
  },
  {
    id: 4,
    title: "Reykjavik",
    country: "Islande",
    description:
      "Aurores boréales, sources chaudes et paysages lunaires. L’aventure nordique par excellence.",
    price: 980,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1504829857797-ddff29c27927?auto=format&fit=crop&w=1200&q=80",
    flightDuration: "4h 15min",
    airline: "Icelandair",
    bestSeason: "Juin — Août / Septembre — Mars (aurores)",
  },
  {
    id: 5,
    title: "Bali",
    country: "Indonésie",
    description:
      "Rizières en terrasses, temples hindous et plages de l’océan Indien. Idéal pour se ressourcer.",
    price: 1100,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    flightDuration: "16h 10min",
    airline: "Garuda Indonesia",
    bestSeason: "Avril — Octobre",
  },
  {
    id: 6,
    title: "New York",
    country: "États-Unis",
    description:
      "Skyline, musées et énergie permanente. La ville qui ne dort jamais, à vivre au moins une fois.",
    price: 1250,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1200&q=80",
    flightDuration: "8h 30min",
    airline: "Delta Air Lines",
    bestSeason: "Avril — Juin / Septembre — Novembre",
  },
  {
    id: 7,
    title: "Cappadoce",
    country: "Turquie",
    description:
      "Cheminées de fée, grottes et vols en montgolfière au lever du soleil.",
    price: 640,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?auto=format&fit=crop&w=1200&q=80",
    flightDuration: "2h 55min",
    airline: "Turkish Airlines",
    bestSeason: "Avril — Juin / Septembre — Octobre",
  },
  {
    id: 8,
    title: "Paris",
    country: "France",
    description:
      "Musées, cafés et monuments emblématiques. Un week-end culturel au rythme de la Seine.",
    price: 310,
    rating: 3,
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    flightDuration: "2h 10min",
    airline: "Air France",
    bestSeason: "Avril — Juin / Septembre — Octobre",
  },
];

export function createDestinationId() {
  return Math.floor(Math.random() * 1_000_000);
}
