import { Calendar, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function Details() {
  return (
    <section id="details" className="relative py-20 bg-amber-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-amber-900">Rangkaian Acara</h2>
          <p className="mt-2 text-amber-800/80">Dengan nuansa budaya Indonesia yang hangat dan anggun.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Akad Nikah */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-amber-200 bg-white p-6"
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0 rounded-xl bg-amber-100 p-3 text-amber-800">
                <Calendar className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-900">Akad Nikah</h3>
                <p className="mt-1 text-amber-800/80 flex items-center gap-2"><Clock className="h-4 w-4"/> 09.00 WIB</p>
                <p className="text-amber-800/80 flex items-center gap-2"><MapPin className="h-4 w-4"/> Balai Adat Nusantara, Jakarta</p>
              </div>
            </div>
          </motion.div>

          {/* Resepsi */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-amber-200 bg-white p-6"
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0 rounded-xl bg-amber-100 p-3 text-amber-800">
                <Calendar className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-900">Resepsi</h3>
                <p className="mt-1 text-amber-800/80 flex items-center gap-2"><Clock className="h-4 w-4"/> 11.00 - 14.00 WIB</p>
                <p className="text-amber-800/80 flex items-center gap-2"><MapPin className="h-4 w-4"/> Balai Adat Nusantara, Jakarta</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-8 rounded-2xl overflow-hidden border border-amber-200">
          <iframe
            title="Lokasi"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.785802579839!2d106.827153!3d-6.160209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f53f7a3ad8a9%3A0x7c86f5d2b09c4f9!2sJakarta!5e0!3m2!1sen!2sid!4v1710000000000"
            width="100%"
            height="320"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
