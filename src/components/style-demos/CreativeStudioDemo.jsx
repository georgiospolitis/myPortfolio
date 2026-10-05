import { FiArrowUpRight, FiPlay } from "react-icons/fi";

import { DemoDisclaimer, DemoImage, DemoRoot, Full } from "./kit";
import { fonts } from "./fonts";
import { images } from "./images";

// KYMA Studio — fictional creative/design studio. Black, off-white, signal orange and lime.
const img = images.creative;
const wrap = "mx-auto w-full max-w-[1240px] px-5 cq-md:px-10";

const work = [
  { title: "Ελαία", type: "Ταυτότητα & packaging", year: "2026", span: "cq-md:col-span-7", ratio: "aspect-[4/3]" },
  { title: "Metro Festival", type: "Καμπάνια & motion", year: "2025", span: "cq-md:col-span-5", ratio: "aspect-[4/5] cq-md:aspect-auto cq-md:h-full" },
  { title: "Αλάτι & Μέλι", type: "Packaging", year: "2025", span: "cq-md:col-span-4", ratio: "aspect-square" },
  { title: "Typeworks", type: "Εκθεση τυπογραφίας", year: "2024", span: "cq-md:col-span-4", ratio: "aspect-square" },
  { title: "Nautilus", type: "Ψηφιακή εμπειρία", year: "2024", span: "cq-md:col-span-4", ratio: "aspect-square" },
];

const services = [
  ["01", "Branding & ταυτότητα", "Στρατηγική, όνομα, λογότυπο, τυπογραφία, οδηγοί χρήσης."],
  ["02", "Ιστοσελίδες & ψηφιακά", "Art direction, UI, ιστοσελίδες που ξεχωρίζουν και πουλάνε."],
  ["03", "Motion & video", "Animated identities, social content, showreels."],
  ["04", "Καμπάνιες", "Ιδέα, φωτογράφιση, εφαρμογές σε κάθε κανάλι."],
];

const CreativeStudioDemo = () => (
  <DemoRoot font={fonts.syne} className="bg-[#0D0D0D] text-[#F2F0EA]">
    <header className="sticky top-0 z-20 bg-[#0D0D0D]/85 backdrop-blur">
      <div className={`${wrap} h-[78px] flex items-center justify-between`}>
        <a href="#" className="text-[26px] font-extrabold tracking-[-0.04em]">
          KYMA<span className="text-[#FF4D1F]">/</span>
        </a>
        <nav className="hidden cq-md:flex items-center gap-9 text-[15px] font-medium">
          {["Έργα", "Studio", "Υπηρεσίες", "Journal"].map((l) => (
            <a key={l} href="#" className="hover:text-[#D4FF3F] transition-colors">
              {l}
            </a>
          ))}
        </nav>
        <a href="#" className="bg-[#D4FF3F] text-[#0D0D0D] text-[14px] font-bold px-5 py-3 rounded-full">
          Ας μιλήσουμε
        </a>
      </div>
    </header>

    <section className={`${wrap} pt-10 cq-lg:pt-16`}>
      <div className="flex flex-col cq-lg:flex-row cq-lg:items-end justify-between gap-6">
        <p className="text-[13px] uppercase tracking-[0.2em] text-[#F2F0EA]/60">
          Branding · Web · Motion — Αθήνα, από το 2016
        </p>
        <p className="text-[15px] text-[#F2F0EA]/70 max-w-[360px] leading-[1.6] font-medium">
          Ανεξάρτητο δημιουργικό studio για brands με άποψη. Λιγότερος θόρυβος, περισσότερος χαρακτήρας.
        </p>
      </div>
      <h1 className="mt-8 text-[clamp(29px,8cqw,104px)] font-extrabold leading-[0.9] tracking-[-0.05em] uppercase">
        Φτιάχνουμε
        <br />
        brands που
        <br />
        <span className="inline-block align-middle mr-3 cq-md:mr-5 w-[72px] h-[30px] cq-md:w-[180px] cq-md:h-[64px] cq-lg:w-[250px] cq-lg:h-[88px] rounded-full overflow-hidden -translate-y-1">
          <DemoImage img={img.work[0]} w={250} />
        </span>
        <span className="text-[#FF4D1F]">μένουν.</span>
      </h1>
      <div className="relative mt-12 cq-lg:mt-16 h-[300px] cq-md:h-[460px] rounded-[28px] overflow-hidden">
        <DemoImage img={img.hero} w={1200} />
        <span className="absolute left-6 bottom-6 cq-md:left-10 cq-md:bottom-10 flex items-center gap-3 bg-[#F2F0EA] text-[#0D0D0D] rounded-full pl-2 pr-6 py-2 font-bold text-[15px]">
          <span className="w-11 h-11 rounded-full bg-[#FF4D1F] text-white grid place-items-center">
            <FiPlay />
          </span>
          Showreel 2026
        </span>
        <span className="hidden cq-md:grid absolute right-10 top-10 w-32 h-32 rounded-full bg-[#D4FF3F] text-[#0D0D0D] place-items-center text-center text-[13px] font-bold leading-tight rotate-12">
          42 brands
          <br />
          9 βραβεία
        </span>
      </div>
    </section>

    <div className="mt-16 bg-[#FF4D1F] text-[#0D0D0D] overflow-hidden -rotate-1 scale-[1.02]">
      <p className="py-4 whitespace-nowrap text-[26px] cq-md:text-[34px] font-extrabold uppercase tracking-[-0.02em]">
        Branding ✺ Web Design ✺ Motion ✺ Art Direction ✺ Packaging ✺ Branding ✺ Web Design ✺ Motion ✺
      </p>
    </div>

    <Full>
      <section className={`${wrap} py-24`}>
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-[44px] cq-md:text-[72px] font-extrabold uppercase tracking-[-0.04em] leading-[0.9]">
            Επιλεγμένα
            <br />
            έργα <span className="text-[#D4FF3F]">(24)</span>
          </h2>
          <a href="#" className="hidden cq-md:inline-flex items-center gap-2 border-b-2 border-[#F2F0EA] pb-1 font-bold">
            Όλα τα έργα <FiArrowUpRight />
          </a>
        </div>
        <div className="mt-14 grid cq-md:grid-cols-12 gap-6">
          {work.map((w, i) => (
            <a key={w.title} href="#" className={`group ${w.span} flex flex-col`}>
              <div className={`relative overflow-hidden rounded-[20px] ${w.ratio} flex-1`}>
                <DemoImage img={img.work[i]} w={700} className="transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#F2F0EA] text-[#0D0D0D] grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <FiArrowUpRight size={20} />
                </span>
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <h3 className="text-[24px] font-bold tracking-[-0.02em]">{w.title}</h3>
                <p className="text-[14px] text-[#F2F0EA]/60">
                  {w.type} · {w.year}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-[#F2F0EA] text-[#0D0D0D] rounded-t-[40px]">
        <div className={`${wrap} py-24`}>
          <div className="grid cq-lg:grid-cols-[1fr,1.6fr] gap-12">
            <h2 className="text-[44px] cq-md:text-[64px] font-extrabold uppercase tracking-[-0.04em] leading-[0.92]">
              Τι
              <br />
              κάνουμε
            </h2>
            <div className="border-t-2 border-[#0D0D0D]">
              {services.map(([n, title, text]) => (
                <a key={n} href="#" className="group grid grid-cols-[48px,1fr,auto] cq-md:grid-cols-[80px,1fr,1fr,auto] items-center gap-4 py-7 border-b-2 border-[#0D0D0D] hover:bg-[#D4FF3F] hover:px-4 transition-all">
                  <span className="text-[15px] font-bold">{n}</span>
                  <span className="text-[24px] cq-md:text-[32px] font-bold tracking-[-0.03em]">{title}</span>
                  <span className="hidden cq-md:block text-[15px] text-[#0D0D0D]/60 font-medium">{text}</span>
                  <FiArrowUpRight size={26} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F2F0EA] text-[#0D0D0D]">
        <div className={`${wrap} pb-24 grid cq-lg:grid-cols-2 gap-10 items-center`}>
          <div className="rounded-[28px] overflow-hidden aspect-[4/3]">
            <DemoImage img={img.studio} w={620} />
          </div>
          <div>
            <p className="text-[28px] cq-md:text-[38px] font-bold leading-[1.15] tracking-[-0.03em]">
              Είμαστε 12 designers, developers και storytellers. Δουλεύουμε με λίγους πελάτες τη φορά —
              <span className="bg-[#FF4D1F] text-white px-2">για να δουλεύουμε καλά.</span>
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[["42", "brands"], ["9", "βραβεία"], ["12", "άνθρωποι"]].map(([v, l]) => (
                <div key={l} className="border-t-2 border-[#0D0D0D] pt-3">
                  <p className="text-[48px] font-extrabold tracking-[-0.04em]">{v}</p>
                  <p className="text-[14px] font-medium text-[#0D0D0D]/60">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`${wrap} py-24 text-center`}>
        <p className="text-[14px] uppercase tracking-[0.2em] text-[#F2F0EA]/60">Νέο project;</p>
        <h2 className="mt-6 text-[48px] cq-md:text-[96px] font-extrabold uppercase tracking-[-0.05em] leading-[0.9]">
          Ας φτιάξουμε
          <br />
          κάτι <span className="text-[#D4FF3F] italic">τολμηρό</span>.
        </h2>
        <a href="#" className="mt-10 inline-block text-[24px] cq-md:text-[36px] font-bold border-b-4 border-[#FF4D1F] pb-1">
          hello@kyma.studio
        </a>
      </section>

      <footer className="border-t border-[#F2F0EA]/15">
        <div className={`${wrap} py-8 flex flex-col cq-md:flex-row justify-between gap-3 text-[13px] text-[#F2F0EA]/60`}>
          <p>© 2026 KYMA Studio · Instagram · Behance · LinkedIn</p>
          <DemoDisclaimer />
        </div>
      </footer>
    </Full>
  </DemoRoot>
);

export default CreativeStudioDemo;
