import { FiArrowRight, FiCalendar, FiClock, FiInstagram, FiMapPin, FiMenu, FiStar } from "react-icons/fi";

import { DemoDisclaimer, DemoImage, DemoRoot, Full } from "./kit";
import { fonts } from "./fonts";
import { images } from "./images";

// Σάλβια Hair & Beauty — fictional hair & beauty studio with a barber corner.
// Blush, deep cocoa and sage; soft serif italics.
const img = images.beauty;
const wrap = "mx-auto w-full max-w-[1180px] px-5 cq-md:px-10";
const serif = { fontFamily: fonts.literata };

const services = [
  { title: "Κομμωτική", text: "Κούρεμα, χτένισμα, θεραπείες μαλλιών", from: "25", image: img.hair },
  { title: "Χρώμα & Balayage", text: "Φυσικές αποχρώσεις με σεβασμό στην τρίχα", from: "60", image: img.salon },
  { title: "Περιποίηση προσώπου", text: "Καθαρισμός, ενυδάτωση, anti-age", from: "45", image: img.skin },
  { title: "Barber corner", text: "Fade, γένια, ξύρισμα με ζεστή πετσέτα", from: "18", image: img.barber },
];

const prices = [
  ["Γυναικείο κούρεμα & styling", "35"],
  ["Ανδρικό κούρεμα", "18"],
  ["Βαφή ρίζας", "40"],
  ["Balayage", "από 90"],
  ["Θεραπεία κερατίνης", "από 80"],
  ["Καθαρισμός προσώπου", "45"],
  ["Μανικιούρ ημιμόνιμο", "22"],
  ["Head spa ritual", "38"],
];

const team = [
  ["Μυρτώ", "Ιδρύτρια · Color specialist"],
  ["Ναταλί", "Αισθητικός"],
  ["Άρης", "Barber"],
];

const BeautyWellnessDemo = () => (
  <DemoRoot font={fonts.inter} className="bg-[#F6EFE9] text-[#2F2622]">
    <div className="bg-[#7C8B6F] text-white text-[13px] text-center py-2.5 px-4">
      Νέο: Head spa ritual — <strong className="font-semibold">15% έκπτωση</strong> στην πρώτη σας επίσκεψη
    </div>

    <header className="sticky top-0 z-20 bg-[#F6EFE9]/90 backdrop-blur">
      <div className={`${wrap} h-[80px] flex items-center justify-between`}>
        <a href="#" className="leading-none">
          <span className="text-[30px] italic" style={serif}>
            Σάλβια
          </span>
          <span className="block text-[10.5px] tracking-[0.3em] uppercase text-[#8C7A70] mt-0.5">hair & beauty</span>
        </a>
        <nav className="hidden cq-lg:flex items-center gap-8 text-[14.5px] text-[#5B4A42]">
          {["Υπηρεσίες", "Τιμοκατάλογος", "Η ομάδα", "Gallery", "Επικοινωνία"].map((l) => (
            <a key={l} href="#" className="hover:text-[#C9877A] transition-colors">
              {l}
            </a>
          ))}
        </nav>
        <a href="#" className="hidden cq-sm:inline-flex bg-[#2F2622] text-[#F6EFE9] text-[14px] font-medium px-6 py-3 rounded-full">
          Κλείστε ραντεβού
        </a>
        <FiMenu size={24} className="cq-sm:hidden" aria-hidden="true" />
      </div>
    </header>

    <section className={`${wrap} grid cq-lg:grid-cols-[1fr,1fr] gap-12 items-center pt-8 pb-16 cq-lg:pb-20`}>
      <div>
        <p className="inline-flex items-center gap-2 text-[13px] text-[#7C8B6F] font-medium">
          <FiStar className="fill-current" /> 4,9 · 380 κριτικές πελατών
        </p>
        <h1 className="mt-5 text-[46px] cq-md:text-[64px] cq-lg:text-[72px] leading-[1.02] tracking-[-0.02em]" style={serif}>
          Ομορφιά που <em className="text-[#C9877A]">σας μοιάζει.</em>
        </h1>
        <p className="mt-6 text-[17px] leading-[1.75] text-[#5B4A42] max-w-[470px]">
          Κομμωτική, χρώμα, περιποίηση προσώπου και barber corner σε έναν φωτεινό, ήρεμο χώρο στο κέντρο
          της Θεσσαλονίκης.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#" className="inline-flex items-center gap-2 bg-[#2F2622] text-[#F6EFE9] font-medium px-7 py-4 rounded-full">
            Κλείστε ραντεβού online <FiArrowRight />
          </a>
          <a href="#" className="border border-[#2F2622]/25 px-7 py-4 rounded-full font-medium">
            Τιμοκατάλογος
          </a>
        </div>
        <div className="mt-10 bg-white rounded-[20px] p-5 shadow-[0_20px_50px_-30px_rgba(47,38,34,0.45)] max-w-[460px]">
          <p className="text-[13px] text-[#8C7A70] flex items-center gap-2">
            <FiCalendar /> Επόμενη διαθέσιμη ώρα
          </p>
          <div className="mt-3 flex items-center justify-between gap-3">
            <p className="text-[18px] font-semibold">Σήμερα, 17:30</p>
            <div className="flex gap-2">
              {["Κούρεμα", "Χρώμα", "Νύχια"].map((s, i) => (
                <span key={s} className={`text-[12.5px] px-3 py-1.5 rounded-full ${i === 0 ? "bg-[#C9877A] text-white" : "bg-[#F6EFE9]"}`}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-[460px] cq-md:h-[580px]">
        <div className="absolute right-0 top-0 w-[78%] h-[92%] rounded-t-full rounded-b-[32px] overflow-hidden">
          <DemoImage img={img.hero} w={480} />
        </div>
        <div className="absolute left-0 bottom-0 w-[42%] aspect-square rounded-full overflow-hidden border-[8px] border-[#F6EFE9]">
          <DemoImage img={img.oil} w={240} />
        </div>
        <span className="absolute left-[8%] top-[18%] bg-white rounded-full px-4 py-2.5 text-[13px] font-medium shadow-[0_15px_40px_-20px_rgba(47,38,34,0.5)]">
          ✿ Βιολογικά προϊόντα
        </span>
      </div>
    </section>

    <section className="bg-white">
      <div className={`${wrap} py-20 cq-lg:py-24`}>
        <div className="flex flex-col cq-md:flex-row cq-md:items-end justify-between gap-4">
          <h2 className="text-[36px] cq-md:text-[48px] leading-[1.1]" style={serif}>
            Οι υπηρεσίες μας
          </h2>
          <a href="#" className="inline-flex items-center gap-2 text-[15px] font-medium text-[#C9877A]">
            Όλες οι υπηρεσίες <FiArrowRight />
          </a>
        </div>
        <div className="mt-12 grid cq-sm:grid-cols-2 cq-lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <a key={s.title} href="#" className="group">
              <div className="aspect-[3/4] rounded-[22px] overflow-hidden">
                <DemoImage img={s.image} w={280} className="transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <h3 className="text-[21px]" style={serif}>
                  {s.title}
                </h3>
                <span className="text-[13px] text-[#8C7A70]">από {s.from}€</span>
              </div>
              <p className="text-[14px] text-[#8C7A70] mt-1">{s.text}</p>
            </a>
          ))}
        </div>
      </div>
    </section>

    <Full>
      <section className={`${wrap} py-20 cq-lg:py-24 grid cq-lg:grid-cols-[1fr,1.3fr] gap-14`}>
        <div>
          <h2 className="text-[36px] cq-md:text-[48px] leading-[1.1]" style={serif}>
            Τιμοκατάλογος
          </h2>
          <p className="mt-4 text-[16px] leading-[1.7] text-[#5B4A42]">
            Ξεκάθαρες τιμές, χωρίς εκπλήξεις. Για χρώμα και θεραπείες προτείνουμε μια σύντομη, δωρεάν
            διάγνωση.
          </p>
          <div className="mt-8 rounded-[22px] overflow-hidden aspect-[4/3]">
            <DemoImage img={img.nails} w={440} />
          </div>
        </div>
        <div className="bg-white rounded-[24px] p-7 cq-md:p-10">
          {prices.map(([name, price]) => (
            <div key={name} className="flex items-baseline gap-4 py-3.5 border-b border-[#EFE4DC] last:border-0">
              <span className="text-[16px]">{name}</span>
              <span className="flex-1 border-b border-dotted border-[#D9C9BE]" />
              <span className="text-[18px] text-[#C9877A]" style={serif}>
                {price}€
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#EADFD6]">
        <div className={`${wrap} py-20 cq-lg:py-24`}>
          <h2 className="text-[36px] cq-md:text-[48px] text-center" style={serif}>
            Γνωρίστε την <em>ομάδα</em>
          </h2>
          <div className="mt-12 grid cq-md:grid-cols-3 gap-8">
            {team.map(([name, role], i) => (
              <div key={name} className="text-center">
                <div className="mx-auto w-[220px] aspect-square rounded-full overflow-hidden border-[6px] border-white">
                  <DemoImage img={img.team[i]} w={220} />
                </div>
                <h3 className="mt-5 text-[24px]" style={serif}>
                  {name}
                </h3>
                <p className="text-[14px] text-[#8C7A70] mt-1">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${wrap} py-20 cq-lg:py-24`}>
        <div className="flex items-center justify-between">
          <h2 className="text-[30px] cq-md:text-[40px]" style={serif}>
            Από το studio
          </h2>
          <span className="flex items-center gap-2 text-[14px] text-[#8C7A70]">
            <FiInstagram /> @salvia.studio
          </span>
        </div>
        <div className="mt-10 grid grid-cols-2 cq-md:grid-cols-4 gap-4">
          {[img.salon, img.spa, img.hair, img.barber].map((p, i) => (
            <div key={p.id} className={`rounded-[18px] overflow-hidden ${i % 2 ? "aspect-[3/4] cq-md:mt-10" : "aspect-[3/4]"}`}>
              <DemoImage img={p} w={280} />
            </div>
          ))}
        </div>
      </section>

      <section className={`${wrap} pb-20`}>
        <div className="bg-[#2F2622] text-[#F6EFE9] rounded-[32px] px-8 py-12 cq-md:px-14 cq-md:py-16 grid cq-lg:grid-cols-[1.2fr,1fr] gap-10 items-center">
          <div>
            <h2 className="text-[34px] cq-md:text-[46px] leading-[1.1]" style={serif}>
              Ώρα για <em className="text-[#E6B3A6]">εσάς</em>.
            </h2>
            <p className="mt-4 text-[16px] text-[#F6EFE9]/70 max-w-[420px]">
              Κλείστε online σε λιγότερο από ένα λεπτό και λάβετε υπενθύμιση με SMS την προηγούμενη μέρα.
            </p>
            <a href="#" className="mt-8 inline-flex items-center gap-2 bg-[#F6EFE9] text-[#2F2622] font-medium px-7 py-4 rounded-full">
              Κλείστε ραντεβού <FiArrowRight />
            </a>
          </div>
          <div className="grid gap-4 text-[15px] text-[#F6EFE9]/80">
            <p className="flex items-start gap-3">
              <FiMapPin className="mt-1 text-[#E6B3A6]" /> Τσιμισκή 00, Θεσσαλονίκη
            </p>
            <p className="flex items-start gap-3">
              <FiClock className="mt-1 text-[#E6B3A6]" /> Τρίτη – Παρασκευή 10:00 – 20:00 · Σάββατο 09:00 – 16:00
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#E3D6CC]">
        <div className={`${wrap} py-8 flex flex-col cq-md:flex-row justify-between gap-2 text-[13px] text-[#8C7A70]`}>
          <p>© 2026 Σάλβια Hair & Beauty</p>
          <DemoDisclaimer />
        </div>
      </footer>
    </Full>
  </DemoRoot>
);

export default BeautyWellnessDemo;
