import { DemoDisclaimer, DemoImage, DemoRoot, Full } from "./kit";
import { fonts } from "./fonts";
import { images } from "./images";

// Lefko Architects — fictional architecture & interiors studio. White space, quiet type.
const img = images.minimal;
const wrap = "mx-auto w-full max-w-[1280px] px-5 cq-md:px-12";

const projects = [
  { title: "Κατοικία στο Πήλιο", place: "Πήλιο", year: "2025", type: "Κατοικία", ratio: "aspect-[4/5]" },
  { title: "Σπίτι στο δάσος", place: "Χορτιάτης", year: "2025", type: "Κατοικία", ratio: "aspect-[4/3]" },
  { title: "Γραφεία Αλκυών", place: "Θεσσαλονίκη", year: "2024", type: "Εργασιακός χώρος", ratio: "aspect-[4/3]" },
  { title: "Διαμέρισμα Λευκού Πύργου", place: "Θεσσαλονίκη", year: "2024", type: "Εσωτερικός χώρος", ratio: "aspect-[4/5]" },
  { title: "Πολυκατοικία Ευκλείδη", place: "Καλαμαριά", year: "2023", type: "Κατοικία", ratio: "aspect-[4/5]" },
  { title: "Loft Βαλαωρίτου", place: "Θεσσαλονίκη", year: "2023", type: "Εσωτερικός χώρος", ratio: "aspect-[4/3]" },
];

const MinimalPortfolioDemo = () => (
  <DemoRoot font={fonts.commissioner} className="bg-white text-[#111] font-light">
    <header className="sticky top-0 z-20 bg-white/90 backdrop-blur">
      <div className={`${wrap} h-[84px] flex items-center justify-between text-[14px]`}>
        <a href="#" className="tracking-[0.42em] text-[17px] font-normal">
          LEFKO
        </a>
        <nav className="flex items-center gap-6 cq-md:gap-10">
          {["Έργα", "Γραφείο", "Επικοινωνία"].map((l, i) => (
            <a key={l} href="#" className={`${i === 0 ? "text-[#111]" : "text-[#8A8A8A]"} ${i > 0 ? "hidden cq-sm:inline" : ""} hover:text-[#111] transition-colors`}>
              {l}
            </a>
          ))}
          <span className="text-[#8A8A8A] text-[12px] tracking-[0.15em]">EL / EN</span>
        </nav>
      </div>
    </header>

    <section className={`${wrap} pt-10 cq-md:pt-16`}>
      <div className="grid cq-md:grid-cols-[1fr,1fr] gap-6 items-end">
        <h1 className="text-[30px] cq-md:text-[44px] leading-[1.15] font-extralight tracking-[-0.01em] max-w-[560px]">
          Αρχιτεκτονική και εσωτερικοί χώροι με φως, μέτρο και ησυχία.
        </h1>
        <p className="text-[14px] text-[#8A8A8A] leading-[1.8] cq-md:justify-self-end max-w-[320px]">
          Αρχιτεκτονικό γραφείο με έδρα τη Θεσσαλονίκη. Κατοικίες, ανακαινίσεις και εργασιακοί χώροι από
          το 2012.
        </p>
      </div>
      <div className="mt-12 cq-md:mt-16 h-[360px] cq-md:h-[560px] overflow-hidden">
        <DemoImage img={img.hero} w={1200} />
      </div>
      <div className="mt-4 flex justify-between text-[13px] text-[#8A8A8A]">
        <span>Πολιτιστικό κέντρο, διαγωνιστική πρόταση — 2025</span>
        <span>01 / 12</span>
      </div>
    </section>

    <section className={`${wrap} pt-20`}>
      <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#E6E6E6] pb-5">
        <h2 className="text-[13px] tracking-[0.3em] uppercase">Επιλεγμένα έργα</h2>
        <div className="flex gap-6 text-[14px] text-[#8A8A8A]">
          <span className="text-[#111]">Όλα</span>
          <span>Κατοικίες</span>
          <span className="hidden cq-sm:inline">Εσωτερικοί χώροι</span>
          <span className="hidden cq-sm:inline">Διαγωνισμοί</span>
        </div>
      </div>
    </section>

    <Full>
      <section className={`${wrap} pt-12 pb-24 grid cq-md:grid-cols-2 gap-x-12 gap-y-16`}>
        {projects.map((p, i) => (
          <a key={p.title} href="#" className={`group ${i % 2 === 1 ? "cq-md:mt-28" : ""}`}>
            <div className={`${p.ratio} overflow-hidden bg-[#F2F2F0]`}>
              <DemoImage img={img.projects[i]} w={600} className="transition-transform duration-[1200ms] group-hover:scale-[1.03]" />
            </div>
            <div className="mt-4 flex justify-between text-[14px]">
              <span className="font-normal">{p.title}</span>
              <span className="text-[#8A8A8A]">{p.year}</span>
            </div>
            <p className="mt-1 text-[13px] text-[#8A8A8A]">
              {p.type} · {p.place}
            </p>
          </a>
        ))}
      </section>

      <section className="bg-[#F6F5F2]">
        <div className={`${wrap} py-24 grid cq-lg:grid-cols-[1fr,1fr] gap-16 items-center`}>
          <div className="aspect-[4/3] overflow-hidden">
            <DemoImage img={img.about} w={600} />
          </div>
          <div className="max-w-[460px]">
            <h2 className="text-[13px] tracking-[0.3em] uppercase">Το γραφείο</h2>
            <p className="mt-8 text-[24px] cq-md:text-[30px] leading-[1.4] font-extralight">
              Σχεδιάζουμε λίγους χώρους τον χρόνο, με προσοχή σε κάθε λεπτομέρεια — από το οικόπεδο μέχρι
              το τελευταίο πόμολο.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-8 text-[14px]">
              <div>
                <p className="text-[#8A8A8A]">Υπηρεσίες</p>
                <ul className="mt-3 space-y-1.5">
                  <li>Αρχιτεκτονική μελέτη</li>
                  <li>Εσωτερικοί χώροι</li>
                  <li>Ανακαινίσεις</li>
                  <li>Επίβλεψη έργου</li>
                </ul>
              </div>
              <div>
                <p className="text-[#8A8A8A]">Διακρίσεις</p>
                <ul className="mt-3 space-y-1.5">
                  <li>Α΄ βραβείο, 2024</li>
                  <li>Έπαινος, 2023</li>
                  <li>Δημοσιεύσεις, 2022</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${wrap} py-24`}>
        <h2 className="text-[13px] tracking-[0.3em] uppercase">Επικοινωνία</h2>
        <a href="#" className="mt-8 block text-[34px] cq-md:text-[64px] font-extralight tracking-[-0.02em] hover:opacity-60 transition-opacity">
          studio@lefko.gr
        </a>
        <div className="mt-10 grid cq-md:grid-cols-3 gap-6 text-[14px] text-[#8A8A8A]">
          <p>
            Προξένου Κορομηλά 00
            <br />
            Θεσσαλονίκη
          </p>
          <p>
            +30 2310 000 000
            <br />
            Δευτέρα – Παρασκευή, 10:00 – 18:00
          </p>
          <p>Instagram · Pinterest</p>
        </div>
      </section>

      <footer className={`${wrap} py-8 border-t border-[#E6E6E6] flex flex-col cq-md:flex-row justify-between gap-2 text-[12px] text-[#8A8A8A]`}>
        <p>© 2026 Lefko Architects</p>
        <DemoDisclaimer />
      </footer>
    </Full>
  </DemoRoot>
);

export default MinimalPortfolioDemo;
