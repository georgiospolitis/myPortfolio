import {
  FiGlobe,
  FiShoppingBag,
  FiCode,
  FiLink,
  FiTool,
} from "react-icons/fi";

export const navLinks = [
  { id: "styles", title: "Στυλ" },
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
      "Ιστοσελίδες που φαίνονται σωστά σε κινητό και υπολογιστή και εξηγούν καθαρά τι κάνετε.",
  },
  {
    index: "02",
    title: "E-shops",
    icon: FiShoppingBag,
    description:
      "Ο πελάτης ψωνίζει εύκολα και εσείς προσθέτετε προϊόντα και βλέπετε παραγγελίες μόνοι σας.",
  },
  {
    index: "03",
    title: "Custom ανάπτυξη",
    icon: FiCode,
    description:
      "Όταν χρειάζεστε κάτι παραπάνω από μια απλή ιστοσελίδα: κρατήσεις, ειδικές φόρμες, μικρές web εφαρμογές.",
  },
  {
    index: "04",
    title: "Ενσωματώσεις",
    icon: FiLink,
    description:
      "Πληρωμές με κάρτα, τιμολόγηση, newsletter, booking: συνδέω το site με τα εργαλεία που ήδη χρησιμοποιείτε.",
  },
  {
    index: "05",
    title: "Συντήρηση & Υποστήριξη",
    icon: FiTool,
    description:
      "Ενημερώσεις, backups και αλλαγές όποτε χρειαστεί. Δεν εξαφανίζομαι μετά την παράδοση.",
  },
];

export const process = [
  {
    index: "01",
    title: "Γνωριμία",
    description: "Μιλάμε για την επιχείρησή σας και για το τι θέλετε να κάνει το site.",
  },
  {
    index: "02",
    title: "Σχεδιασμός",
    description: "Διαλέγουμε στυλ και σελίδες. Βλέπετε το σχέδιο πριν ξεκινήσει η κατασκευή.",
  },
  {
    index: "03",
    title: "Κατασκευή",
    description: "Φτιάχνω το site και σας το δείχνω στην πορεία, για να γίνονται οι αλλαγές νωρίς.",
  },
  {
    index: "04",
    title: "Παράδοση",
    description: "Τελικοί έλεγχοι, το site βγαίνει online και σας δείχνω πώς να το διαχειρίζεστε.",
  },
];

// Website styles: real WordPress starter templates a client can start from.
// Each style points to an official Astra Starter Template and its live demo;
// the final site is customised around the client's brand and content.
// `previewImage` is a screenshot of that demo (public/, relative to BASE_URL).
// `access` is internal (which Astra plan is needed) and isn't shown to visitors.
export const websiteStyles = [
  {
    slug: "modern-business",
    name: "Σύγχρονη Επιχείρηση",
    category: "Επιχειρησεις",
    description: "Καθαρό στυλ για συμβούλους και εταιρείες υπηρεσιών, με χώρο για αποτελέσματα και κριτικές.",
    recommendedFor: ["Σύμβουλοι επιχειρήσεων", "Εταιρείες υπηρεσιών", "Coaches"],
    features: [
      "Παρουσίαση υπηρεσιών",
      "Παραδείγματα συνεργασιών",
      "Κριτικές",
      "Blog",
      "Φόρμα επικοινωνίας",
    ],
    provider: "Astra",
    theme: "Astra",
    builder: "Elementor",
    templateName: "Professional Consultant",
    templateUrl: "https://wpastra.com/templates/professional-consultant-04/",
    demoUrl: "https://websitedemos.net/professional-consultant-04/",
    access: "premium",
    supportsWooCommerce: false,
    previewImage: "website-styles/modern-business.webp",
  },
  {
    slug: "professional-services",
    name: "Επαγγελματικές Υπηρεσίες",
    category: "Υπηρεσιες",
    description: "Κλασικό, σοβαρό στυλ για γραφεία όπου μετράει η εμπιστοσύνη.",
    recommendedFor: ["Δικηγορικά γραφεία", "Λογιστές", "Συμβολαιογράφοι", "Σύμβουλοι"],
    features: [
      "Τομείς εξειδίκευσης",
      "Παρουσίαση συνεργατών",
      "Γιατί να σας επιλέξουν",
      "Κριτικές πελατών",
      "Στοιχεία επικοινωνίας",
    ],
    provider: "Astra",
    theme: "Astra",
    builder: "Elementor",
    templateName: "Law Firm",
    templateUrl: "https://wpastra.com/templates/law-firm-04/",
    demoUrl: "https://websitedemos.net/law-firm-04/",
    access: "premium",
    supportsWooCommerce: false,
    previewImage: "website-styles/professional-services.webp",
  },
  {
    slug: "creative-studio",
    name: "Δημιουργικό Studio",
    category: "Δημιουργικα",
    description: "Σύγχρονο στυλ για studios και agencies, με τα έργα και τις υπηρεσίες σε πρώτο πλάνο.",
    recommendedFor: ["Agencies", "Δημιουργικά studios", "Web designers"],
    features: [
      "Ξεχωριστή σελίδα για κάθε υπηρεσία",
      "Portfolio έργων",
      "Κριτικές πελατών",
      "Blog",
      "Σελίδα καριέρας",
      "Φόρμα για αίτημα προσφοράς",
    ],
    provider: "Astra",
    theme: "Astra",
    builder: "Elementor",
    templateName: "Agency",
    templateUrl: "https://wpastra.com/templates/web-agency-04/",
    demoUrl: "https://websitedemos.net/web-agency-04/",
    access: "premium",
    supportsWooCommerce: false,
    previewImage: "website-styles/creative-studio.webp",
  },
  {
    slug: "minimal-portfolio",
    name: "Minimal Portfolio",
    category: "Portfolio",
    description: "Λιτό, σκούρο στυλ με μεγάλα γράμματα, όπου πρωταγωνιστεί η δουλειά σας.",
    recommendedFor: ["Αρχιτέκτονες", "Interior designers", "Φωτογράφοι"],
    features: [
      "Portfolio έργων",
      "Παρουσίαση υπηρεσιών",
      "Σελίδα «Σχετικά»",
      "Φόρμα επικοινωνίας",
    ],
    provider: "Astra",
    theme: "Astra",
    builder: "Elementor",
    templateName: "ArchMasters Architecture",
    templateUrl: "https://wpastra.com/templates/archmasters-architecture-02/",
    demoUrl: "https://websitedemos.net/archmasters-architecture-02/",
    access: "free",
    supportsWooCommerce: false,
    previewImage: "website-styles/minimal-portfolio.webp",
  },
  {
    slug: "hospitality",
    name: "Εστίαση & Φιλοξενία",
    category: "Φιλοξενια",
    description: "Κομψό και λιτό στυλ για εστιατόρια, με το μενού και τις κρατήσεις σε πρώτο πλάνο.",
    recommendedFor: ["Εστιατόρια", "Wine bars", "Καφέ"],
    features: [
      "Σελίδα μενού",
      "Ωράριο και τοποθεσία",
      "Ενότητα για κρατήσεις",
      "Σελίδα επικοινωνίας",
    ],
    provider: "Astra",
    theme: "Astra",
    builder: "Elementor",
    templateName: "Fine Dining Restaurant",
    templateUrl: "https://wpastra.com/templates/fine-dine-restaurant-02/",
    demoUrl: "https://websitedemos.net/fine-dine-restaurant-02/",
    access: "free",
    supportsWooCommerce: false,
    previewImage: "website-styles/hospitality.webp",
  },
  {
    slug: "beauty-wellness",
    name: "Ομορφιά & Ευεξία",
    category: "Ομορφια",
    description: "Μεγάλες φωτογραφίες και έντονα γράμματα, για κομμωτήρια και studios ομορφιάς.",
    recommendedFor: ["Κομμωτήρια", "Κουρεία", "Studios ομορφιάς"],
    features: [
      "Υπηρεσίες ανά κατηγορία",
      "Παρουσίαση ομάδας",
      "Σελίδα καταστημάτων",
      "Κριτικές πελατών",
      "Εγγραφή στο newsletter",
    ],
    provider: "Astra",
    theme: "Astra",
    builder: "Elementor",
    templateName: "Hairdressers and Hair Salons",
    templateUrl: "https://wpastra.com/templates/hair-salon-04/",
    demoUrl: "https://websitedemos.net/hair-salon-04/",
    access: "premium",
    supportsWooCommerce: false,
    previewImage: "website-styles/beauty-wellness.webp",
  },
  {
    slug: "ecommerce",
    name: "Ηλεκτρονικό Κατάστημα",
    category: "E-commerce",
    description: "Λιτό e-shop με καθαρές φωτογραφίες προϊόντων και απλή διαδικασία αγοράς.",
    recommendedFor: ["Καταστήματα ρούχων", "Αξεσουάρ", "Καλλυντικά & αρώματα"],
    features: [
      "Κατηγορίες προϊόντων",
      "Νέες αφίξεις",
      "Σελίδες προϊόντων",
      "Καλάθι και checkout",
    ],
    provider: "Astra",
    theme: "Astra",
    builder: "Elementor",
    templateName: "Fashion Store",
    templateUrl: "https://wpastra.com/templates/fashion-store-04/",
    demoUrl: "https://websitedemos.net/fashion-store-04/",
    access: "premium",
    supportsWooCommerce: true,
    previewImage: "website-styles/ecommerce.webp",
  },
  {
    slug: "real-estate",
    name: "Ακίνητα",
    category: "Real Estate",
    description: "Καθαρό στυλ για μεσιτικά γραφεία, με τα ακίνητα σε μεγάλες φωτογραφίες.",
    recommendedFor: ["Μεσιτικά γραφεία", "Κατασκευαστικές", "Ενοικιάσεις"],
    features: [
      "Προβεβλημένα ακίνητα",
      "Σελίδα ακινήτων",
      "Παρουσίαση υπηρεσιών",
      "Κριτικές πελατών",
      "Φόρμα επικοινωνίας",
    ],
    // The template presents properties as designed pages, not a listings system.
    note: "Το template δεν έχει έτοιμη αναζήτηση και φίλτρα ακινήτων. Αν τα χρειάζεστε, τα προσθέτω με plugin ή custom λύση.",
    provider: "Astra",
    theme: "Astra",
    builder: "Elementor",
    templateName: "Real Estate Company",
    templateUrl: "https://wpastra.com/templates/real-estate-company-04/",
    demoUrl: "https://websitedemos.net/real-estate-company-04/",
    access: "premium",
    supportsWooCommerce: false,
    previewImage: "website-styles/real-estate.webp",
  },
  {
    slug: "saas-technology",
    name: "SaaS & Τεχνολογία",
    category: "Τεχνολογια",
    description: "Φωτεινό στυλ για εφαρμογές και SaaS, με σελίδες για δυνατότητες και τιμές.",
    recommendedFor: ["SaaS", "Εφαρμογές", "Startups"],
    features: [
      "Παρουσίαση προϊόντος",
      "Σελίδα δυνατοτήτων",
      "Πίνακας τιμών",
      "Σελίδες όρων και απορρήτου",
    ],
    provider: "Astra",
    theme: "Astra",
    builder: "Elementor",
    templateName: "Tanz Tech",
    templateUrl: "https://wpastra.com/templates/saas-04/",
    demoUrl: "https://websitedemos.net/saas-04/",
    access: "premium",
    supportsWooCommerce: false,
    previewImage: "website-styles/saas-technology.webp",
  },
];

// "WordPress · Astra · Elementor" (+ WooCommerce) — the small technical line.
export const styleStack = (style) =>
  ["WordPress", style.theme, style.builder, style.supportsWooCommerce && "WooCommerce"]
    .filter(Boolean)
    .join(" · ");

// How a chosen style is named in the contact form, e.g.
// "Σύγχρονη Επιχείρηση — Astra Professional Consultant".
export const styleLabel = (style) => `${style.name} — ${style.provider} ${style.templateName}`;

// Fired when a visitor picks a style, so the contact form can reference it.
export const STYLE_SELECTED_EVENT = "website-style:selected";
