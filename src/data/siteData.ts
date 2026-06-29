export const brand = {
  name: "Jho Ladakh Adventure",
  shortName: "Jho Ladakh",
  tagline: "Premium bike rentals & curated road trips across the Himalayas.",
  phone: "+91 91498 42254",
  phoneRaw: "919149842254",
  whatsapp: "+91 91498 42254",
  whatsappRaw: "919149842254",
  email: "jholadakhadventure@gmail.com",
  address: "Upper Tukcha, Leh, Ladakh, India 194101",
  instagram: "https://www.instagram.com/jho_ladakh_travels?igsh=MWFvMjVhZ3hzZ2hpdQ==",
  googleReview: "#",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Bikes", href: "#bikes" },
  { label: "Destinations", href: "#destinations" },
  { label: "Packages", href: "#packages" },
  { label: "Why Us", href: "#why-us" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  headline: ["Ride. Explore.", "Live Ladakh."],
  highlight: "Live Ladakh.",
  subheadline:
    "Premium Royal Enfield rentals, local route expertise, and end-to-end support for unforgettable journeys across Leh, Nubra, Pangong & beyond.",
  ctaPrimary: "Book Your Bike",
  ctaSecondary: "Explore Packages",
  stats: [
    { value: "0°C", label: "Leh Average Temperature", icon: "thermometer" },
    { value: "10K+", label: "Happy Riders", icon: "users" },
    { value: "24/7", label: "Roadside Backup", icon: "shield" },
    { value: "Premium", label: "Gear Included", icon: "helmet" },
  ],
};

export const bikes = [
  {
    id: "himalayan-411",
    name: "Royal Enfield Himalayan 411",
    shortName: "Himalayan 411",
    cc: 411,
    kmpl: "30-35",
    pricePerDay: 2500,
    image: "/images/bike-himalayan411.png",
    tags: ["Adventure", "Most Popular"],
    description: "Purpose-built for Ladakh. Long travel suspension, comfortable upright ergonomics.",
  },
  {
    id: "himalayan-452",
    name: "Royal Enfield Himalayan 452",
    shortName: "Himalayan 452",
    cc: 452,
    kmpl: "28-32",
    pricePerDay: 3500,
    image: "/images/bike-himalayan452.png",
    tags: ["New", "Premium"],
    description: "All-new liquid-cooled engine. Torque-rich, refined, and ready for high-altitude passes.",
  },
  {
    id: "classic-350",
    name: "Royal Enfield Classic 350",
    shortName: "Classic 350",
    cc: 349,
    kmpl: "35-40",
    pricePerDay: 2000,
    image: "/images/bike-classic350.png",
    tags: ["Classic", "Value"],
    description: "Timeless style with modern reliability. Ideal for Leh city rides and day trips.",
  },
  {
    id: "meteor-350",
    name: "Royal Enfield Meteor 350",
    shortName: "Meteor 350",
    cc: 349,
    kmpl: "32-36",
    pricePerDay: 2500,
    image: "/images/bike-meteor350.png",
    tags: ["Cruiser", "Comfort"],
    description: "Easy cruiser ergonomics and a refined twin-spark engine for relaxed touring.",
  },
];

export const destinations = [
  {
    id: "leh",
    name: "Leh Town",
    subtitle: "Gateway to Ladakh",
    duration: "Base Hub",
    image: "/images/leh.jpg",
    description: "Acclimatize, explore monasteries, markets, and start every great Ladakh ride here.",
  },
  {
    id: "nubra",
    name: "Nubra Valley",
    subtitle: "Sand Dunes & Camels",
    duration: "1–2 Days",
    image: "/images/nubra.jpg",
    description: "Cross Khardung La, ride to Diskit, Hunder, and the double-humped Bactrian camels.",
  },
  {
    id: "pangong",
    name: "Pangong Lake",
    subtitle: "Turquoise Wonder",
    duration: "1 Day / Overnight",
    image: "/images/pangong.jpg",
    description: "Iconic high-altitude lake with colour-changing waters and stunning campsites.",
  },
  {
    id: "tsomoriri",
    name: "Tso Moriri",
    subtitle: "Remote High-Altitude Lake",
    duration: "2 Days",
    image: "/images/tsomoriri.jpg",
    description: "Less crowded than Pangong, rich in wildlife, and a true off-the-grid experience.",
  },
  {
    id: "hanle",
    name: "Hanle",
    subtitle: "Stargazing & Silence",
    duration: "2–3 Days",
    image: "/images/hanle.jpg",
    description: "Ride to one of the world's highest observatories and darkest night skies.",
  },
];

export const features = [
  {
    title: "Certified Bikes",
    description: "Every motorcycle is inspected, serviced, and road-tested before handover.",
    icon: "bike",
  },
  {
    title: "Roadside Assistance",
    description: "24/7 backup support for key highway routes(Groups Only).",
    icon: "wrench",
  },
  {
    title: "Premium Gear Included",
    description: "Riding jackets(Lvl 2), Gloves, and Knee Elbow safety kits included with every rental.",
    icon: "shield-check",
  },
  {
    title: "Flexible Pickup",
    description: "Hotel, and Leh city pickup/drop options to fit your itinerary.",
    icon: "map-pin",
  },
  {
    title: "Transparent Pricing",
    description: "Booking Charges ₹5000, Clear daily rates, security deposit, and inclusions upfront.",
    icon: "badge-check",
  },
  {
    title: "Permit Support",
    description: "Complete assistance for inner-line permits and route info.",
    icon: "file-check",
  },
];

export const packages = [
  {
    id: "leh-nubra-pangong",
    name: "Leh – Nubra – Pangong",
    duration: "5 Nights / 6 Days",
    route: "Acclimatise → Local Sightseeing → Nubra → Pangong → Leh",
    price: 29499,
    per: "per person",
    popular: true,
    image: "/images/pangong.jpg",
    inclusions: [
      "Bike rental for entire trip",
      "Fuel guidance & route maps",
      "Stay recommendations & booking support",
      "24/7 roadside assistance",
    ],
  },
  {
    id: "tsomoriri-hanle",
    name: "Tso Moriri & Hanle Expedition",
    duration: "6 Nights / 7 Days",
    route: "Local Sightseeing → Tso Moriri → Hanle → Umling La → Leh",
    price: 33499,
    per: "per person",
    popular: false,
    image: "/images/tsomoriri.jpg",
    inclusions: [
      "Himalayan 411 / 452 rental",
      "Inner-line permit assistance",
      "Camp & homestay coordination",
      "Backup vehicle options",
    ],
  },
  {
    id: "Zanskar package",
    name: "Zanskar Adventure",
    duration: "5 Nights / 6 Days",
    route: "Leh(Rest Day) → Zanskar via nimmo padum → Phuktar Monestry & Gonbo Rangjon Back to Padum → Zanskar to Kargil → Kargil to Leh via Lamayuru → Departure",
    price: 35499,
    per: "per person",
    popular: false,
    image: "/images/Zanskarimages.jpg",
    inclusions: [
      "Bike rental",
      "Fuel guidance",
      "Booking support",
      "24/7 roadside assistance",
    ],
  },
  {
    id: "ultimate-ladakh",
    name: "Ultimate Ladakh Circuit",
    duration: "8 Nights / 9 Days",
    route: "Local Sightseeing → Nubra → Turtuk → Pangong → Hanle → Umlingla → Leh",
    price: 39499,
    per: "per person",
    popular: false,
    image: "/images/nubra.jpg",
    inclusions: [
      "Premium bike rental",
      "End-to-end itinerary planning",
      "All permit & route support",
      "Dedicated trip coordinator",
    ],
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Rohan Mehta",
    location: "Mumbai",
    rating: 5,
    text: "The bikes were spotless and the team helped us get permits in no time. Riding to Pangong was a dream come true!",
    image: "/images/testimonial-1.jpg",
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Delhi",
    rating: 5,
    text: "Jho Ladakh Adventure made our girls' trip seamless. Great communication on WhatsApp and genuine local advice.",
    image: "/images/testimonial-2.jpg",
  },
  {
    id: 3,
    name: "Arjun & Neha",
    location: "Bangalore",
    rating: 5,
    text: "We did the Nubra-Pangong circuit. The backup support gave us confidence on high passes. Highly recommended!",
    image: "/images/testimonial-3.jpg",
  },
];

export const faqs = [
  {
    question: "What documents are required to rent a bike in Ladakh?",
    answer:
      "A valid Driving Licence (two-wheeler) and an Aadhaar card are mandatory. International travellers can present a valid passport and driving permit.",
  },
  {
    question: "Is there a security deposit?",
    answer:
      "We only take SD of ₹5000 and just need a valid ID card as deposit for most rentals, keeping your trip hassle-free.",
  },
  {
    question: "Are helmets and riding gear included?",
    answer:
      "Yes. Riding jackets(Lvl 2), Gloves, and Knee Elbow guards are included with every bike rental at no extra cost.",
  },
  {
    question: "Which bikes are available for rent?",
    answer:
      "Our fleet includes Royal Enfield Himalayan 411, Himalayan 452, Classic 350, Meteor 350. All bikes are regularly serviced for high-altitude conditions.",
  },
  {
    question: "Can you help with inner-line permits?",
    answer:
      "Absolutely. We provide complete assistance for inner-line permits.",
  },
  {
    question: "What is your cancellation and refund policy?",
    answer:
      "Cancellations made 30 days before the travel date are eligible for a full refund. Shorter notice may be subject to a nominal processing charge.",
  },
  {
    question: "Do you offer pickup and drop services?",
    answer:
      "Yes. We offer flexible pickup and drop from your hotel, or our Upper Tukcha office.",
  },
  {
    question: "Can I book a complete package including stay?",
    answer:
      "Yes. Our packages include bike rental, route planning, stay recommendations, and booking support. We can also arrange cab packages in Innova / Crysta / Tempo Traveller.",
  },
];

export const footer = {
  description:
    "Your trusted local partner for Royal Enfield rentals, self-ride adventures, and curated road trips across Leh, Ladakh, and the Himalayas.",
  quickLinks: [
    { label: "Home", href: "#home" },
    { label: "Bike Fleet", href: "#bikes" },
    { label: "Destinations", href: "#destinations" },
    { label: "Packages", href: "#packages" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" },
  ],
  topRoutes: [
    { label: "Leh to Nubra", href: "#destinations" },
    { label: "Leh to Pangong", href: "#destinations" },
    { label: "Leh to Tso Moriri", href: "#destinations" },
    { label: "Nubra to Pangong", href: "#destinations" },
    { label: "Hanle & Umling La", href: "#destinations" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Cancellation Policy", href: "#" },
  ],
};
