const sampleBoatListings = [
  {
    title: "Motor Yacht",
    description:
      "A luxury motor yacht designed for long-distance cruising with premium cabins, sun decks, and advanced navigation systems.",
    image: {
      filename: "BoatImage",
      url: "https://www.galatiyachts.com/wp-content/uploads/Blog-profile-image-9-5-825x464.jpg",
    },
    price: 5000,
    location: "Lake Geneva",
    country: "Switzerland",
  },
  {
    title: "Center Console Boat",
    description:
      "A versatile powerboat with a central helm allowing 360-degree movement, ideal for fishing and coastal cruising.",
    image: {
      filename: "BoatImage",
      url: "https://ultimatemarine.com/wp-content/uploads/2023/07/Center-Consoles-for-Lake-Boating-2.png.webp",
    },
    price: 4000,
    location: "Wenningstedt-Braderup",
    country: "Germany",
  },
  {
    title: "Sport Boat",
    description:
      "A fast and agile recreational boat built for water sports and high-speed cruising.",
    image: {
      filename: "BoatImage",
      url: "https://yatcowpmedialibrary.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2023/06/speed-boat-vs-yacht-guide.jpg",
    },
    price: 12000,
    location: "Dormelletto",
    country: "Italy",
  },
  {
    title: "Deck Boat",
    description:
      "A family-friendly boat combining comfort and performance with wide seating and open decks.",
    image: {
      filename: "BoatImage",
      url: "https://tvboatrentals.com/wp-content/uploads/sites/1650/2018/08/20%E2%80%99-Hurricane-Deckboat-image-1.jpg",
    },
    price: 3000,
    location: "Safenwil",
    country: "Switzerland",
  },
  {
    title: "Pontoon Boat",
    description:
      "A stable flat-deck boat ideal for relaxing cruises, parties, and calm inland waters.",
    image: {
      filename: "BoatImage",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQukvMSn0xuLRA3HKD-4hmedwIRazfxUd8cQ&s",
    },
    price: 2500,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Sailboat",
    description:
      "A wind-powered vessel offering a peaceful and eco-friendly boating experience.",
    image: {
      filename: "BoatImage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    price: 3500,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Catamaran",
    description:
      "A twin-hull boat known for exceptional stability and spacious decks, perfect for group charters.",
    image: {
      filename: "BoatImage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    price: 7000,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Fishing Boat",
    description:
      "Designed for recreational and professional fishing with rod holders and sonar equipment.",
    image: {
      filename: "BoatImage",
      url: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e",
    },
    price: 2000,
    location: "Alaska",
    country: "United States",
  },
  {
    title: "Speed Boat",
    description:
      "A compact high-speed boat perfect for quick rides, watersports, and adrenaline-filled fun.",
    image: {
      filename: "BoatImage",
      url: "https://images.unsplash.com/photo-1508610048659-a06b669e3321",
    },
    price: 2800,
    location: "Goa",
    country: "India",
  },
  {
    title: "Luxury Yacht",
    description:
      "An ultra-premium yacht featuring elegant interiors, crew facilities, and world-class comfort.",
    image: {
      filename: "BoatImage",
      url: "https://www.galatiyachts.com/wp-content/uploads/Main-Blog-Photo-1630x928-2025-06-16T135104.534-825x470.jpg",
    },
    price: 15000,
    location: "Monaco",
    country: "France",
  },
  {
    title: "Houseboat",
    description:
      "A floating home equipped with living spaces, kitchens, and bedrooms for slow travel on water.",
    image: {
      filename: "BoatImage",
      url: "https://images.unsplash.com/photo-1566378246598-5b11a0fdd6a9",
    },
    price: 3200,
    location: "Alappuzha",
    country: "India",
  },
  {
    title: "Inflatable Boat",
    description:
      "A lightweight and portable boat ideal for short trips and easy transportation.",
    image: {
      filename: "BoatImage",
      url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    },
    price: 1200,
    location: "Nice",
    country: "France",
  },
  {
    title: "Jet Boat",
    description:
      "A powerful jet-propelled boat offering excellent maneuverability and shallow-water operation.",
    image: {
      filename: "BoatImage",
      url: "https://images.unsplash.com/photo-1749867053743-78e1fad3ed87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amV0JTIwYm9hdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 4500,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Trawler Boat",
    description:
      "A long-range cruising boat built for comfort and fuel efficiency during extended voyages.",
    image: {
      filename: "BoatImage",
      url: "https://images.unsplash.com/photo-1599058917212-d750089bc3c8",
    },
    price: 6000,
    location: "Seattle",
    country: "United States",
  },
  {
    title: "Rigid Inflatable Boat (RIB)",
    description:
      "A performance-oriented boat combining a rigid hull with inflatable tubes.",
    image: {
      filename: "BoatImage",
      url: "https://images.unsplash.com/photo-1599058917212-d750089bc3c8",
    },
    price: 3800,
    location: "Split",
    country: "Croatia",
  },
  {
    title: "Canal Boat",
    description:
      "A slow-moving boat designed for narrow waterways and scenic inland cruising.",
    image: {
      filename: "BoatImage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4",
    },
    price: 2200,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Explorer Yacht",
    description:
      "A rugged luxury yacht built for long-range global exploration and rough sea conditions.",
    image: {
      filename: "BoatImage",
      url: "https://images.unsplash.com/photo-1540202404-1b927e27fa8b",
    },
    price: 14000,
    location: "Reykjavik",
    country: "Iceland",
  },
  {
    title: "Bowrider Boat",
    description:
      "A popular recreational boat with forward seating, ideal for families and water activities.",
    image: {
      filename: "BoatImage",
      url: "https://www.freepik.com/premium-photo/boat-moored-sea-against-sky_96166515.htm#fromView=keyword&page=2&position=39&uuid=1002e8c2-cd4a-411f-8196-36e8a87c71d5&query=Boat",
    },
    price: 2700,
    location: "Miami",
    country: "United States",
  },
  {
    title: "Electric Boat",
    description:
      "An eco-friendly electric-powered boat offering quiet operation and zero emissions.",
    image: {
      filename: "BoatImage",
      url: "https://images.unsplash.com/photo-1601315576600-b1b2f2b3d4b1",
    },
    price: 3600,
    location: "Oslo",
    country: "Norway",
  },
  {
    title: "Passenger Ferry",
    description:
      "A commercial-style boat designed to transport passengers safely across water routes.",
    image: {
      filename: "BoatImage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
    },
    price: 8000,
    location: "Stockholm",
    country: "Sweden",
  },
  {
    title: "Dinghy Boat",
    description:
      "A small utility boat commonly used as a tender or for short-distance travel.",
    image: {
      filename: "BoatImage",
      url: "https://images.unsplash.com/photo-1604609813442-a8924e83f76e",
    },
    price: 900,
    location: "Lisbon",
    country: "Portugal",
  },
  {
    title: "Mega Yacht",
    description:
      "A massive luxury yacht offering hotel-level amenities, helipads, pools, and onboard crew.",
    image: {
      filename: "BoatImage",
      url: "https://images.unsplash.com/photo-1544551763-ced87e95f06b",
    },
    price: 25000,
    location: "Dubai Marina",
    country: "United Arab Emirates",
  },
  {
    title: "Classic Wooden Boat",
    description:
      "A handcrafted wooden boat known for timeless design and traditional craftsmanship.",
    image: {
      filename: "BoatImage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb",
    },
    price: 3300,
    location: "Venice",
    country: "Italy",
  },
  {
    title: "River Cruise Boat",
    description:
      "A comfortable cruising boat designed for scenic river journeys and leisure travel.",
    image: {
      filename: "BoatImage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce",
    },
    price: 5200,
    location: "Danube",
    country: "Austria",
  },
  {
    title: "Submersible Boat",
    description:
      "A specialized underwater-capable vessel used for exploration and research experiences.",
    image: {
      filename: "BoatImage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
    },
    price: 18000,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Luxury Day Cruiser",
    description:
      "A stylish boat designed for daytime cruising with premium seating and entertainment areas.",
    image: {
      filename: "BoatImage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd",
    },
    price: 4200,
    location: "Ibiza",
    country: "Spain",
  },
  {
    title: "Offshore Powerboat",
    description:
      "A high-performance powerboat built for offshore racing and extreme speed conditions.",
    image: {
      filename: "BoatImage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb",
    },
    price: 11000,
    location: "Key West",
    country: "United States",
  },
  {
    title: "Tourist Glass Boat",
    description:
      "A sightseeing boat with a glass-bottom deck allowing passengers to view marine life below.",
    image: {
      filename: "BoatImage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
    },
    price: 2600,
    location: "Bali",
    country: "Indonesia",
  },
];

module.exports = { data: sampleBoatListings };
