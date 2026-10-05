import { lazy } from "react";

// slug → demo homepage. Each demo is its own chunk, fetched the first time a
// card scrolls near the viewport (or a style is opened).
export const styleDemos = {
  "modern-business": lazy(() => import("./ModernBusinessDemo")),
  "professional-services": lazy(() => import("./ProfessionalServicesDemo")),
  "creative-agency": lazy(() => import("./CreativeStudioDemo")),
  "minimal-portfolio": lazy(() => import("./MinimalPortfolioDemo")),
  hospitality: lazy(() => import("./HospitalityDemo")),
  "beauty-wellness": lazy(() => import("./BeautyWellnessDemo")),
  ecommerce: lazy(() => import("./EcommerceDemo")),
  "real-estate": lazy(() => import("./RealEstateDemo")),
  "saas-technology": lazy(() => import("./SaasDemo")),
};

export { DemoProvider } from "./context";
export { loadDemoFonts } from "./fonts";
