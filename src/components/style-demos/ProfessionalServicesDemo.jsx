import { FiArrowRight, FiClock, FiMapPin, FiMenu, FiPhone, FiShield } from "react-icons/fi";

import { DemoDisclaimer, DemoImage, DemoRoot, Full } from "./kit";
import { fonts } from "./fonts";
import { images } from "./images";

// Καλλέργη & Συνεργάτες — fictional law firm. Navy, ivory and brass; classic serif.
const img = images.law;
const wrap = "mx-auto w-full max-w-[1160px] px-5 cq-md:px-10";
const serif = { fontFamily: fonts.garamond };

const areas = [
  ["I", "Εταιρικό Δίκαιο", "Σύσταση εταιρειών, συμβάσεις, εξαγορές και εταιρική διακυβέρνηση."],
  ["II", "Ακίνητα & Μεταβιβάσεις", "Έλεγχος τίτλων, αγοραπωλησίες, μισθώσεις και αξιοποίηση."],
  ["III", "Αστικό & Οικογενειακό", "Διαζύγια, επιμέλεια, διατροφή και διαφορές από συμβάσεις."],
  ["IV", "Εργατικό Δίκαιο", "Συμβάσεις εργασίας, απολύσεις και συμμόρφωση για εργοδότες."],
  ["V", "Κληρονομικό Δίκαιο", "Διαθήκες, αποδοχές κληρονομιάς και διανομή περιουσίας."],
  ["VI", "Διαφορές & Διαιτησία", "Δικαστική εκπροσώπηση και εξωδικαστική επίλυση διαφορών."],
];

const partners = [
  ["Νικόλαος Καλλέργης", "Ιδρυτικός Εταίρος", "Εταιρικό δίκαιο · Εξαγορές"],
  ["Δανάη Μαυρίδου", "Εταίρος", "Ακίνητα · Κληρονομικό δίκαιο"],
  ["Στέφανος Ρήγας", "Senior Associate", "Εργατικό δίκαιο · Διαφορές"],
];

const ProfessionalServicesDemo = () => (
  <DemoRoot font={fonts.inter} className="bg-[#F6F2EA] text-[#0E1A2B]">
    <div className="bg-[#0E1A2B] text-[#E9E2D2]/80 text-[12.5px]">
      <div className={`${wrap} h-10 flex items-center justify-between`}>
        <span className="flex items-center gap-2">
          <FiMapPin className="text-[#B08D57]" /> Αθήνα · Θεσσαλονίκη
        </span>
        <span className="hidden cq-md:flex items-center gap-6">
          <span className="flex items-center gap-2">
            <FiClock className="text-[#B08D57]" /> Δευ – Παρ, 09:00 – 19:00
          </span>
          <span className="flex items-center gap-2">
            <FiPhone className="text-[#B08D57]" /> +30 210 000 0000
          </span>
        </span>
      </div>
    </div>

    <header className="sticky top-0 z-20 bg-[#F6F2EA]/95 backdrop-blur border-b border-[#0E1A2B]/10">
      <div className={`${wrap} h-[84px] flex items-center justify-between`}>
        <a href="#" className="leading-none">
          <span className="block whitespace-nowrap text-[19px] cq-sm:text-[24px] tracking-[0.06em]" style={serif}>
            ΚΑΛΛΕΡΓΗ <span className="text-[#B08D57]">&</span> ΣΥΝΕΡΓΑΤΕΣ
          </span>
          <span className="block mt-1.5 text-[10.5px] tracking-[0.28em] uppercase text-[#5C6574]">
            Δικηγορική Εταιρεία · Από το 1998
          </span>
        </a>
        <nav className="hidden cq-xl:flex items-center gap-7 text-[14.5px] text-[#2A3647]">
          {["Η Εταιρεία", "Τομείς Δικαίου", "Συνεργάτες", "Επικοινωνία"].map((l) => (
            <a key={l} href="#" className="whitespace-nowrap hover:text-[#B08D57] transition-colors">
              {l}
            </a>
          ))}
        </nav>
        <a href="#" className="hidden cq-xl:inline-flex whitespace-nowrap border border-[#B08D57] text-[#0E1A2B] text-[14px] px-5 py-3 hover:bg-[#B08D57] hover:text-white transition-colors">
          Ραντεβού συμβουλευτικής
        </a>
        <FiMenu size={24} className="cq-xl:hidden" aria-hidden="true" />
      </div>
    </header>

    <section className="relative">
      <div className="grid cq-lg:grid-cols-[1.1fr,1fr] min-h-[600px]">
        <div className="bg-[#0E1A2B] text-[#F6F2EA] flex items-center order-2 cq-lg:order-1">
          <div className="px-5 cq-md:px-10 cq-lg:pl-[max(40px,calc((100cqw-1160px)/2+40px))] cq-lg:pr-16 py-16 max-w-[700px]">
            <p className="text-[12px] tracking-[0.3em] uppercase text-[#B08D57]">Εταιρικό · Αστικό · Ακίνητα</p>
            <h1 className="mt-6 text-[42px] cq-md:text-[56px] cq-lg:text-[62px] leading-[1.04]" style={serif}>
              Νομική καθοδήγηση με σαφήνεια, συνέπεια και <em className="text-[#D9BE8C]">διακριτικότητα</em>.
            </h1>
            <p className="mt-6 text-[16.5px] leading-[1.75] text-[#F6F2EA]/70 max-w-[480px]">
              Εκπροσωπούμε ιδιώτες και επιχειρήσεις για περισσότερα από 25 χρόνια, με προσωπική
              ενασχόληση σε κάθε υπόθεση — από την πρώτη συνάντηση έως την τελική λύση.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <a href="#" className="bg-[#B08D57] text-[#0E1A2B] font-medium px-7 py-4 hover:bg-[#C9A56C] transition-colors">
                Κλείστε συνάντηση
              </a>
              <a href="#" className="inline-flex items-center gap-2 text-[15px] border-b border-[#F6F2EA]/40 pb-1">
                Οι τομείς μας <FiArrowRight />
              </a>
            </div>
          </div>
        </div>
        <div className="relative order-1 cq-lg:order-2 h-[320px] cq-lg:h-auto">
          <DemoImage img={img.hero} w={640} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1A2B]/50 to-transparent" />
        </div>
      </div>
    </section>

    <section className={`${wrap} relative z-10 -mt-0 cq-lg:-mt-12`}>
      <div className="bg-white grid grid-cols-2 cq-lg:grid-cols-4 divide-[#0E1A2B]/10 cq-lg:divide-x border border-[#0E1A2B]/10 shadow-[0_30px_60px_-40px_rgba(14,26,43,0.5)]">
        {[
          ["25+", "χρόνια παρουσίας"],
          ["1.800+", "υποθέσεις"],
          ["24 ώρες", "χρόνος απάντησης"],
          ["EL · EN · DE", "γλώσσες εξυπηρέτησης"],
        ].map(([v, l]) => (
          <div key={l} className="p-6 cq-md:p-8">
            <p className="text-[30px] cq-md:text-[36px]" style={serif}>
              {v}
            </p>
            <p className="text-[13px] text-[#5C6574] mt-1 uppercase tracking-[0.12em]">{l}</p>
          </div>
        ))}
      </div>
    </section>

    <Full>
      <section className={`${wrap} py-20 cq-lg:py-28`}>
        <div className="grid cq-lg:grid-cols-[1fr,2fr] gap-12">
          <div>
            <p className="text-[12px] tracking-[0.3em] uppercase text-[#B08D57]">Τομείς δικαίου</p>
            <h2 className="mt-4 text-[38px] cq-md:text-[46px] leading-[1.08]" style={serif}>
              Εξειδίκευση εκεί που μετράει.
            </h2>
            <p className="mt-5 text-[15.5px] leading-[1.75] text-[#4A5464]">
              Κάθε τομέας έχει υπεύθυνο εταίρο, ώστε να γνωρίζετε πάντα ποιος χειρίζεται την υπόθεσή σας.
            </p>
          </div>
          <div className="grid cq-md:grid-cols-2 border-t border-[#0E1A2B]/15">
            {areas.map(([n, title, text]) => (
              <div key={title} className="group border-b border-[#0E1A2B]/15 py-7 cq-md:pr-8 cq-md:[&:nth-child(odd)]:border-r cq-md:[&:nth-child(even)]:pl-8">
                <span className="text-[#B08D57] text-[18px]" style={serif}>
                  {n}.
                </span>
                <h3 className="mt-2 text-[24px] group-hover:text-[#B08D57] transition-colors" style={serif}>
                  {title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-[1.7] text-[#4A5464]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className={`${wrap} py-20 cq-lg:py-28 grid cq-lg:grid-cols-2 gap-14 items-center`}>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <DemoImage img={img.justice} w={520} />
            </div>
            <div className="absolute -bottom-6 -right-2 cq-md:-right-6 bg-[#0E1A2B] text-[#F6F2EA] p-6 max-w-[260px]">
              <FiShield className="text-[#B08D57]" size={22} />
              <p className="mt-3 text-[18px] leading-[1.35]" style={serif}>
                Απόλυτη εχεμύθεια σε κάθε στάδιο της συνεργασίας.
              </p>
            </div>
          </div>
          <div>
            <p className="text-[12px] tracking-[0.3em] uppercase text-[#B08D57]">Η εταιρεία</p>
            <h2 className="mt-4 text-[38px] cq-md:text-[46px] leading-[1.08]" style={serif}>
              Παράδοση στη νομική σκέψη, σύγχρονη στην εξυπηρέτηση.
            </h2>
            <p className="mt-6 text-[16px] leading-[1.8] text-[#4A5464]">
              Η εταιρεία ιδρύθηκε το 1998 με μια απλή αρχή: κάθε πελάτης αξίζει ξεκάθαρες απαντήσεις και
              έναν συνεργάτη που γνωρίζει την υπόθεσή του σε βάθος. Σήμερα μια ομάδα 14 δικηγόρων
              υποστηρίζει ιδιώτες, οικογενειακές επιχειρήσεις και διεθνείς εταιρείες.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6 text-[14.5px]">
              {["Γραπτή εκτίμηση κόστους", "Σταθερός υπεύθυνος δικηγόρος", "Ενημέρωση σε κάθε εξέλιξη", "Συναντήσεις και online"].map((t) => (
                <p key={t} className="border-l-2 border-[#B08D57] pl-3">
                  {t}
                </p>
              ))}
            </div>
            <p className="mt-10 text-[30px] italic text-[#0E1A2B]/80" style={serif}>
              Ν. Καλλέργης
            </p>
            <p className="text-[12px] tracking-[0.2em] uppercase text-[#5C6574]">Ιδρυτικός εταίρος</p>
          </div>
        </div>
      </section>

      <section className={`${wrap} py-20 cq-lg:py-28`}>
        <div className="flex flex-col cq-md:flex-row cq-md:items-end justify-between gap-4">
          <h2 className="text-[38px] cq-md:text-[46px] leading-[1.08]" style={serif}>
            Οι συνεργάτες μας
          </h2>
          <a href="#" className="inline-flex items-center gap-2 text-[15px] border-b border-[#0E1A2B]/30 pb-1 w-fit">
            Όλη η ομάδα <FiArrowRight />
          </a>
        </div>
        <div className="mt-12 grid cq-md:grid-cols-3 gap-8">
          {partners.map(([name, role, focus], i) => (
            <div key={name}>
              <div className="aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                <DemoImage img={img.partners[i]} w={360} />
              </div>
              <h3 className="mt-5 text-[24px]" style={serif}>
                {name}
              </h3>
              <p className="text-[12px] tracking-[0.2em] uppercase text-[#B08D57] mt-1">{role}</p>
              <p className="text-[14.5px] text-[#4A5464] mt-2">{focus}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#E9E2D2]">
        <div className={`${wrap} py-20 text-center max-w-[900px]`}>
          <p className="text-[64px] leading-none text-[#B08D57]" style={serif}>
            “
          </p>
          <blockquote className="text-[26px] cq-md:text-[34px] leading-[1.35]" style={serif}>
            Μας εξήγησαν κάθε επιλογή με απλά λόγια και κράτησαν τον λόγο τους σε κάθε προθεσμία. Η
            μεταβίβαση της οικογενειακής μας επιχείρησης έγινε χωρίς άγχος.
          </blockquote>
          <p className="mt-6 text-[13px] tracking-[0.2em] uppercase text-[#5C6574]">Πελάτης εταιρικού τμήματος</p>
        </div>
      </section>

      <section className="bg-[#0E1A2B] text-[#F6F2EA]">
        <div className={`${wrap} py-20 cq-lg:py-24 grid cq-lg:grid-cols-[1fr,1.1fr] gap-14`}>
          <div>
            <p className="text-[12px] tracking-[0.3em] uppercase text-[#B08D57]">Πρώτη συνάντηση</p>
            <h2 className="mt-4 text-[38px] cq-md:text-[46px] leading-[1.08]" style={serif}>
              Πείτε μας για την υπόθεσή σας.
            </h2>
            <p className="mt-5 text-[16px] leading-[1.75] text-[#F6F2EA]/70 max-w-[420px]">
              Θα επικοινωνήσουμε μαζί σας εντός μίας εργάσιμης ημέρας για να ορίσουμε συνάντηση στο
              γραφείο ή μέσω βιντεοκλήσης.
            </p>
            <div className="mt-8 flex flex-col gap-3 text-[15px] text-[#F6F2EA]/80">
              <span className="flex items-center gap-3">
                <FiMapPin className="text-[#B08D57]" /> Βασιλίσσης Σοφίας 00, Αθήνα
              </span>
              <span className="flex items-center gap-3">
                <FiPhone className="text-[#B08D57]" /> +30 210 000 0000
              </span>
            </div>
          </div>
          <div className="bg-[#F6F2EA] text-[#0E1A2B] p-7 cq-md:p-10 grid cq-md:grid-cols-2 gap-5">
            {["Ονοματεπώνυμο", "Τηλέφωνο", "Email", "Τομέας ενδιαφέροντος"].map((f, i) => (
              <div key={f}>
                <p className="text-[12px] tracking-[0.14em] uppercase text-[#5C6574]">{f}</p>
                <div className="mt-2 h-12 border-b border-[#0E1A2B]/25 flex items-center text-[15px] text-[#0E1A2B]/40">
                  {i === 3 ? "Ακίνητα & Μεταβιβάσεις ▾" : ""}
                </div>
              </div>
            ))}
            <div className="cq-md:col-span-2">
              <p className="text-[12px] tracking-[0.14em] uppercase text-[#5C6574]">Σύντομη περιγραφή</p>
              <div className="mt-2 h-24 border-b border-[#0E1A2B]/25" />
            </div>
            <a href="#" className="cq-md:col-span-2 text-center bg-[#0E1A2B] text-[#F6F2EA] py-4 font-medium">
              Αποστολή αιτήματος
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#0A1320] text-[#F6F2EA]/60 text-[13px]">
        <div className={`${wrap} py-10 flex flex-col cq-md:flex-row justify-between gap-4`}>
          <p style={serif} className="text-[18px] text-[#F6F2EA]">
            Καλλέργη & Συνεργάτες
          </p>
          <p>Όροι χρήσης · Πολιτική απορρήτου · Cookies</p>
        </div>
        <div className={`${wrap} pb-8`}>
          <DemoDisclaimer />
        </div>
      </footer>
    </Full>
  </DemoRoot>
);

export default ProfessionalServicesDemo;
