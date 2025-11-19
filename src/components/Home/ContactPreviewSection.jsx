import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactPreviewSection() {
  return (
    <section className="w-full bg-linear-to-b from-amber-800 via-amber-600 to-orange-600 text-white py-20">
      <div className="max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4">
            <Mail size={48} className="text-white/90" />
          </div>

          <h2 className="text-3xl font-bold mb-4">
            Quer saber mais sobre nossa escola?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Ficaremos felizes em ouvir você! Fale conosco para tirar dúvidas,
            conhecer nossos projetos ou propor parcerias.
          </p>
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              to="/contacts"
              className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-orange-50 transition-all duration-200"
            >
              Ir para Contato
            </Link>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
