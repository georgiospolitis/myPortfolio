import {
  FiGlobe,
  FiShoppingBag,
  FiCode,
  FiLink,
  FiTool,
} from "react-icons/fi";

export const navLinks = [
  { id: "work", title: "Έργα" },
  { id: "services", title: "Υπηρεσίες" },
  { id: "about", title: "Σχετικά" },
  { id: "contact", title: "Επικοινωνία" },
];

export const services = [
  {
    index: "01",
    title: "Ιστοσελίδες",
    icon: FiGlobe,
    description:
      "Επαγγελματικές, responsive ιστοσελίδες σχεδιασμένες γύρω από το brand και τους επιχειρηματικούς σας στόχους.",
  },
  {
    index: "02",
    title: "E-commerce",
    icon: FiShoppingBag,
    description:
      "Ηλεκτρονικά καταστήματα με σύγχρονες εμπειρίες αγορών και εύκολη διαχείριση προϊόντων.",
  },
  {
    index: "03",
    title: "Προσαρμοσμένη Ανάπτυξη",
    icon: FiCode,
    description:
      "Προσαρμοσμένη λειτουργικότητα και web εφαρμογές όταν μια απλή ιστοσελίδα δεν είναι αρκετή.",
  },
  {
    index: "04",
    title: "Ενσωματώσεις",
    icon: FiLink,
    description:
      "APIs, συστήματα πληρωμών, υπηρεσίες τρίτων και επιχειρηματικά εργαλεία συνδεδεμένα στο site σας.",
  },
  {
    index: "05",
    title: "Συντήρηση & Υποστήριξη",
    icon: FiTool,
    description:
      "Ενημερώσεις, βελτιώσεις, παρακολούθηση και συνεχής τεχνική υποστήριξη μετά την κυκλοφορία.",
  },
];

export const process = [
  {
    index: "01",
    title: "Ανακάλυψη",
    description: "Κατανόηση της επιχείρησης, των στόχων και των απαιτήσεων.",
  },
  {
    index: "02",
    title: "Σχεδιασμός",
    description: "Δημιουργία της οπτικής κατεύθυνσης και της εμπειρίας χρήστη.",
  },
  {
    index: "03",
    title: "Κατασκευή",
    description: "Ανάπτυξη της ιστοσελίδας και της λειτουργικότητας.",
  },
  {
    index: "04",
    title: "Λανσάρισμα",
    description: "Δοκιμή, δημοσίευση και παροχή συνεχούς υποστήριξης.",
  },
];

export const projects = [
  {
    index: "01",
    label: "Concept Project",
    category: "Εστιατόριο",
    name: "Ένα τραπέζι πάντα έτοιμο",
    description:
      "Μια ζεστή ιστοσελίδα για ένα συνοικιακό εστιατόριο — μενού, ιστορία και κρατήσεις σχεδιασμένα για να δίνουν την αίσθηση του ίδιου του χώρου.",
    tags: ["Ιστοσελίδα", "Κρατήσεις", "WordPress"],
    tone: "clay",
    link: "/concepts/restaurant/index.html",
  },
  {
    index: "02",
    label: "Concept Project",
    category: "Κουρείο",
    name: "Ακριβές, στην ώρα του",
    description:
      "Ένα σίγουρο, ξεκάθαρο site φτιαγμένο γύρω από έναν σκοπό: το κλείσιμο ραντεβού. Καθαρή τυπογραφία, ξεκάθαρες τιμές, άμεση κράτηση.",
    tags: ["Ιστοσελίδα", "Online Κρατήσεις", "Elementor"],
    tone: "ink",
  },
  {
    index: "03",
    label: "Concept Project",
    category: "E-commerce",
    name: "Ένα κατάστημα που πουλάει από μόνο του",
    description:
      "Ένα γρήγορο, εστιασμένο ηλεκτρονικό κατάστημα φτιαγμένο για μικρό κατάλογο προϊόντων — εύκολη περιήγηση, εύκολο checkout, εύκολη διαχείριση.",
    tags: ["E-commerce", "Πληρωμές", "Κατάλογος Προϊόντων"],
    tone: "sage",
  },
];