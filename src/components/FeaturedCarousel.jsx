import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function FeaturedCarousel({ items = [], delay = 3500 }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % items.length);
  };

  useEffect(() => {
    if (paused || items.length === 0) return;
    const timer = setInterval(() => {
      handleNext();
    }, delay);
    return () => clearInterval(timer);
  }, [paused, items, delay, index]);

  if (!items.length) {
    return (
      <div className="text-center text-gray-500 py-10">
        Nenhum destaque disponível.
      </div>
    );
  }

  return (
    <section className="w-full py-20 bg-linear-to-b from-orange-600 to-orange-900 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center px-4 relative">
        <motion.h2
          className="text-3xl font-bold text-[#fdc172] mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Destaques da Escola
        </motion.h2>

        <div className="relative flex items-center justify-center w-full bg-linear-to-b">
          {/* Botão Esquerdo */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-[#2a9cf8d8] hover:bg-[#2a9cf8] text-white p-3 rounded-full shadow-lg transition-all duration-200 cursor-pointer"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Slide principal */}
          <div className="relative w-full flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={items[index].id}
                className="max-w-md md:max-w-lg w-full rounded-2xl overflow-hidden shadow-2xl bg-white mx-auto"
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -40 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                <img
                  src={
                    items[index].img ||
                    "https://via.placeholder.com/400x200?text=Sem+Imagem"
                  }
                  alt={items[index].title}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="p-6 text-left">
                  <h3 className="text-lg font-semibold text-orange-600 mb-2">
                    {items[index].title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {items[index].desc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Botão Direito */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-[#2a9cf8d8] hover:bg-[#2a9cf8] text-white p-3 rounded-full shadow-lg transition-all duration-200 cursor-pointer"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center gap-2 mt-6">
          {items.map((_, i) => (
            <motion.div
              key={i}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                i === index ? "bg-orange-600" : "bg-gray-300"
              }`}
              onClick={() => setIndex(i)}
              animate={{
                scale: i === index ? 1.3 : 1,
                opacity: i === index ? 1 : 0.6,
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="mt-10"
        >
          <Link
            to="/projects"
            className="bg-amber-600 text-white font-semibold px-6 py-[8.5px] rounded-full shadow-md hover:bg-orange-400 transition"
          >
            Conheça nossos projetos
          </Link>
        </motion.button>
      </div>
    </section>
  );
}
