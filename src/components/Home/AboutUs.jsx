import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="max-h-6xl w-full py-16 px-6 bg-neutral-100 xl:rounded-t-4xl">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-[#ff7b00] mb-6"
      >
        Sobre Nós
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.45, duration: 0.8 }}
        viewport={{ once: true }}
        className="text-gray-700 text-lg leading-relaxed"
      >
        Breve descrição sobre o programa de Altas Halbilidades e Superdotação
      </motion.p>

      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="mt-10"
      >
        <Link
          to="/about"
          className="bg-[#ffa24b] text-white font-semibold  px-6 py-[8.5px] rounded-full shadow-md hover:bg-orange-400 transition"
        >
          Saiba mais
        </Link>
      </motion.button>
    </div>
  );
}
