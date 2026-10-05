import {
  FiArrowRight,
  FiBarChart2,
  FiCheck,
  FiCpu,
  FiDollarSign,
  FiMenu,
  FiPhone,
  FiTarget,
  FiTrendingUp,
  FiUsers,
  FiAward,
} from "react-icons/fi";

import { DemoDisclaimer, DemoImage, DemoRoot, Full } from "./kit";
import { fonts } from "./fonts";
import { images } from "./images";

// Τροχιά Consulting — fictional business-consulting firm. Clean blue/neutral.
const img = images.business;
const wrap = "mx-auto w-full max-w-[1160px] px-5 cq-md:px-10";

const services = [
  { icon: FiTarget, title: "Στρατηγική Ανάπτυξης", text: "Επιχειρηματικό πλάνο, στόχοι και δείκτες που μετράνε πραγματικά." },
  { icon: FiDollarSign, title: "Οικονομική Διαχείριση", text: "Ταμειακές ροές, κοστολόγηση και προβλέψεις χωρίς εκπλήξεις." },
  { icon: FiCpu, title: "Ψηφιακός Μετασχηματισμός", text: "Εργαλεία και αυτοματισμοί που γλιτώνουν ώρες κάθε εβδομάδα." },
  { icon: FiTrendingUp, title: "Marketing & Πωλήσεις", text: "Ξεκάθαρη πρόταση αξίας και διαδικασία πωλήσεων που αποδίδει." },
  { icon: FiUsers, title: "Οργάνωση Ομάδας", text: "Ρόλους, διαδικασίες και κουλτούρα για ομάδες που μεγαλώνουν." },
  { icon: FiAward, title: "Χρηματοδοτήσεις", text: "Εντοπισμός προγραμμάτων και υποστήριξη σε όλη την αίτηση." },
];

const stats = [
  ["12+", "χρόνια εμπειρίας"],
  ["120+", "επιχειρήσεις-πελάτες"],
  ["38%", "μέση αύξηση εσόδων"],
  ["94%", "ποσοστό ανανεώσεων"],
];

const testimonials = [
  {
    quote: "Σε έξι μήνες οργανώσαμε τις πωλήσεις μας και ανοίξαμε δεύτερο κατάστημα. Επιτέλους ξέρουμε τι δουλεύει.",
    name: "Ελένη Παππά",
    role: "Ιδιοκτήτρια, αλυσίδα ζαχαροπλαστείων",
  },
  {
    quote: "Μας βοήθησαν να δούμε τα νούμερα καθαρά. Το κόστος έπεσε 18% χωρίς να αγγίξουμε την ποιότητα.",
    name: "Γιώργος Ανδρέου",
    role: "Διευθυντής, εταιρεία logistics",
  },
  {
    quote: "Άμεσοι, πρακτικοί και πάντα διαθέσιμοι. Νιώθουμε ότι έχουμε έναν συνεργάτη, όχι έναν σύμβουλο.",
    name: "Μαρία Κωστοπούλου",
    role: "Συνιδρύτρια, e-shop καλλυντικών",
  },
];

const ModernBusinessDemo = () => (
  <DemoRoot font={fonts.manrope} className="bg-white text-[#0F1B2D]">
    <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-[#E7EBF3]">
      <div className={`${wrap} h-[72px] flex items-center justify-between`}>
        <a href="#" className="flex items-center gap-2.5">
          <span className="w-9 h-9 rounded-xl bg-[#2F5BEA] text-white grid place-items-center font-extrabold text-[18px]">
            Τ
          </span>
          <span className="leading-none">
            <span className="block font-extrabold text-[19px] tracking-tight">Τροχιά</span>
            <span className="block text-[11px] text-[#5B6B85] tracking-[0.12em] uppercase">Consulting</span>
          </span>
        </a>
        <nav className="hidden cq-lg:flex items-center gap-7 whitespace-nowrap text-[15px] font-medium text-[#33435C]">
          {["Υπηρεσίες", "Πώς δουλεύουμε", "Πελάτες", "Άρθρα", "Επικοινωνία"].map((l) => (
            <a key={l} href="#" className="hover:text-[#2F5BEA] transition-colors">
              {l}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <span className="hidden cq-xl:flex items-center gap-2 whitespace-nowrap text-[14px] font-semibold">
            <FiPhone className="text-[#2F5BEA]" /> 210 000 0000
          </span>
          <a href="#" className="hidden cq-sm:inline-flex whitespace-nowrap bg-[#2F5BEA] text-white text-[14px] font-semibold px-5 py-3 rounded-xl hover:bg-[#2449C2] transition-colors">
            Κλείστε ραντεβού
          </a>
          <FiMenu size={24} className="cq-lg:hidden" aria-hidden="true" />
        </div>
      </div>
    </header>

    <section className="bg-[#F4F6FA] overflow-hidden">
      <div className={`${wrap} grid cq-lg:grid-cols-[1.05fr,1fr] gap-12 items-center py-14 cq-lg:py-20`}>
        <div>
          <span className="inline-flex items-center gap-2 bg-white border border-[#DCE3F0] rounded-full px-3.5 py-1.5 text-[13px] font-semibold text-[#2F5BEA]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2F5BEA]" /> Σύμβουλοι για μικρομεσαίες επιχειρήσεις
          </span>
          <h1 className="mt-6 text-[38px] cq-md:text-[52px] cq-lg:text-[58px] font-extrabold leading-[1.05] tracking-[-0.02em]">
            Οργανώνουμε την <span className="text-[#2F5BEA]">ανάπτυξη</span> της επιχείρησής σας.
          </h1>
          <p className="mt-6 text-[17px] cq-md:text-[18px] leading-[1.65] text-[#4A5A73] max-w-[520px]">
            Στρατηγική, οικονομικά και ψηφιακά εργαλεία σε ένα ξεκάθαρο πλάνο — ώστε να παίρνετε
            αποφάσεις με σιγουριά και να βλέπετε μετρήσιμα αποτελέσματα.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#" className="inline-flex items-center gap-2 bg-[#2F5BEA] text-white font-semibold px-6 py-4 rounded-xl shadow-[0_10px_30px_-10px_rgba(47,91,234,0.6)]">
              Δωρεάν αξιολόγηση <FiArrowRight />
            </a>
            <a href="#" className="inline-flex items-center gap-2 bg-white border border-[#DCE3F0] font-semibold px-6 py-4 rounded-xl">
              Οι υπηρεσίες μας
            </a>
          </div>
          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {img.people.map((p) => (
                <span key={p.id} className="w-11 h-11 rounded-full overflow-hidden border-[3px] border-[#F4F6FA]">
                  <DemoImage img={p} w={44} />
                </span>
              ))}
            </div>
            <div className="text-[14px] leading-tight">
              <span className="text-[#F5A524] tracking-[2px]">★★★★★</span>
              <span className="ml-1.5 font-bold">4,9/5</span>
              <p className="text-[#5B6B85] mt-1">από 120+ επιχειρήσεις στην Ελλάδα</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3.4] rounded-[28px] overflow-hidden shadow-[0_30px_60px_-30px_rgba(15,27,45,0.45)]">
            <DemoImage img={img.hero} w={620} />
          </div>
          <div className="absolute -left-4 cq-md:-left-10 bottom-8 bg-white rounded-2xl p-5 shadow-[0_20px_50px_-20px_rgba(15,27,45,0.35)] w-[230px]">
            <p className="text-[13px] text-[#5B6B85] font-medium">Αύξηση εσόδων πελατών</p>
            <p className="text-[30px] font-extrabold mt-1">
              +38% <span className="text-[13px] text-[#16A34A] font-bold align-middle">▲ 12μήνες</span>
            </p>
            <div className="mt-3 flex items-end gap-1.5 h-12">
              {[30, 42, 38, 55, 61, 72, 88].map((h, i) => (
                <span key={i} className="flex-1 rounded-t bg-[#2F5BEA]" style={{ height: `${h}%`, opacity: 0.35 + i * 0.1 }} />
              ))}
            </div>
          </div>
          <div className="hidden cq-md:flex absolute -right-3 top-8 bg-[#0F1B2D] text-white rounded-2xl px-5 py-4 items-center gap-3">
            <FiBarChart2 className="text-[#7DA2FF]" size={22} />
            <span className="text-[14px] font-semibold leading-tight">
              Μηνιαία αναφορά
              <br />
              <span className="text-white/60 font-medium">με τα KPI σας</span>
            </span>
          </div>
        </div>
      </div>
    </section>

    <section className="border-b border-[#E7EBF3]">
      <div className={`${wrap} py-8 flex flex-col cq-md:flex-row cq-md:items-center gap-6 cq-md:gap-12`}>
        <p className="text-[13px] font-semibold text-[#8090A8] uppercase tracking-[0.12em] shrink-0">Μας εμπιστεύονται</p>
        <div className="flex flex-wrap items-center gap-x-10 gap-y-3 text-[#9AA6B8] text-[20px] font-extrabold tracking-tight">
          <span>ΑΛΦΑ·ΤΡΟΦΙΜΑ</span>
          <span className="font-semibold italic">nexo logistics</span>
          <span>Θέρμη Ενέργεια</span>
          <span className="tracking-[0.2em] text-[16px]">POLIS RETAIL</span>
          <span className="font-medium">kalami foods</span>
        </div>
      </div>
    </section>

    <Full>
      <section className={`${wrap} py-20 cq-lg:py-24`}>
        <div className="flex flex-col cq-md:flex-row cq-md:items-end justify-between gap-6">
          <div>
            <p className="text-[#2F5BEA] font-bold text-[14px] uppercase tracking-[0.12em]">Υπηρεσίες</p>
            <h2 className="mt-3 text-[32px] cq-md:text-[42px] font-extrabold tracking-[-0.02em] leading-[1.1] max-w-[560px]">
              Ό,τι χρειάζεται μια επιχείρηση για να μεγαλώσει σωστά
            </h2>
          </div>
          <a href="#" className="inline-flex items-center gap-2 font-semibold text-[#2F5BEA]">
            Όλες οι υπηρεσίες <FiArrowRight />
          </a>
        </div>
        <div className="mt-12 grid cq-sm:grid-cols-2 cq-lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, text }) => (
            <div key={title} className="group rounded-2xl border border-[#E7EBF3] p-7 hover:border-[#2F5BEA] hover:shadow-[0_20px_50px_-30px_rgba(47,91,234,0.5)] transition-all">
              <span className="w-12 h-12 rounded-xl bg-[#EEF2FE] text-[#2F5BEA] grid place-items-center group-hover:bg-[#2F5BEA] group-hover:text-white transition-colors">
                <Icon size={22} />
              </span>
              <h3 className="mt-6 text-[20px] font-bold">{title}</h3>
              <p className="mt-2 text-[15px] leading-[1.65] text-[#5B6B85]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0F1B2D] text-white">
        <div className={`${wrap} py-14 grid grid-cols-2 cq-lg:grid-cols-4 gap-8`}>
          {stats.map(([value, label]) => (
            <div key={label}>
              <p className="text-[40px] cq-md:text-[48px] font-extrabold tracking-tight">{value}</p>
              <p className="text-white/60 text-[15px] mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`${wrap} py-20 cq-lg:py-24 grid cq-lg:grid-cols-2 gap-14 items-center`}>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl overflow-hidden aspect-[3/4]">
            <DemoImage img={img.team} w={280} />
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[3/4] mt-10">
            <DemoImage img={img.office} w={280} />
          </div>
        </div>
        <div>
          <p className="text-[#2F5BEA] font-bold text-[14px] uppercase tracking-[0.12em]">Πώς δουλεύουμε</p>
          <h2 className="mt-3 text-[32px] cq-md:text-[40px] font-extrabold tracking-[-0.02em] leading-[1.1]">
            Τρία βήματα. Κανένα περιττό meeting.
          </h2>
          <div className="mt-8 flex flex-col gap-6">
            {[
              ["Διάγνωση", "Μια εβδομάδα για να καταλάβουμε τα νούμερα, τους ανθρώπους και τις ευκαιρίες."],
              ["Πλάνο δράσης", "Συγκεκριμένοι στόχοι 90 ημερών, με υπεύθυνους και προθεσμίες."],
              ["Υλοποίηση", "Δουλεύουμε δίπλα στην ομάδα σας και μετράμε την πρόοδο κάθε μήνα."],
            ].map(([title, text], i) => (
              <div key={title} className="flex gap-4">
                <span className="w-10 h-10 shrink-0 rounded-full bg-[#2F5BEA] text-white font-bold grid place-items-center">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-[18px] font-bold">{title}</h3>
                  <p className="text-[15px] text-[#5B6B85] leading-[1.65] mt-1">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <ul className="mt-8 grid cq-sm:grid-cols-2 gap-3 text-[15px] font-medium">
            {["Σταθερή μηνιαία αμοιβή", "Χωρίς δεσμεύσεις διάρκειας", "Αναφορές σε απλά ελληνικά", "Ένας σταθερός σύμβουλος"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <FiCheck className="text-[#16A34A]" /> {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#F4F6FA]">
        <div className={`${wrap} py-20 cq-lg:py-24`}>
          <h2 className="text-[32px] cq-md:text-[40px] font-extrabold tracking-[-0.02em] text-center">
            Τι λένε οι πελάτες μας
          </h2>
          <div className="mt-12 grid cq-lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <figure key={t.name} className="bg-white rounded-2xl p-7 border border-[#E7EBF3] flex flex-col">
                <span className="text-[#F5A524] tracking-[2px]">★★★★★</span>
                <blockquote className="mt-4 text-[16px] leading-[1.7] text-[#33435C] flex-1">«{t.quote}»</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="w-11 h-11 rounded-full overflow-hidden">
                    <DemoImage img={img.people[i]} w={44} />
                  </span>
                  <span>
                    <span className="block font-bold text-[15px]">{t.name}</span>
                    <span className="block text-[13px] text-[#5B6B85]">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className={`${wrap} py-20`}>
        <div className="rounded-[28px] bg-[#2F5BEA] text-white px-8 py-12 cq-md:px-14 cq-md:py-16 flex flex-col cq-lg:flex-row cq-lg:items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-white/10" aria-hidden="true" />
          <div className="relative">
            <h2 className="text-[30px] cq-md:text-[38px] font-extrabold tracking-[-0.02em] leading-[1.15]">
              Ας μιλήσουμε για την επιχείρησή σας
            </h2>
            <p className="mt-3 text-white/80 text-[17px]">30 λεπτά, χωρίς χρέωση και χωρίς δέσμευση.</p>
          </div>
          <a href="#" className="relative shrink-0 whitespace-nowrap inline-flex items-center gap-2 bg-white text-[#2F5BEA] font-bold px-7 py-4 rounded-xl w-fit">
            Κλείστε δωρεάν αξιολόγηση <FiArrowRight />
          </a>
        </div>
      </section>

      <footer className="bg-[#0F1B2D] text-white/70">
        <div className={`${wrap} py-14 grid cq-md:grid-cols-[1.4fr,1fr,1fr,1fr] gap-10 text-[14px]`}>
          <div>
            <p className="text-white font-extrabold text-[20px]">Τροχιά Consulting</p>
            <p className="mt-3 leading-[1.7] max-w-[280px]">Σύμβουλοι επιχειρήσεων για μικρομεσαίες εταιρείες σε όλη την Ελλάδα.</p>
          </div>
          {[
            ["Υπηρεσίες", ["Στρατηγική", "Οικονομικά", "Ψηφιακά εργαλεία", "Χρηματοδοτήσεις"]],
            ["Εταιρεία", ["Η ομάδα", "Πελάτες", "Καριέρα", "Άρθρα"]],
            ["Επικοινωνία", ["Λεωφ. Κηφισίας 00, Αθήνα", "210 000 0000", "hello@trochia.gr"]],
          ].map(([title, items]) => (
            <div key={title}>
              <p className="text-white font-semibold mb-3">{title}</p>
              <ul className="flex flex-col gap-2">
                {items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10">
          <div className={`${wrap} py-5 flex flex-col cq-md:flex-row justify-between gap-2`}>
            <p className="text-[12px]">© 2026 Τροχιά Consulting</p>
            <DemoDisclaimer />
          </div>
        </div>
      </footer>
    </Full>
  </DemoRoot>
);

export default ModernBusinessDemo;
