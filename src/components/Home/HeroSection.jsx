import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="w-full py-20 bg-linear-to-t from-neutral-200 to-amber-50">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold mb-4 text-[#ff7b00]"
      >
        Bem-vindo à Escola de Referência
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg md:text-2xl max-w-3xl mx-auto mb-8 text-gray-700"
      >
        Esse é o site da Sala de Recursos (Altas Habilidades e Superdotação) da
        Escola de Referência
      </motion.p>
    </section>
  );
}
