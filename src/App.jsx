import Hero from "./components/Hero";
import Couple from "./components/Couple";
import Details from "./components/Details";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-amber-900">
      {/* Simple top bar with Indonesian cultural accent */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-amber-100">
        <div className="container mx-auto px-6 max-w-6xl h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-block h-6 w-6 rounded-full bg-gradient-to-br from-amber-400 to-amber-600" />
            <span className="font-semibold tracking-wide">Anisa & Bagas</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-amber-800/80">
            <a href="#home" className="hover:text-amber-900">Beranda</a>
            <a href="#couple" className="hover:text-amber-900">Mempelai</a>
            <a href="#details" className="hover:text-amber-900">Acara</a>
            <a href="#rsvp" className="hover:text-amber-900">RSVP</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Couple />
        <Details />
        <RSVP />
      </main>

      <Footer />
    </div>
  );
}

export default App;
