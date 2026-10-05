import PropTypes from "prop-types";
import {
  FiArrowRight,
  FiHeart,
  FiMenu,
  FiRefreshCw,
  FiSearch,
  FiShield,
  FiShoppingBag,
  FiTruck,
  FiUser,
} from "react-icons/fi";

import { DemoDisclaimer, DemoImage, DemoRoot, Full } from "./kit";
import { fonts } from "./fonts";
import { images } from "./images";

// Ostria Home — fictional homeware & handmade ceramics store (WooCommerce-style).
const img = images.ecommerce;
const wrap = "mx-auto w-full max-w-[1240px] px-5 cq-md:px-10";

const categories = [
  ["Κεραμικά", "64 προϊόντα", img.categories.ceramics],
  ["Τραπέζι", "48 προϊόντα", img.categories.table],
  ["Φυτά & γλάστρες", "31 προϊόντα", img.categories.plants],
  ["Διακόσμηση", "57 προϊόντα", img.categories.decor],
];

const products = [
  { name: "Κούπες Αιγαίο, σετ 4", price: "38,00", old: null, badge: "Bestseller", colors: ["#D9C7AE", "#8FA3A8", "#F2EEE6"], rating: 128 },
  { name: "Βάζο Λευκή Άμμος", price: "46,00", old: null, badge: "Νέο", colors: ["#F2EEE6", "#C9B8A0"], rating: 54 },
  { name: "Κεραμικά βάζα Σχοίνος", price: "33,60", old: "42,00", badge: "-20%", colors: ["#7D7C78", "#B9B4AA"], rating: 87 },
  { name: "Πιάτα Θάλασσα, σετ 6", price: "64,00", old: null, badge: null, colors: ["#8FB1C4", "#3E4A55"], rating: 41 },
];

const ProductCard = ({ p, i, showCart }) => (
  <a href="#" className="group">
    <div className="relative aspect-[4/5] rounded-[14px] overflow-hidden bg-[#EFE9DF]">
      <DemoImage img={img.products[i]} w={300} className="transition-transform duration-700 group-hover:scale-105" />
      {p.badge && (
        <span className={`absolute left-3 top-3 text-[12px] font-bold px-2.5 py-1 rounded-full ${p.badge.startsWith("-") ? "bg-[#B5643C] text-white" : "bg-white text-[#1F1B16]"}`}>
          {p.badge}
        </span>
      )}
      <span className="absolute right-3 top-3 w-9 h-9 rounded-full bg-white/90 grid place-items-center">
        <FiHeart size={16} />
      </span>
      <span className={`absolute left-3 right-3 bottom-3 bg-[#1F1B16] text-white text-[14px] font-semibold rounded-full py-3 flex items-center justify-center gap-2 transition-all ${showCart ? "opacity-100" : "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"}`}>
        <FiShoppingBag size={15} /> Προσθήκη στο καλάθι
      </span>
    </div>
    <div className="mt-3 flex gap-1.5">
      {p.colors.map((c) => (
        <span key={c} className="w-3.5 h-3.5 rounded-full border border-black/10" style={{ background: c }} />
      ))}
    </div>
    <h3 className="mt-2 text-[16px] font-semibold">{p.name}</h3>
    <p className="mt-1 text-[13px] text-[#8A7F72]">
      <span className="text-[#E0A33E]">★★★★★</span> ({p.rating})
    </p>
    <p className="mt-1.5 text-[17px] font-bold">
      {p.price}€ {p.old && <span className="ml-1.5 text-[14px] font-medium text-[#8A7F72] line-through">{p.old}€</span>}
    </p>
  </a>
);

ProductCard.propTypes = {
  p: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    old: PropTypes.string,
    badge: PropTypes.string,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
  i: PropTypes.number.isRequired,
  showCart: PropTypes.bool,
};

const EcommerceDemo = () => (
  <DemoRoot font={fonts.sofia} className="bg-[#FAF7F2] text-[#1F1B16]">
    <div className="bg-[#1F1B16] text-[#FAF7F2] text-[13px] text-center py-2.5 px-4">
      Δωρεάν αποστολή για αγορές άνω των 50€ · Επιστροφές εντός 30 ημερών
    </div>

    <header className="sticky top-0 z-20 bg-[#FAF7F2]/95 backdrop-blur border-b border-[#E8E0D3]">
      <div className={`${wrap} h-[76px] flex items-center gap-6`}>
        <FiMenu size={22} className="cq-lg:hidden" aria-hidden="true" />
        <a href="#" className="leading-none">
          <span className="text-[26px] font-extrabold tracking-[0.14em]">OSTRIA</span>
          <span className="block text-[10px] tracking-[0.5em] uppercase text-[#B5643C] mt-0.5">home</span>
        </a>
        <div className="hidden cq-md:flex flex-1 max-w-[460px] mx-auto items-center gap-3 bg-white border border-[#E8E0D3] rounded-full px-5 h-12 text-[14.5px] text-[#8A7F72]">
          <FiSearch /> Αναζητήστε κούπες, βάζα, λινά…
        </div>
        <div className="ml-auto flex items-center gap-5">
          <FiUser size={21} className="hidden cq-sm:block" />
          <FiHeart size={21} className="hidden cq-sm:block" />
          <span className="relative">
            <FiShoppingBag size={22} />
            <span className="absolute -right-2 -top-2 w-5 h-5 rounded-full bg-[#B5643C] text-white text-[11px] font-bold grid place-items-center">
              2
            </span>
          </span>
          <span className="hidden cq-lg:block text-[15px] font-semibold">84,00€</span>
        </div>
      </div>
      <nav className={`${wrap} hidden cq-lg:flex h-12 items-center gap-9 text-[14.5px] font-medium`}>
        {["Νέες αφίξεις", "Κεραμικά", "Τραπέζι", "Υφάσματα", "Διακόσμηση", "Φυτά", "Δώρα"].map((l) => (
          <a key={l} href="#" className="hover:text-[#B5643C] transition-colors">
            {l}
          </a>
        ))}
        <a href="#" className="text-[#B5643C] font-bold">
          Προσφορές
        </a>
      </nav>
    </header>

    <section className={`${wrap} pt-6`}>
      <div className="relative h-[520px] cq-md:h-[560px] rounded-[24px] overflow-hidden">
        <DemoImage img={img.hero} w={1240} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F1B16]/80 via-[#1F1B16]/45 to-[#1F1B16]/5" />
        <div className="absolute inset-0 flex items-center">
          <div className="px-7 cq-md:px-14 max-w-[600px] text-white">
            <span className="inline-block bg-white/20 backdrop-blur px-3.5 py-1.5 rounded-full text-[13px] font-semibold">
              Νέα συλλογή · Καλοκαίρι 2026
            </span>
            <h1 className="mt-5 text-[44px] cq-md:text-[64px] font-extrabold leading-[0.98] tracking-[-0.02em]">
              Χειροποίητα κομμάτια για ένα σπίτι με φως.
            </h1>
            <p className="mt-5 text-[17px] text-white/85 leading-[1.6] max-w-[440px]">
              Κεραμικά, λινά και αντικείμενα από Έλληνες τεχνίτες — φτιαγμένα σε μικρές παρτίδες.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#" className="bg-white text-[#1F1B16] font-bold px-7 py-4 rounded-full">
                Αγορά τώρα
              </a>
              <a href="#" className="border border-white/60 font-semibold px-7 py-4 rounded-full">
                Δείτε τη συλλογή
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className={`${wrap} py-8 grid grid-cols-1 cq-md:grid-cols-3 gap-4`}>
      {[
        [FiTruck, "Αποστολή σε 1–3 ημέρες", "Δωρεάν άνω των 50€"],
        [FiRefreshCw, "Επιστροφές 30 ημερών", "Χωρίς ερωτήσεις"],
        [FiShield, "Ασφαλείς πληρωμές", "Κάρτα, πορτοφόλια & αντικαταβολή"],
      ].map(([Icon, title, text]) => (
        <div key={title} className="flex items-center gap-4 bg-white rounded-[16px] px-5 py-4 border border-[#EFE9DF]">
          <span className="w-11 h-11 rounded-full bg-[#F4E9E1] text-[#B5643C] grid place-items-center">
            <Icon size={19} />
          </span>
          <span>
            <span className="block font-bold text-[15px]">{title}</span>
            <span className="block text-[13.5px] text-[#8A7F72]">{text}</span>
          </span>
        </div>
      ))}
    </section>

    <section className={`${wrap} pt-10 pb-6`}>
      <div className="flex items-end justify-between">
        <h2 className="text-[30px] cq-md:text-[38px] font-extrabold tracking-[-0.02em]">Δημοφιλή τώρα</h2>
        <a href="#" className="inline-flex items-center gap-2 font-semibold text-[15px]">
          Όλα τα προϊόντα <FiArrowRight />
        </a>
      </div>
      <div className="mt-8 grid grid-cols-2 cq-lg:grid-cols-4 gap-x-5 gap-y-10">
        {products.map((p, i) => (
          <ProductCard key={p.name} p={p} i={i} showCart={i === 1} />
        ))}
      </div>
    </section>

    <Full>
      <section className={`${wrap} py-16`}>
        <h2 className="text-[30px] cq-md:text-[38px] font-extrabold tracking-[-0.02em]">Αγορά ανά κατηγορία</h2>
        <div className="mt-8 grid grid-cols-2 cq-lg:grid-cols-4 gap-5">
          {categories.map(([title, count, image]) => (
            <a key={title} href="#" className="group relative aspect-[3/4] rounded-[18px] overflow-hidden">
              <DemoImage img={image} w={300} className="transition-transform duration-700 group-hover:scale-105" />
              <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <span className="absolute left-5 bottom-5 text-white">
                <span className="block text-[20px] font-bold">{title}</span>
                <span className="block text-[13.5px] text-white/80">{count}</span>
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className={`${wrap} pb-16`}>
        <div className="grid cq-lg:grid-cols-2 rounded-[24px] overflow-hidden bg-[#B5643C] text-white">
          <div className="p-8 cq-md:p-14 flex flex-col justify-center">
            <p className="text-[13px] font-bold tracking-[0.2em] uppercase text-white/75">Μόνο αυτή την εβδομάδα</p>
            <h2 className="mt-4 text-[38px] cq-md:text-[52px] font-extrabold leading-[1] tracking-[-0.02em]">
              -20% σε όλα τα κεραμικά
            </h2>
            <p className="mt-4 text-[16px] text-white/85">
              Με τον κωδικό <span className="font-bold bg-white/20 px-2 py-0.5 rounded">PILOS20</span> στο καλάθι.
            </p>
            <a href="#" className="mt-8 bg-white text-[#1F1B16] font-bold px-7 py-4 rounded-full w-fit">
              Ψωνίστε την προσφορά
            </a>
          </div>
          <div className="h-[320px] cq-lg:h-auto">
            <DemoImage img={img.promo} w={620} />
          </div>
        </div>
      </section>

      <section className="bg-white border-y border-[#EFE9DF]">
        <div className={`${wrap} py-16 grid cq-lg:grid-cols-3 gap-6`}>
          {[
            ["«Οι κούπες είναι ακόμα πιο όμορφες από κοντά. Ήρθαν σε δύο μέρες, τέλεια συσκευασμένες.»", "Δέσποινα Κ."],
            ["«Βρήκα το δώρο που έψαχνα και το έστειλαν κατευθείαν με κάρτα ευχών.»", "Παύλος Μ."],
            ["«Ποιότητα που φαίνεται. Τρίτη παραγγελία και σίγουρα όχι η τελευταία.»", "Ιωάννα Τ."],
          ].map(([q, n]) => (
            <figure key={n} className="rounded-[18px] bg-[#FAF7F2] p-7">
              <span className="text-[#E0A33E] tracking-[2px]">★★★★★</span>
              <blockquote className="mt-3 text-[16px] leading-[1.6]">{q}</blockquote>
              <figcaption className="mt-4 text-[14px] font-bold">
                {n} <span className="font-medium text-[#8A7F72]">· Επιβεβαιωμένη αγορά</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className={`${wrap} py-16 text-center`}>
        <h2 className="text-[28px] cq-md:text-[34px] font-extrabold">Γίνετε μέλος της κοινότητας Ostria</h2>
        <p className="mt-2 text-[16px] text-[#8A7F72]">10% έκπτωση στην πρώτη αγορά και πρώτοι στις νέες συλλογές.</p>
        <div className="mt-6 mx-auto max-w-[480px] flex bg-white border border-[#E8E0D3] rounded-full p-1.5">
          <span className="flex-1 text-left px-4 self-center text-[15px] text-[#8A7F72]">Το email σας</span>
          <span className="bg-[#1F1B16] text-white font-bold px-6 py-3 rounded-full text-[14.5px]">Εγγραφή</span>
        </div>
      </section>

      <footer className="bg-[#1F1B16] text-white/65 text-[14px]">
        <div className={`${wrap} py-14 grid cq-md:grid-cols-4 gap-8`}>
          <div>
            <p className="text-white text-[22px] font-extrabold tracking-[0.14em]">OSTRIA</p>
            <p className="mt-3 leading-[1.7]">Χειροποίητα αντικείμενα για το σπίτι, από Έλληνες δημιουργούς.</p>
          </div>
          {[
            ["Κατάστημα", ["Νέες αφίξεις", "Κεραμικά", "Τραπέζι", "Προσφορές"]],
            ["Εξυπηρέτηση", ["Αποστολές", "Επιστροφές", "Συχνές ερωτήσεις", "Επικοινωνία"]],
            ["Ostria", ["Η ιστορία μας", "Οι δημιουργοί", "Χονδρική", "Journal"]],
          ].map(([t, items]) => (
            <div key={t}>
              <p className="text-white font-bold mb-3">{t}</p>
              <ul className="space-y-2">
                {items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={`${wrap} pb-8 flex flex-col cq-md:flex-row justify-between gap-2 text-[12px]`}>
          <p>© 2026 Ostria Home</p>
          <DemoDisclaimer />
        </div>
      </footer>
    </Full>
  </DemoRoot>
);

export default EcommerceDemo;
