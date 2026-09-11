import { Navbar, Hero, Services, Work, About, Process, CTA, Footer } from "./components";

const App = () => {
  return (
    <div className="relative bg-cream">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <About />
      <Process />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
