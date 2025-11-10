import { Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden min-h-[90vh] flex items-center justify-center bg-amber-50">
      {/* Batik-inspired background pattern */}
      <svg
        aria-hidden
        className="absolute inset-0 h-full w-full opacity-10 text-amber-800"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="batik" width="80" height="80" patternUnits="userSpaceOnUse">
            <g fill="currentColor">
              <circle cx="10" cy="10" r="2"/>
              <circle cx="40" cy="40" r="2"/>
              <circle cx="70" cy="70" r="2"/>
              <path d="M0 40 Q 20 20 40 40 T 80 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              <path d="M40 0 Q 60 20 40 40 T 40 80" fill="none" stroke="currentColor" strokeWidth="1"/>
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#batik)" />
      </svg>

      {/* Soft gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-amber-50/90 via-white/60 to-amber-50/90" />

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full bg-amber-100 text-amber-800 px-4 py-2 text-sm font-medium tracking-wide"
        >
          <Heart className="h-4 w-4" />
          Undangan Pernikahan
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 font-['Mona_Sans',Inter,ui-sans-serif] text-5xl md:text-7xl font-semibold text-amber-900"
        >
          Anisa & Bagas
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-4 text-lg md:text-xl text-amber-800/80"
        >
          Sabtu, 21 Desember 2025 • Jakarta
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <a
            href="#details"
            className="inline-flex items-center justify-center rounded-full bg-amber-700 text-white px-6 py-3 font-medium shadow-lg shadow-amber-700/20 hover:bg-amber-800 transition"
          >
            Lihat Detail Acara
          </a>
          <a
            href="#rsvp"
            className="inline-flex items-center justify-center rounded-full border border-amber-700 text-amber-800 px-6 py-3 font-medium hover:bg-amber-50 transition"
          >
            Konfirmasi Kehadiran
          </a>
        </motion.div>
      </div>
    </section>
  );
}
