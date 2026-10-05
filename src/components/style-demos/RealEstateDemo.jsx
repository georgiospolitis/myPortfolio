import PropTypes from "prop-types";
import {
  FiArrowRight,
  FiChevronDown,
  FiHeart,
  FiHome,
  FiMapPin,
  FiMaximize,
  FiMenu,
  FiPhone,
  FiSearch,
} from "react-icons/fi";

import { DemoDisclaimer, DemoImage, DemoRoot, Full } from "./kit";
import { fonts } from "./fonts";
import { images } from "./images";

// Ammos Estates — fictional real-estate agency in Halkidiki & Thessaloniki.
const img = images.realEstate;
const wrap = "mx-auto w-full max-w-[1240px] px-5 cq-md:px-10";

const listings = [
  { title: "Βίλα με πισίνα και θέα", place: "Πευκοχώρι, Χαλκιδική", price: "€ 465.000", beds: 4, baths: 3, area: 185, tag: "Προς πώληση" },
  { title: "Διώροφη κατοικία κοντά στη θάλασσα", place: "Νέα Καλλικράτεια", price: "€ 390.000", beds: 3, baths: 2, area: 160, tag: "Νέο" },
  { title: "Μονοκατοικία με κήπο", place: "Πανόραμα, Θεσσαλονίκη", price: "€ 540.000", beds: 4, baths: 3, area: 220, tag: "Προς πώληση" },
  { title: "Φωτεινό διαμέρισμα 2 υπνοδωματίων", place: "Κέντρο, Θεσσαλονίκη", price: "€ 1.150 / μήνα", beds: 2, baths: 1, area: 84, tag: "Ενοικίαση" },
  { title: "Λευκή κατοικία με φοίνικες", place: "Κασσάνδρα, Χαλκιδική", price: "€ 610.000", beds: 5, baths: 4, area: 240, tag: "Αποκλειστικό" },
  { title: "Ανακαινισμένο διαμέρισμα", place: "Καλαμαριά", price: "€ 235.000", beds: 2, baths: 1, area: 92, tag: "Προς πώληση" },
];

const Field = ({ label, value }) => (
  <div className="flex-1 min-w-0 px-5 py-3 cq-lg:border-r border-[#E5E9E7] last:border-0">
    <p className="text-[12px] text-[#6B7A74]">{label}</p>
    <p className="mt-0.5 font-semibold text-[15px] flex items-center justify-between gap-2">
      <span className="truncate">{value}</span> <FiChevronDown className="shrink-0 text-[#6B7A74]" />
    </p>
  </div>
);

Field.propTypes = { label: PropTypes.string.isRequired, value: PropTypes.string.isRequired };

const ListingCard = ({ l, i }) => (
  <a href="#" className="group bg-white rounded-[18px] overflow-hidden border border-[#E5E9E7] hover:shadow-[0_25px_50px_-30px_rgba(18,38,31,0.45)] transition-shadow">
    <div className="relative aspect-[4/3] overflow-hidden">
      <DemoImage img={img.listings[i]} w={400} className="transition-transform duration-700 group-hover:scale-105" />
      <span className="absolute left-4 top-4 bg-white text-[#12261F] text-[12px] font-semibold px-3 py-1.5 rounded-full">{l.tag}</span>
      <span className="absolute right-4 top-4 w-9 h-9 rounded-full bg-white/90 grid place-items-center">
        <FiHeart size={16} />
      </span>
      <span className="absolute left-4 bottom-4 bg-[#12261F]/85 text-white text-[12px] px-2.5 py-1 rounded-md">
        Ενεργ. κλάση A
      </span>
    </div>
    <div className="p-5">
      <p className="text-[22px] font-semibold text-[#1F6F5C]">{l.price}</p>
      <h3 className="mt-1 text-[16.5px] font-semibold">{l.title}</h3>
      <p className="mt-1.5 text-[14px] text-[#6B7A74] flex items-center gap-1.5">
        <FiMapPin size={14} /> {l.place}
      </p>
      <div className="mt-4 pt-4 border-t border-[#EEF1EF] flex gap-5 text-[13.5px] text-[#3D4C46]">
        <span>{l.beds} υπνοδ.</span>
        <span>{l.baths} μπάνια</span>
        <span className="flex items-center gap-1.5">
          <FiMaximize size={13} /> {l.area} m²
        </span>
      </div>
    </div>
  </a>
);

ListingCard.propTypes = {
  l: PropTypes.shape({
    title: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    beds: PropTypes.number.isRequired,
    baths: PropTypes.number.isRequired,
    area: PropTypes.number.isRequired,
    tag: PropTypes.string.isRequired,
  }).isRequired,
  i: PropTypes.number.isRequired,
};

const RealEstateDemo = () => (
  <DemoRoot font={fonts.geologica} className="bg-white text-[#12261F]">
    <header className="sticky top-0 z-20 bg-white/95 backdrop-blur border-b border-[#E5E9E7]">
      <div className={`${wrap} h-[76px] flex items-center justify-between`}>
        <a href="#" className="flex items-center gap-2.5">
          <span className="w-10 h-10 rounded-full bg-[#1F6F5C] text-white grid place-items-center">
            <FiHome size={18} />
          </span>
          <span className="leading-none">
            <span className="block text-[21px] font-bold tracking-tight">ammos</span>
            <span className="block text-[11px] tracking-[0.3em] uppercase text-[#6B7A74]">estates</span>
          </span>
        </a>
        <nav className="hidden cq-lg:flex items-center gap-8 text-[15px] text-[#3D4C46]">
          {["Αγορά", "Ενοικίαση", "Νεόδμητα", "Εκτίμηση ακινήτου", "Η εταιρεία"].map((l) => (
            <a key={l} href="#" className="hover:text-[#1F6F5C] transition-colors">
              {l}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-5">
          <span className="hidden cq-lg:flex items-center gap-2 text-[14px] font-medium">
            <FiPhone className="text-[#1F6F5C]" /> 2310 000 000
          </span>
          <a href="#" className="hidden cq-sm:inline-flex bg-[#12261F] text-white text-[14px] font-medium px-5 py-3 rounded-full">
            Καταχωρήστε ακίνητο
          </a>
          <FiMenu size={24} className="cq-lg:hidden" aria-hidden="true" />
        </div>
      </div>
    </header>

    <section className={`${wrap} pt-6`}>
      <div className="relative rounded-[28px] overflow-hidden min-h-[580px] flex flex-col justify-end">
        <div className="absolute inset-0">
          <DemoImage img={img.hero} w={1240} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12261F]/85 via-[#12261F]/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#12261F]/70 via-[#12261F]/25 to-transparent" />
        </div>
        <div className="relative px-6 cq-md:px-12 pb-8 cq-md:pb-12 pt-32">
          <p className="text-white/85 text-[14px] font-medium flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#7BE0B8]" /> 286 ακίνητα σε Χαλκιδική & Θεσσαλονίκη
          </p>
          <h1 className="mt-4 text-white text-[40px] cq-md:text-[60px] font-semibold leading-[1.02] tracking-[-0.02em] max-w-[780px]">
            Βρείτε το σπίτι που σας ταιριάζει, δίπλα στη θάλασσα ή στην πόλη.
          </h1>

          <div className="mt-8 bg-white rounded-[20px] p-2 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)]">
            <div className="flex gap-1 p-1">
              {["Αγορά", "Ενοικίαση", "Νεόδμητα"].map((t, i) => (
                <span key={t} className={`px-4 py-2 rounded-full text-[14px] font-medium ${i === 0 ? "bg-[#12261F] text-white" : "text-[#3D4C46]"}`}>
                  {t}
                </span>
              ))}
            </div>
            <div className="flex flex-col cq-lg:flex-row cq-lg:items-center">
              <Field label="Περιοχή" value="Χαλκιδική" />
              <Field label="Τύπος ακινήτου" value="Βίλα / Μονοκατοικία" />
              <Field label="Τιμή" value="Έως € 500.000" />
              <Field label="Υπνοδωμάτια" value="3+" />
              <a href="#" className="m-2 inline-flex items-center justify-center gap-2 bg-[#1F6F5C] text-white font-semibold px-7 py-4 rounded-[14px]">
                <FiSearch /> Αναζήτηση
              </a>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Δίπλα στη θάλασσα", "Με πισίνα", "Νεόδμητα", "Με θέα"].map((c) => (
              <span key={c} className="bg-white/15 backdrop-blur text-white text-[13px] px-3.5 py-1.5 rounded-full border border-white/25">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className={`${wrap} py-16`}>
      <div className="flex flex-col cq-md:flex-row cq-md:items-end justify-between gap-5">
        <div>
          <p className="text-[#1F6F5C] font-semibold text-[14px]">Επιλεγμένα ακίνητα</p>
          <h2 className="mt-2 text-[32px] cq-md:text-[40px] font-semibold tracking-[-0.02em]">Νέες καταχωρήσεις αυτής της εβδομάδας</h2>
        </div>
        <div className="flex gap-2 text-[14px]">
          {["Όλα", "Βίλες", "Διαμερίσματα", "Μονοκατοικίες"].map((t, i) => (
            <span key={t} className={`px-4 py-2 rounded-full border ${i === 0 ? "bg-[#12261F] text-white border-[#12261F]" : "border-[#D5DCD9]"}`}>
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-10 grid cq-md:grid-cols-2 cq-lg:grid-cols-3 gap-6">
        {listings.slice(0, 3).map((l, i) => (
          <ListingCard key={l.title} l={l} i={i} />
        ))}
        <Full>
          {listings.slice(3).map((l, i) => (
            <ListingCard key={l.title} l={l} i={i + 3} />
          ))}
        </Full>
      </div>
    </section>

    <Full>
      <section className="bg-[#F3EFE6]">
        <div className={`${wrap} py-20 grid cq-lg:grid-cols-[1fr,1.2fr] gap-12 items-center`}>
          <div>
            <p className="text-[#1F6F5C] font-semibold text-[14px]">Αναζήτηση στον χάρτη</p>
            <h2 className="mt-2 text-[32px] cq-md:text-[40px] font-semibold tracking-[-0.02em] leading-[1.1]">
              Δείτε τι διατίθεται στη γειτονιά που θέλετε.
            </h2>
            <ul className="mt-8 space-y-3">
              {[["Θεσσαλονίκη", "142 ακίνητα"], ["Κασσάνδρα", "64 ακίνητα"], ["Σιθωνία", "47 ακίνητα"], ["Περαία & Επανομή", "33 ακίνητα"]].map(([a, n]) => (
                <li key={a} className="flex items-center justify-between bg-white rounded-[14px] px-5 py-4">
                  <span className="font-medium flex items-center gap-2">
                    <FiMapPin className="text-[#1F6F5C]" /> {a}
                  </span>
                  <span className="text-[14px] text-[#6B7A74]">{n}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[420px] rounded-[24px] overflow-hidden bg-[#DCE7E1]">
            <div className="absolute inset-0 opacity-70" style={{ backgroundImage: "linear-gradient(#c7d6ce 1px, transparent 1px), linear-gradient(90deg, #c7d6ce 1px, transparent 1px)", backgroundSize: "44px 44px" }} />
            <div className="absolute -right-16 -bottom-16 w-[60%] h-[70%] rounded-full bg-[#A9CFE0]" />
            <div className="absolute right-[18%] bottom-[-10%] w-[22%] h-[58%] rounded-[40%] bg-[#DCE7E1] rotate-12" />
            <div className="absolute left-0 right-0 top-[38%] h-3 bg-white/80 -rotate-3" />
            {[
              ["€ 465k", "left-[22%] top-[22%]", true],
              ["€ 390k", "left-[48%] top-[48%]", false],
              ["€ 610k", "left-[64%] top-[24%]", false],
              ["€ 235k", "left-[14%] top-[62%]", false],
            ].map(([p, pos, active]) => (
              <span key={p} className={`absolute ${pos} text-[13px] font-semibold px-3 py-1.5 rounded-full shadow-md ${active ? "bg-[#12261F] text-white scale-110" : "bg-white"}`}>
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className={`${wrap} py-20`}>
        <div className="grid cq-lg:grid-cols-2 gap-6">
          <div className="rounded-[24px] bg-[#12261F] text-white p-8 cq-md:p-12">
            <p className="text-[#7BE0B8] font-semibold text-[14px]">Για ιδιοκτήτες</p>
            <h2 className="mt-3 text-[30px] cq-md:text-[38px] font-semibold leading-[1.1] tracking-[-0.02em]">
              Δωρεάν εκτίμηση του ακινήτου σας σε 48 ώρες.
            </h2>
            <p className="mt-4 text-white/70 text-[16px] leading-[1.7]">
              Επαγγελματική φωτογράφιση, προβολή σε 12 πλατφόρμες και ένας σύμβουλος μέχρι το συμβόλαιο.
            </p>
            <a href="#" className="mt-8 inline-flex items-center gap-2 bg-white text-[#12261F] font-semibold px-7 py-4 rounded-full">
              Ζητήστε εκτίμηση <FiArrowRight />
            </a>
          </div>
          <div className="rounded-[24px] border border-[#E5E9E7] p-8 cq-md:p-12 grid grid-cols-2 gap-8 content-center">
            {[["15+", "χρόνια στην αγορά"], ["1.200+", "επιτυχημένες πωλήσεις"], ["38", "μέρες μέσος χρόνος πώλησης"], ["4,9/5", "αξιολόγηση πελατών"]].map(([v, l]) => (
              <div key={l}>
                <p className="text-[38px] font-semibold text-[#1F6F5C] tracking-[-0.02em]">{v}</p>
                <p className="text-[14px] text-[#6B7A74] mt-1">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#0E1E18] text-white/65 text-[14px]">
        <div className={`${wrap} py-14 grid cq-md:grid-cols-4 gap-8`}>
          <div>
            <p className="text-white text-[22px] font-bold">ammos estates</p>
            <p className="mt-3 leading-[1.7]">Μεσιτικό γραφείο για Θεσσαλονίκη και Χαλκιδική.</p>
          </div>
          {[
            ["Ακίνητα", ["Προς πώληση", "Προς ενοικίαση", "Νεόδμητα", "Επαγγελματικά"]],
            ["Υπηρεσίες", ["Εκτίμηση", "Διαχείριση ακινήτων", "Νομική υποστήριξη", "Golden Visa"]],
            ["Επικοινωνία", ["Εθνικής Αμύνης 00, Θεσσαλονίκη", "2310 000 000", "info@ammos-estates.gr"]],
          ].map(([t, items]) => (
            <div key={t}>
              <p className="text-white font-semibold mb-3">{t}</p>
              <ul className="space-y-2">
                {items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={`${wrap} pb-8 flex flex-col cq-md:flex-row justify-between gap-2 text-[12px]`}>
          <p>© 2026 Ammos Estates · Αρ. Μητρώου 0000</p>
          <DemoDisclaimer />
        </div>
      </footer>
    </Full>
  </DemoRoot>
);

export default RealEstateDemo;
