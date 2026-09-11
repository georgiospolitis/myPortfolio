import {
  FiGlobe,
  FiShoppingBag,
  FiCode,
  FiLink,
  FiTool,
} from "react-icons/fi";

export const navLinks = [
  { id: "work", title: "Work" },
  { id: "services", title: "Services" },
  { id: "about", title: "About" },
  { id: "contact", title: "Contact" },
];

export const services = [
  {
    index: "01",
    title: "Websites",
    icon: FiGlobe,
    description:
      "Professional, responsive websites designed around your brand and business goals.",
  },
  {
    index: "02",
    title: "E-commerce",
    icon: FiShoppingBag,
    description:
      "Online stores with modern shopping experiences and easy product management.",
  },
  {
    index: "03",
    title: "Custom Development",
    icon: FiCode,
    description:
      "Custom functionality and web applications when a standard website is not enough.",
  },
  {
    index: "04",
    title: "Integrations",
    icon: FiLink,
    description:
      "APIs, payment systems, third-party services and business tools connected to your site.",
  },
  {
    index: "05",
    title: "Maintenance & Support",
    icon: FiTool,
    description:
      "Updates, improvements, monitoring and ongoing technical support after launch.",
  },
];

export const process = [
  {
    index: "01",
    title: "Discover",
    description: "Understand the business, goals and requirements.",
  },
  {
    index: "02",
    title: "Design",
    description: "Create the visual direction and user experience.",
  },
  {
    index: "03",
    title: "Build",
    description: "Develop the website and functionality.",
  },
  {
    index: "04",
    title: "Launch",
    description: "Test, deploy and provide ongoing support.",
  },
];

export const projects = [
  {
    index: "01",
    label: "Concept Project",
    category: "Restaurant",
    name: "A table always ready",
    description:
      "A warm, appetite-driven website for a neighborhood restaurant — menu, story and reservations designed to feel like the room itself.",
    tags: ["Website", "Reservations", "WordPress"],
    tone: "clay",
  },
  {
    index: "02",
    label: "Concept Project",
    category: "Barbershop",
    name: "Sharp, on the hour",
    description:
      "A confident, no-nonsense site built around one job: getting a chair booked. Clean type, clear pricing, instant booking.",
    tags: ["Website", "Online Booking", "Elementor"],
    tone: "ink",
  },
  {
    index: "03",
    label: "Concept Project",
    category: "E-commerce",
    name: "A store that sells itself",
    description:
      "A fast, focused online store built for a small product catalog — easy to browse, easy to check out, easy to manage.",
    tags: ["E-commerce", "Payments", "Product Catalog"],
    tone: "sage",
  },
];
