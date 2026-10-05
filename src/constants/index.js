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

// Website styles: curated design directions a client can start from.
// Each one is a visual starting point that gets customized per client — not a
// finished site or a resold theme. Its preview is a coded demo homepage for a
// fictional business (`sample`), registered by `slug` in components/style-demos.
// `wordpressStack` is internal context, shown only as a small technical note.
export const websiteStyles = [
  {
    slug: "modern-business",
    name: "Σύγχρονη Επιχείρηση",
    category: "Επιχειρησεις",
    description:
      "Καθαρή, σίγουρη παρουσία με δυνατό hero, ξεκάθαρες υπηρεσίες και εμφανή σημεία επικοινωνίας.",
    tags: ["WordPress", "Business", "Elementor"],
    recommendedFor: ["Τοπικές επιχειρήσεις", "Startups", "Εταιρείες υπηρεσιών"],
    features: [
      "Hero με κεντρικό μήνυμα και CTA",
      "Ενότητα υπηρεσιών",
      "Κριτικές πελατών",
      "Φόρμα επικοινωνίας",
    ],
    wordpressStack: ["Elementor"],
    supportsWooCommerce: false,
    sample: { brand: "Τροχιά Consulting", business: "η εταιρεία συμβούλων" },
  },
  {
    slug: "professional-services",
    name: "Επαγγελματικές Υπηρεσίες",
    category: "Υπηρεσιες",
    description:
      "Νηφάλιο, αξιόπιστο ύφος για γραφεία και επαγγελματίες, όπου η εμπιστοσύνη μετράει πριν από το πρώτο τηλεφώνημα.",
    tags: ["WordPress", "Business", "Minimal"],
    recommendedFor: ["Δικηγορικά γραφεία", "Λογιστές", "Συμβούλους", "Ιατρεία"],
    features: [
      "Παρουσίαση ομάδας",
      "Τομείς εξειδίκευσης",
      "Online αίτημα ραντεβού",
      "Ενότητα άρθρων / νέων",
    ],
    wordpressStack: ["Kadence"],
    supportsWooCommerce: false,
    sample: { brand: "Καλλέργη & Συνεργάτες", business: "η δικηγορική εταιρεία" },
  },
  {
    slug: "creative-agency",
    name: "Δημιουργικό Studio",
    category: "Δημιουργικα",
    description:
      "Τολμηρή τυπογραφία, έντονες αντιθέσεις και ασύμμετρα layouts για brands που θέλουν να ξεχωρίσουν.",
    tags: ["WordPress", "Elementor", "Bold"],
    recommendedFor: ["Agencies", "Studios", "Brands με έντονη ταυτότητα"],
    features: [
      "Μεγάλη, εκφραστική τυπογραφία",
      "Showcase δουλειάς",
      "Animations κατά το scroll",
      "Σελίδα ομάδας",
    ],
    wordpressStack: ["Elementor"],
    supportsWooCommerce: false,
    sample: { brand: "KYMA Studio", business: "το δημιουργικό studio" },
  },
  {
    slug: "minimal-portfolio",
    name: "Minimal Portfolio",
    category: "Portfolio",
    description:
      "Άφθονος λευκός χώρος και ήσυχη τυπογραφία, ώστε η δουλειά σας να είναι το μόνο που τραβάει το βλέμμα.",
    tags: ["WordPress", "Minimal", "Portfolio"],
    recommendedFor: ["Φωτογράφους", "Αρχιτέκτονες", "Designers", "Καλλιτέχνες"],
    features: [
      "Gallery έργων",
      "Σελίδα έργου με εικόνες",
      "Σύντομο βιογραφικό",
      "Απλή φόρμα επικοινωνίας",
    ],
    wordpressStack: ["Blocksy"],
    supportsWooCommerce: false,
    sample: { brand: "Lefko Architects", business: "το αρχιτεκτονικό γραφείο" },
  },
  {
    slug: "hospitality",
    name: "Εστίαση & Φιλοξενία",
    category: "Φιλοξενια",
    description:
      "Ζεστή, ατμοσφαιρική αισθητική με μεγάλες εικόνες, μενού και κρατήσεις — για να νιώσει ο επισκέπτης τον χώρο πριν έρθει.",
    tags: ["WordPress", "Κρατήσεις", "Elementor"],
    recommendedFor: ["Εστιατόρια", "Καφέ & μπαρ", "Ξενοδοχεία", "Καταλύματα"],
    features: [
      "Hero με full-width φωτογραφία",
      "Μενού ή δωμάτια",
      "Φόρμα κράτησης",
      "Ωράριο, χάρτης & επικοινωνία",
    ],
    wordpressStack: ["Elementor"],
    supportsWooCommerce: false,
    sample: { brand: "ΨΗΝΩ & ΤΡΩΩ", business: "το εστιατόριο" },
  },
  {
    slug: "beauty-wellness",
    name: "Ομορφιά & Ευεξία",
    category: "Ραντεβου",
    description:
      "Απαλά χρώματα και καθαρή δομή γύρω από έναν στόχο: να κλείνει ο πελάτης ραντεβού εύκολα και γρήγορα.",
    tags: ["WordPress", "Online Κρατήσεις", "Elementor"],
    recommendedFor: ["Κουρεία", "Κομμωτήρια", "Ινστιτούτα ομορφιάς", "Spa"],
    features: [
      "Online κλείσιμο ραντεβού",
      "Τιμοκατάλογος υπηρεσιών",
      "Gallery δουλειάς",
      "Παρουσίαση ομάδας",
    ],
    wordpressStack: ["Elementor"],
    supportsWooCommerce: false,
    sample: { brand: "Σάλβια Hair & Beauty", business: "το studio ομορφιάς" },
  },
  {
    slug: "ecommerce",
    name: "Ηλεκτρονικό Κατάστημα",
    category: "E-commerce",
    description:
      "Γρήγορο, εστιασμένο κατάστημα με εύκολη περιήγηση, καθαρές σελίδες προϊόντων και checkout χωρίς εμπόδια.",
    tags: ["WordPress", "WooCommerce", "E-shop"],
    recommendedFor: ["Τοπικά καταστήματα", "Brands προϊόντων", "Παραγωγούς"],
    features: [
      "Κατάλογος με φίλτρα",
      "Σελίδες προϊόντων",
      "Καλάθι & checkout",
      "Online πληρωμές & αποστολές",
    ],
    wordpressStack: ["WooCommerce", "Blocksy"],
    supportsWooCommerce: true,
    sample: { brand: "Ostria Home", business: "το κατάστημα" },
  },
  {
    slug: "real-estate",
    name: "Ακίνητα",
    category: "Real Estate",
    description:
      "Δομημένη παρουσίαση ακινήτων με αναζήτηση, κάρτες αγγελιών και σελίδες που αναδεικνύουν κάθε χώρο.",
    tags: ["WordPress", "Αγγελίες", "Αναζήτηση"],
    recommendedFor: ["Μεσιτικά γραφεία", "Κατασκευαστικές", "Ενοικιάσεις"],
    features: [
      "Αναζήτηση με φίλτρα",
      "Κάρτες ακινήτων",
      "Σελίδα ακινήτου με gallery",
      "Φόρμα ενδιαφέροντος",
    ],
    wordpressStack: ["Kadence"],
    supportsWooCommerce: false,
    sample: { brand: "Ammos Estates", business: "το μεσιτικό γραφείο" },
  },
  {
    slug: "saas-technology",
    name: "SaaS & Τεχνολογία",
    category: "Τεχνολογια",
    description:
      "Σύγχρονη, τεχνική αισθητική για προϊόντα και εφαρμογές — με έμφαση στα features, τις τιμές και το sign-up.",
    tags: ["WordPress", "Landing Page", "Tech"],
    recommendedFor: ["SaaS προϊόντα", "Εφαρμογές", "Tech startups"],
    features: [
      "Product hero με screenshot",
      "Πλέγμα features",
      "Πίνακας τιμών",
      "FAQ & sign-up CTA",
    ],
    wordpressStack: ["Kadence"],
    supportsWooCommerce: false,
    sample: { brand: "Ροή", business: "η πλατφόρμα" },
  },
];

// What a chosen style can be adapted to — shown in the style detail view.
export const styleCustomizations = [
  "Χρώματα",
  "Τυπογραφία",
  "Branding",
  "Ενότητες",
  "Περιεχόμενο",
  "Δομή σελίδων",
  "Λειτουργικότητα",
  "Ενσωματώσεις",
  "WooCommerce όπου χρειάζεται",
];

// Fired when a visitor picks a style, so the contact form can reference it.
export const STYLE_SELECTED_EVENT = "website-style:selected";
