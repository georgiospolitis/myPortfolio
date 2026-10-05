// Typefaces used by the demos — all with Greek support. Loaded once, only when
// the first demo renders, so the rest of the portfolio doesn't pay for them.
const FONT_URL =
  "https://fonts.googleapis.com/css2" +
  "?family=Manrope:wght@400;500;600;700;800" +
  "&family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400" +
  "&family=Syne:wght@500;600;700;800" +
  "&family=Commissioner:wght@200;300;400;500" +
  "&family=Noto+Serif+Display:ital,wght@0,400;0,500;0,600;1,400" +
  "&family=Literata:ital,opsz,wght@0,7..72,400;0,7..72,500;1,7..72,400" +
  "&family=Sofia+Sans:wght@400;500;600;700;800" +
  "&family=Geologica:wght@300;400;500;600;700" +
  "&display=swap";

let loaded = false;

export const loadDemoFonts = () => {
  if (loaded || typeof document === "undefined") return;
  loaded = true;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = FONT_URL;
  document.head.appendChild(link);
};

export const fonts = {
  manrope: "'Manrope', 'Inter', sans-serif",
  garamond: "'EB Garamond', Georgia, serif",
  syne: "'Syne', 'Inter', sans-serif",
  commissioner: "'Commissioner', 'Inter', sans-serif",
  notoDisplay: "'Noto Serif Display', Georgia, serif",
  literata: "'Literata', Georgia, serif",
  sofia: "'Sofia Sans', 'Inter', sans-serif",
  geologica: "'Geologica', 'Inter', sans-serif",
  inter: "'Inter', sans-serif",
};
