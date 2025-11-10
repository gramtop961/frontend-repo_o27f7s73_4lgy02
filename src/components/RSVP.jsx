import { useState } from "react";
import { motion } from "framer-motion";

export default function RSVP() {
  const [status, setStatus] = useState("hadir");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="rsvp" className="relative py-20 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-amber-900">Konfirmasi Kehadiran</h2>
          <p className="mt-2 text-amber-800/80">Mohon konfirmasi kehadiran Anda untuk kelancaran acara.</p>
        </div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-amber-200 bg-amber-50/50 p-6"
        >
          <label className="block text-sm font-medium text-amber-900">Nama Lengkap</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 w-full rounded-lg border border-amber-300 bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="Masukkan nama Anda"
          />

          <div className="mt-4">
            <label className="block text-sm font-medium text-amber-900">Kehadiran</label>
            <div className="mt-2 flex gap-4">
              {[
                { value: "hadir", label: "Hadir" },
                { value: "tidak", label: "Tidak Hadir" },
              ].map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setStatus(opt.value)}
                  className={`rounded-full px-4 py-2 border ${
                    status === opt.value
                      ? "bg-amber-700 text-white border-amber-700"
                      : "border-amber-300 text-amber-800 bg-white"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-amber-900">Ucapan</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="mt-1 w-full rounded-lg border border-amber-300 bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Tuliskan doa dan harapan untuk kedua mempelai"
            />
          </div>

          <div className="mt-6 flex items-center justify-between">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-amber-700 text-white px-6 py-3 font-medium shadow-lg shadow-amber-700/20 hover:bg-amber-800 transition"
            >
              Kirim Konfirmasi
            </button>
            {submitted && (
              <span className="text-amber-800/80 text-sm">Terima kasih! Konfirmasi Anda telah tercatat.</span>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
