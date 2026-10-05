import PropTypes from "prop-types";
import {
  FiArrowRight,
  FiBell,
  FiCalendar,
  FiCheck,
  FiCreditCard,
  FiGlobe,
  FiGrid,
  FiMail,
  FiMenu,
  FiMessageSquare,
  FiPieChart,
  FiSettings,
  FiUsers,
  FiZap,
} from "react-icons/fi";

import { DemoDisclaimer, DemoRoot, Full } from "./kit";
import { fonts } from "./fonts";

// Ροή — fictional booking & payments platform for local businesses. Dark,
// indigo/cyan accents; the product UI is drawn in code, no screenshots.
const wrap = "mx-auto w-full max-w-[1200px] px-5 cq-md:px-10";
const gradientText = {
  backgroundImage: "linear-gradient(90deg, #A5B1FF, #3EE0CF)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
};

const appointments = [
  ["10:00", "Ελένη Π.", "Κούρεμα & styling", "Επιβεβαιωμένο", "#3EE0CF"],
  ["10:45", "Κώστας Δ.", "Ανδρικό κούρεμα", "Πληρωμένο", "#7C8CFF"],
  ["11:30", "Μαρία Λ.", "Βαφή ρίζας", "Υπενθύμιση στάλθηκε", "#F5B85C"],
  ["12:15", "Νίκος Α.", "Fade & γένια", "Επιβεβαιωμένο", "#3EE0CF"],
];

const features = [
  [FiCalendar, "Online κρατήσεις 24/7", "Οι πελάτες κλείνουν από το site, το Instagram ή το Google σε 3 κλικ."],
  [FiCreditCard, "Προκαταβολές & πληρωμές", "Λιγότερα no-shows με προκαταβολή κατά την κράτηση."],
  [FiMessageSquare, "Υπενθυμίσεις SMS & email", "Αυτόματα μηνύματα που μειώνουν τις ακυρώσεις έως 43%."],
  [FiUsers, "Καρτέλα πελάτη", "Ιστορικό, προτιμήσεις και σημειώσεις σε ένα σημείο."],
  [FiPieChart, "Αναφορές σε πραγματικό χρόνο", "Έσοδα, πληρότητα και απόδοση ομάδας με μια ματιά."],
  [FiGlobe, "Σελίδα κρατήσεων", "Έτοιμη σελίδα με το λογότυπο και τα χρώματά σας."],
];

const plans = [
  ["Starter", "19", "Για επαγγελματίες που ξεκινούν", ["1 χρήστης", "Online κρατήσεις", "Υπενθυμίσεις email"], false],
  ["Pro", "49", "Για ομάδες που μεγαλώνουν", ["Έως 5 χρήστες", "SMS υπενθυμίσεις", "Προκαταβολές", "Αναφορές"], true],
  ["Business", "99", "Για πολλά καταστήματα", ["Απεριόριστοι χρήστες", "Πολλαπλά καταστήματα", "API & ενσωματώσεις", "Προτεραιότητα υποστήριξης"], false],
];

const Dashboard = () => (
  <div className="rounded-[18px] border border-white/10 bg-[#0F1529] shadow-[0_40px_120px_-30px_rgba(124,140,255,0.45)] overflow-hidden text-left">
    <div className="h-10 flex items-center gap-2 px-4 border-b border-white/10 bg-[#0C1124]">
      <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B6B]/80" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#F5B85C]/80" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#3EE0CF]/80" />
      <span className="ml-4 text-[12px] text-white/40">Ροή · Επισκόπηση</span>
    </div>
    <div className="grid cq-md:grid-cols-[200px,1fr]">
      <aside className="hidden cq-md:flex flex-col gap-1 p-4 border-r border-white/10 text-[13.5px] text-white/60">
        {[[FiGrid, "Επισκόπηση", true], [FiCalendar, "Ημερολόγιο"], [FiUsers, "Πελάτες"], [FiCreditCard, "Πληρωμές"], [FiPieChart, "Αναφορές"], [FiSettings, "Ρυθμίσεις"]].map(([Icon, label, active]) => (
          <span key={label} className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg ${active ? "bg-[#7C8CFF]/15 text-white" : ""}`}>
            <Icon size={15} /> {label}
          </span>
        ))}
      </aside>
      <div className="p-5 cq-md:p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white text-[18px] font-semibold">Καλημέρα, Άννα</p>
            <p className="text-white/50 text-[13px]">Τρίτη 13 Οκτωβρίου · 38 ραντεβού σήμερα</p>
          </div>
          <span className="w-9 h-9 rounded-full bg-white/5 grid place-items-center text-white/70">
            <FiBell size={16} />
          </span>
        </div>
        <div className="mt-5 grid grid-cols-2 cq-lg:grid-cols-4 gap-3">
          {[["Κρατήσεις σήμερα", "38", "+12%"], ["Έσοδα εβδομάδας", "€4.820", "+8,4%"], ["Νέοι πελάτες", "64", "+21%"], ["No-show", "2,1%", "-43%"]].map(([l, v, d]) => (
            <div key={l} className="rounded-xl bg-white/[0.04] border border-white/10 p-4">
              <p className="text-[12px] text-white/50">{l}</p>
              <p className="mt-1.5 text-[22px] font-semibold text-white">{v}</p>
              <p className="text-[12px] text-[#3EE0CF] mt-0.5">{d} από την προηγ. εβδομάδα</p>
            </div>
          ))}
        </div>
        <div className="mt-4 grid cq-lg:grid-cols-[1.4fr,1fr] gap-3">
          <div className="rounded-xl bg-white/[0.04] border border-white/10 p-4">
            <p className="text-[13px] text-white/70">Έσοδα — τελευταίες 12 εβδομάδες</p>
            <svg viewBox="0 0 400 140" className="mt-3 w-full h-[140px]" aria-hidden="true">
              <defs>
                <linearGradient id="roi-area" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="#7C8CFF" stopOpacity="0.45" />
                  <stop offset="1" stopColor="#7C8CFF" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[35, 70, 105].map((y) => (
                <line key={y} x1="0" x2="400" y1={y} y2={y} stroke="white" strokeOpacity="0.06" />
              ))}
              <path d="M0 110 L36 98 L72 104 L108 86 L144 90 L180 72 L216 76 L252 58 L288 62 L324 40 L360 46 L400 24 L400 140 L0 140 Z" fill="url(#roi-area)" />
              <path d="M0 110 L36 98 L72 104 L108 86 L144 90 L180 72 L216 76 L252 58 L288 62 L324 40 L360 46 L400 24" fill="none" stroke="#A5B1FF" strokeWidth="2.5" />
              <circle cx="400" cy="24" r="4" fill="#3EE0CF" />
            </svg>
          </div>
          <div className="rounded-xl bg-white/[0.04] border border-white/10 p-4">
            <p className="text-[13px] text-white/70">Επόμενα ραντεβού</p>
            <ul className="mt-3 space-y-2.5">
              {appointments.map(([t, n, s, status, c]) => (
                <li key={t} className="flex items-center gap-3 text-[12.5px]">
                  <span className="text-white/50 w-10">{t}</span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-white truncate">{n}</span>
                    <span className="block text-white/45 truncate">{s}</span>
                  </span>
                  <span className="hidden cq-sm:inline px-2 py-0.5 rounded-full text-[11px]" style={{ background: `${c}22`, color: c }}>
                    {status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Plan = ({ name, price, text, items, popular }) => (
  <div className={`rounded-[20px] p-7 border ${popular ? "bg-gradient-to-b from-[#7C8CFF]/20 to-transparent border-[#7C8CFF]/60" : "bg-white/[0.03] border-white/10"}`}>
    <div className="flex items-center justify-between">
      <p className="text-[18px] font-semibold text-white">{name}</p>
      {popular && <span className="text-[12px] font-semibold bg-[#7C8CFF] text-[#0A0F1F] px-2.5 py-1 rounded-full">Δημοφιλές</span>}
    </div>
    <p className="mt-1 text-[14px] text-white/55">{text}</p>
    <p className="mt-6 text-white">
      <span className="text-[44px] font-semibold tracking-[-0.03em]">€{price}</span>
      <span className="text-white/50 text-[14px]"> / μήνα</span>
    </p>
    <ul className="mt-6 space-y-3 text-[14.5px] text-white/75">
      {items.map((it) => (
        <li key={it} className="flex items-center gap-2.5">
          <FiCheck className="text-[#3EE0CF]" /> {it}
        </li>
      ))}
    </ul>
    <a href="#" className={`mt-8 block text-center font-semibold py-3.5 rounded-xl ${popular ? "bg-white text-[#0A0F1F]" : "bg-white/10 text-white"}`}>
      Ξεκινήστε δωρεάν
    </a>
  </div>
);

Plan.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  popular: PropTypes.bool,
};

const SaasDemo = () => (
  <DemoRoot font={fonts.inter} className="bg-[#0A0F1F] text-[#C9D0E6]">
    <header className="sticky top-0 z-20 bg-[#0A0F1F]/80 backdrop-blur border-b border-white/5">
      <div className={`${wrap} h-[72px] flex items-center justify-between`}>
        <a href="#" className="flex items-center gap-2.5 text-white">
          <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7C8CFF] to-[#3EE0CF]" />
          <span className="text-[21px] font-bold tracking-[-0.03em]">ροή</span>
        </a>
        <nav className="hidden cq-lg:flex items-center gap-8 text-[14.5px] text-white/65">
          {["Προϊόν", "Λύσεις", "Τιμές", "Ενσωματώσεις", "Πόροι"].map((l) => (
            <a key={l} href="#" className="hover:text-white transition-colors">
              {l}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4 text-[14px]">
          <a href="#" className="hidden cq-sm:inline text-white/75">
            Σύνδεση
          </a>
          <a href="#" className="hidden cq-sm:inline-flex bg-white text-[#0A0F1F] font-semibold px-4 py-2.5 rounded-lg">
            Δοκιμάστε δωρεάν
          </a>
          <FiMenu size={22} className="cq-lg:hidden text-white" aria-hidden="true" />
        </div>
      </div>
    </header>

    <section className="relative overflow-hidden">
      <div className="absolute left-1/2 -translate-x-1/2 -top-40 w-[900px] h-[600px] rounded-full bg-[#7C8CFF]/25 blur-[120px]" aria-hidden="true" />
      <div className={`${wrap} relative pt-16 cq-lg:pt-20 text-center`}>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[13px] text-white/80">
          <span className="bg-[#3EE0CF] text-[#0A0F1F] text-[11px] font-bold px-2 py-0.5 rounded-full">Νέο</span>
          Αυτόματες υπενθυμίσεις μέσω SMS <FiArrowRight size={13} />
        </span>
        <h1 className="mt-7 text-[42px] cq-md:text-[60px] cq-lg:text-[72px] font-semibold text-white leading-[1.02] tracking-[-0.04em] max-w-[900px] mx-auto">
          Κρατήσεις, πληρωμές και πελάτες — <span style={gradientText}>σε μία ροή.</span>
        </h1>
        <p className="mt-6 text-[17px] cq-md:text-[19px] leading-[1.6] text-white/60 max-w-[620px] mx-auto">
          Η πλατφόρμα για κομμωτήρια, ιατρεία, γυμναστήρια και κάθε επιχείρηση με ραντεβού. Ρυθμίζεται σε
          10 λεπτά.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a href="#" className="inline-flex items-center gap-2 bg-[#7C8CFF] text-[#0A0F1F] font-semibold px-6 py-3.5 rounded-xl">
            Ξεκινήστε δωρεάν <FiArrowRight />
          </a>
          <a href="#" className="inline-flex items-center gap-2 border border-white/15 text-white font-medium px-6 py-3.5 rounded-xl">
            Κλείστε demo
          </a>
        </div>
        <p className="mt-4 text-[13px] text-white/45">14 ημέρες δωρεάν · Χωρίς πιστωτική κάρτα · Ακύρωση οποτεδήποτε</p>
        <div className="mt-14 cq-lg:mt-16">
          <Dashboard />
        </div>
      </div>
    </section>

    <Full>
      <section className={`${wrap} py-14`}>
        <p className="text-center text-[13px] uppercase tracking-[0.2em] text-white/40">Πάνω από 2.000 επιχειρήσεις δουλεύουν με τη Ροή</p>
        <div className="mt-6 flex flex-wrap justify-center gap-x-12 gap-y-4 text-[19px] font-semibold text-white/35">
          <span>Studio Nine</span>
          <span>ΦυσιοΚίνηση</span>
          <span>Barber & Co</span>
          <span>Pilates Loft</span>
          <span>Δερματολογική+</span>
        </div>
      </section>

      <section className={`${wrap} py-20 cq-lg:py-24`}>
        <div className="text-center max-w-[640px] mx-auto">
          <p className="text-[#3EE0CF] font-semibold text-[14px]">Δυνατότητες</p>
          <h2 className="mt-3 text-[34px] cq-md:text-[46px] font-semibold text-white tracking-[-0.03em] leading-[1.1]">
            Όλα όσα χρειάζεστε, τίποτα που περισσεύει.
          </h2>
        </div>
        <div className="mt-14 grid cq-md:grid-cols-2 cq-lg:grid-cols-3 gap-4">
          {features.map(([Icon, title, text]) => (
            <div key={title} className="rounded-[18px] bg-white/[0.03] border border-white/10 p-7 hover:border-[#7C8CFF]/50 transition-colors">
              <span className="w-11 h-11 rounded-xl bg-[#7C8CFF]/15 text-[#A5B1FF] grid place-items-center">
                <Icon size={20} />
              </span>
              <h3 className="mt-5 text-[18px] font-semibold text-white">{title}</h3>
              <p className="mt-2 text-[15px] leading-[1.65] text-white/55">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/5 bg-white/[0.02]">
        <div className={`${wrap} py-16 grid grid-cols-2 cq-lg:grid-cols-4 gap-8 text-center`}>
          {[["2.000+", "επιχειρήσεις"], ["1,2 εκ.", "κρατήσεις τον μήνα"], ["-43%", "ακυρώσεις τελευταίας στιγμής"], ["99,9%", "διαθεσιμότητα"]].map(([v, l]) => (
            <div key={l}>
              <p className="text-[40px] cq-md:text-[48px] font-semibold tracking-[-0.03em]" style={gradientText}>
                {v}
              </p>
              <p className="text-[14px] text-white/55 mt-1">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`${wrap} py-20 cq-lg:py-24 grid cq-lg:grid-cols-2 gap-12 items-center`}>
        <div>
          <p className="text-[#3EE0CF] font-semibold text-[14px]">Ενσωματώσεις</p>
          <h2 className="mt-3 text-[34px] cq-md:text-[42px] font-semibold text-white tracking-[-0.03em] leading-[1.1]">
            Συνδέεται με τα εργαλεία που ήδη χρησιμοποιείτε.
          </h2>
          <p className="mt-5 text-[16px] leading-[1.7] text-white/55">
            Ημερολόγια, πληρωμές, λογιστικά και η ιστοσελίδα σας συγχρονίζονται αυτόματα — χωρίς διπλή
            καταχώρηση.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[[FiCalendar, "Ημερολόγια"], [FiCreditCard, "Πληρωμές"], [FiMail, "Newsletter"], [FiMessageSquare, "SMS"], [FiGlobe, "WordPress"], [FiPieChart, "Λογιστικά"], [FiZap, "Αυτοματισμοί"], [FiUsers, "CRM"], [FiBell, "Ειδοποιήσεις"]].map(([Icon, label]) => (
            <div key={label} className="aspect-square rounded-[16px] bg-white/[0.04] border border-white/10 flex flex-col items-center justify-center gap-2 text-[13px] text-white/70">
              <Icon size={22} className="text-[#A5B1FF]" /> {label}
            </div>
          ))}
        </div>
      </section>

      <section className={`${wrap} py-20 cq-lg:py-24`}>
        <h2 className="text-center text-[34px] cq-md:text-[46px] font-semibold text-white tracking-[-0.03em]">Απλές, διαφανείς τιμές</h2>
        <div className="mt-12 grid cq-lg:grid-cols-3 gap-5">
          {plans.map(([name, price, text, items, popular]) => (
            <Plan key={name} name={name} price={price} text={text} items={items} popular={popular} />
          ))}
        </div>
      </section>

      <section className={`${wrap} pb-20`}>
        <div className="rounded-[28px] bg-gradient-to-r from-[#7C8CFF] to-[#3EE0CF] text-[#0A0F1F] px-8 py-14 cq-md:px-14 text-center">
          <h2 className="text-[32px] cq-md:text-[44px] font-semibold tracking-[-0.03em] leading-[1.1]">
            Αφήστε τα τηλέφωνα. Ας δουλέψει η ροή.
          </h2>
          <a href="#" className="mt-8 inline-flex items-center gap-2 bg-[#0A0F1F] text-white font-semibold px-7 py-4 rounded-xl">
            Δοκιμάστε δωρεάν για 14 ημέρες <FiArrowRight />
          </a>
        </div>
      </section>

      <footer className="border-t border-white/5">
        <div className={`${wrap} py-8 flex flex-col cq-md:flex-row justify-between gap-2 text-[13px] text-white/45`}>
          <p>© 2026 Ροή · Όροι · Απόρρητο · Κατάσταση συστήματος</p>
          <DemoDisclaimer />
        </div>
      </footer>
    </Full>
  </DemoRoot>
);

export default SaasDemo;
