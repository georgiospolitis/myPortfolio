import { FiCalendar, FiClock, FiMapPin, FiMenu, FiPhone, FiUsers } from "react-icons/fi";

import { DemoDisclaimer, DemoImage, DemoRoot, Full } from "./kit";
import { fonts } from "./fonts";
import { images } from "./images";

// ΨΗΝΩ & ΤΡΩΩ — fictional wood-fired restaurant (content carried over from the
// earlier standalone sample). Dark, warm and atmospheric.
const img = images.hospitality;
const wrap = "mx-auto w-full max-w-[1180px] px-5 cq-md:px-10";
const serif = { fontFamily: fonts.notoDisplay };

const menu = [
  ["Καψαλισμένο Χταπόδι", "18", "Καπνιστή πάπρικα, σπαστή πατάτα, σάλτσα βέρντε"],
  ["Μπουράτα στον Ξυλόφουρνο", "14", "Παραδοσιακή ντομάτα, λάδι βασιλικού, τρίμμα προζυμιού"],
  ["Ribeye Ξηρής Ωρίμανσης", "42", "Βούτυρο μεδουλίου, καψαλισμένο ασκαλώνιο, σάλτσα κρασιού"],
  ["Ολόκληρο Ψητό Λαβράκι", "36", "Εσπεριδοειδή, φινόκιο, ελαιόλαδο, θαλασσινό αλάτι"],
  ["Ψητό Καρότο & Φάρο", "17", "Χτυπημένη φέτα, μέλι με τσίλι, ψημένοι σπόροι"],
  ["Τάρτα Μαύρης Σοκολάτας", "12", "Κρέμα εσπρέσο, θαλασσινό αλάτι, ελαιόλαδο"],
];

const signature = [
  ["Το πιάτο της ημέρας", "Ό,τι έφερε σήμερα η αγορά, στη φωτιά"],
  ["Λαχανικά από τη φάρμα", "Εποχικά, ψημένα στα κάρβουνα"],
  ["Τραπέζι για μοίρασμα", "Πολλά πιάτα στη μέση, όπως παλιά"],
];

const HospitalityDemo = () => (
  <DemoRoot font={fonts.inter} className="bg-[#15110E] text-[#F3EBDD]">
    <section className="relative min-h-[720px] flex flex-col">
      <div className="absolute inset-0">
        <DemoImage img={img.hero} w={1400} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#15110E]/70 via-[#15110E]/45 to-[#15110E]" />
      </div>

      <header className="relative z-10">
        <div className={`${wrap} h-[88px] flex items-center justify-between`}>
          <a href="#" className="text-[22px] tracking-[0.08em]" style={serif}>
            ΨΗΝΩ <span className="text-[#D4914A]">&</span> ΤΡΩΩ
          </a>
          <nav className="hidden cq-lg:flex items-center gap-9 text-[14.5px] text-[#F3EBDD]/80">
            {["Αρχική", "Η κουζίνα", "Μενού", "Εκδηλώσεις", "Επικοινωνία"].map((l) => (
              <a key={l} href="#" className="hover:text-[#D4914A] transition-colors">
                {l}
              </a>
            ))}
          </nav>
          <a href="#" className="hidden cq-sm:inline-flex bg-[#D4914A] text-[#15110E] font-semibold text-[14px] px-6 py-3 rounded-full">
            Κράτηση τραπεζιού
          </a>
          <FiMenu size={24} className="cq-sm:hidden" aria-hidden="true" />
        </div>
      </header>

      <div className={`${wrap} relative z-10 flex-1 flex flex-col items-center justify-center text-center py-16`}>
        <p className="text-[12.5px] tracking-[0.32em] uppercase text-[#D4914A]">Κουζίνα με ξυλόφουρνο & τραπέζι</p>
        <h1 className="mt-6 text-[46px] cq-md:text-[72px] cq-lg:text-[88px] leading-[1.02] max-w-[900px]" style={serif}>
          Αυθεντικές γεύσεις, <em>αξέχαστη</em> ατμόσφαιρα.
        </h1>
        <p className="mt-6 text-[17px] leading-[1.7] text-[#F3EBDD]/75 max-w-[560px]">
          Ένα σύγχρονο συνοικιακό εστιατόριο χτισμένο γύρω από τη φωτιά, τα εποχικά υλικά και την
          ειλικρινή φιλοξενία.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a href="#" className="bg-[#D4914A] text-[#15110E] font-semibold px-7 py-4 rounded-full">
            Κράτηση τραπεζιού
          </a>
          <a href="#" className="border border-[#F3EBDD]/40 px-7 py-4 rounded-full hover:bg-[#F3EBDD]/10 transition-colors">
            Δείτε το μενού
          </a>
        </div>
      </div>

      <div className="relative z-10 border-t border-[#F3EBDD]/15">
        <div className={`${wrap} py-5 grid cq-md:grid-cols-3 gap-3 text-[14px] text-[#F3EBDD]/75`}>
          <span className="flex items-center gap-2.5">
            <FiMapPin className="text-[#D4914A]" /> Αριστοτέλους, Αλεξάνδρεια
          </span>
          <span className="flex items-center gap-2.5 cq-md:justify-center">
            <FiClock className="text-[#D4914A]" /> Ανοιχτά σήμερα 13:00 – 00:00
          </span>
          <span className="flex items-center gap-2.5 cq-md:justify-end">
            <FiPhone className="text-[#D4914A]" /> +30 23330 00000
          </span>
        </div>
      </div>
    </section>

    <section className="bg-[#F3EBDD] text-[#2A211B]">
      <div className={`${wrap} py-20 cq-lg:py-28 grid cq-lg:grid-cols-2 gap-14 items-center`}>
        <div className="relative">
          <div className="aspect-[4/3.2] rounded-[22px] overflow-hidden">
            <DemoImage img={img.table} w={580} />
          </div>
          <div className="absolute -bottom-6 right-6 bg-[#15110E] text-[#F3EBDD] rounded-[18px] px-6 py-5">
            <p className="text-[44px] leading-none text-[#D4914A]" style={serif}>
              12
            </p>
            <p className="text-[13px] mt-1 text-[#F3EBDD]/70">χρόνια μαγειρικής σε ξυλόφουρνο</p>
          </div>
        </div>
        <div>
          <p className="text-[12.5px] tracking-[0.32em] uppercase text-[#B06A2C]">Η ιστορία μας</p>
          <h2 className="mt-4 text-[36px] cq-md:text-[48px] leading-[1.08]" style={serif}>
            Μια κουζίνα χτισμένη γύρω από τη φωτιά.
          </h2>
          <p className="mt-6 text-[16px] leading-[1.8] text-[#5A4D42]">
            Κάθε πιάτο ξεκινά με το ίδιο πράγμα: αληθινή φωτιά και αληθινά υλικά. Συνεργαζόμαστε με τοπικές
            φάρμες και μικρούς παραγωγούς και αφήνουμε τον ξυλόφουρνο να κάνει την περισσότερη δουλειά —
            απλή τεχνική, ειλικρινής γεύση.
          </p>
          <ul className="mt-8 grid gap-3 text-[15px]">
            {["Υλικά τοπικής προέλευσης", "Φρέσκο, εποχικό μενού", "Οικογενειακή επιχείρηση από την πρώτη μέρα"].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4914A]" /> {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <Full>
      <section className={`${wrap} py-20 cq-lg:py-28`}>
        <div className="text-center">
          <p className="text-[12.5px] tracking-[0.32em] uppercase text-[#D4914A]">Σπεσιαλιτέ</p>
          <h2 className="mt-4 text-[36px] cq-md:text-[52px]" style={serif}>
            Από τη φωτιά, στο τραπέζι
          </h2>
        </div>
        <div className="mt-14 grid cq-md:grid-cols-3 gap-6">
          {signature.map(([title, text], i) => (
            <div key={title} className="group">
              <div className="aspect-[4/5] rounded-[20px] overflow-hidden">
                <DemoImage img={img.dishes[i]} w={380} className="transition-transform duration-700 group-hover:scale-105" />
              </div>
              <h3 className="mt-5 text-[24px]" style={serif}>
                {title}
              </h3>
              <p className="text-[14.5px] text-[#F3EBDD]/60 mt-1">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-[#F3EBDD]/10 bg-[#1C1612]">
        <div className={`${wrap} py-20 cq-lg:py-24`}>
          <div className="flex flex-col cq-md:flex-row cq-md:items-end justify-between gap-4">
            <h2 className="text-[36px] cq-md:text-[48px]" style={serif}>
              Μενού
            </h2>
            <p className="text-[14px] text-[#F3EBDD]/60">Ανανεώνεται κάθε εποχή · Τιμές σε ευρώ</p>
          </div>
          <div className="mt-12 grid cq-md:grid-cols-2 gap-x-16 gap-y-9">
            {menu.map(([name, price, desc]) => (
              <div key={name}>
                <div className="flex items-baseline gap-4">
                  <h3 className="text-[21px]" style={serif}>
                    {name}
                  </h3>
                  <span className="flex-1 border-b border-dotted border-[#F3EBDD]/25" />
                  <span className="text-[#D4914A] text-[19px]" style={serif}>
                    {price}
                  </span>
                </div>
                <p className="mt-1.5 text-[14px] text-[#F3EBDD]/55">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative h-[420px] flex items-center">
        <div className="absolute inset-0">
          <DemoImage img={img.terrace} w={1400} />
          <div className="absolute inset-0 bg-[#15110E]/75" />
        </div>
        <div className={`${wrap} relative text-center`}>
          <p className="text-[#D4914A] tracking-[4px]">★★★★★</p>
          <blockquote className="mt-4 text-[28px] cq-md:text-[40px] leading-[1.25] max-w-[820px] mx-auto" style={serif}>
            «Το καλύτερο χταπόδι που έχουμε φάει — και η πιο ζεστή υποδοχή.»
          </blockquote>
          <p className="mt-4 text-[14px] text-[#F3EBDD]/70">Κατερίνα & Νίκος, επισκέπτες</p>
        </div>
      </section>

      <section className="bg-[#F3EBDD] text-[#2A211B]">
        <div className={`${wrap} py-20 cq-lg:py-24 grid cq-lg:grid-cols-[1.1fr,1fr] gap-12`}>
          <div className="bg-white rounded-[24px] p-7 cq-md:p-10 shadow-[0_30px_60px_-40px_rgba(42,33,27,0.5)]">
            <h2 className="text-[32px] cq-md:text-[40px]" style={serif}>
              Κάντε κράτηση
            </h2>
            <p className="mt-2 text-[15px] text-[#5A4D42]">Για παρέες 8 ατόμων και άνω, καλέστε μας απευθείας.</p>
            <div className="mt-8 grid cq-sm:grid-cols-3 gap-4">
              {[
                [FiCalendar, "Ημερομηνία", "Παρ 16 Οκτ"],
                [FiClock, "Ώρα", "21:00"],
                [FiUsers, "Άτομα", "4 άτομα"],
              ].map(([Icon, label, value]) => (
                <div key={label} className="border border-[#E3D8C6] rounded-xl px-4 py-3">
                  <p className="text-[12px] text-[#8A7B6C] flex items-center gap-1.5">
                    <Icon /> {label}
                  </p>
                  <p className="mt-1 font-semibold text-[15px]">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {["19:30", "20:00", "20:30", "21:00", "21:30", "22:00"].map((t) => (
                <span key={t} className={`px-4 py-2 rounded-full text-[14px] border ${t === "21:00" ? "bg-[#15110E] text-[#F3EBDD] border-[#15110E]" : "border-[#E3D8C6]"}`}>
                  {t}
                </span>
              ))}
            </div>
            <a href="#" className="mt-8 block text-center bg-[#D4914A] text-[#15110E] font-semibold py-4 rounded-full">
              Επιβεβαίωση κράτησης
            </a>
          </div>
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-[26px]" style={serif}>
                Ώρες λειτουργίας
              </h3>
              <div className="mt-4 divide-y divide-[#E3D8C6] text-[15px]">
                {[["Δευτέρα – Πέμπτη", "17:00 – 23:00"], ["Παρασκευή – Σάββατο", "13:00 – 00:00"], ["Κυριακή", "13:00 – 22:00"]].map(([d, h]) => (
                  <p key={d} className="flex justify-between py-3">
                    <span>{d}</span>
                    <span className="text-[#5A4D42]">{h}</span>
                  </p>
                ))}
              </div>
            </div>
            <div className="relative flex-1 min-h-[200px] rounded-[20px] overflow-hidden bg-[#E6DCCB]">
              <div className="absolute inset-0 opacity-60" style={{ backgroundImage: "linear-gradient(#d6c8b2 1px, transparent 1px), linear-gradient(90deg, #d6c8b2 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
              <div className="absolute left-[-10%] right-[-10%] top-[55%] h-5 bg-[#F3EBDD] -rotate-6" />
              <div className="absolute top-[-10%] bottom-[-10%] left-[38%] w-4 bg-[#F3EBDD] rotate-12" />
              <span className="absolute left-[44%] top-[40%] flex flex-col items-center">
                <span className="bg-[#15110E] text-[#F3EBDD] text-[12px] px-3 py-1.5 rounded-full whitespace-nowrap">ΨΗΝΩ & ΤΡΩΩ</span>
                <FiMapPin className="text-[#B06A2C] mt-1" size={26} />
              </span>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#15110E]">
        <div className={`${wrap} py-10 flex flex-col cq-md:flex-row justify-between gap-3 text-[13px] text-[#F3EBDD]/60`}>
          <p style={serif} className="text-[18px] text-[#F3EBDD]">
            ΨΗΝΩ & ΤΡΩΩ
          </p>
          <DemoDisclaimer />
        </div>
      </footer>
    </Full>
  </DemoRoot>
);

export default HospitalityDemo;
