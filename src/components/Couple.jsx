import { motion } from "framer-motion";

export default function Couple() {
  return (
    <section id="couple" className="relative py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-amber-900">Mempelai</h2>
          <p className="mt-2 text-amber-800/80">Dengan penuh suka cita kami mengundang Anda untuk hadir.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Bride */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-amber-200 bg-amber-50/50 p-6 text-center"
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-amber-200 to-amber-400 shadow-inner" />
            <h3 className="mt-4 text-2xl font-semibold text-amber-900">Anisa Putri</h3>
            <p className="text-amber-800/80">Putri dari Bpk. Ahmad & Ibu Sari</p>
          </motion.div>

          {/* Groom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-amber-200 bg-amber-50/50 p-6 text-center"
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-amber-200 to-amber-400 shadow-inner" />
            <h3 className="mt-4 text-2xl font-semibold text-amber-900">Bagas Pratama</h3>
            <p className="text-amber-800/80">Putra dari Bpk. Budi & Ibu Ratna</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
