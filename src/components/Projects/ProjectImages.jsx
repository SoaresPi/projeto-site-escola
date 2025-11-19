import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectImages({ images = [], title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }
  };
  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="relative w-full h-full items-center justify-center bg-gray-50 dark:bg-gray-900 rounded-b-2xl overflow-hidden">
      {/* Imagem atual com animação */}
      <AnimatePresence mode="wait">
        <motion.img
          key={images[currentIndex]}
          src={images[currentIndex]}
          alt={`${title} - imagem ${currentIndex + 1}`}
          className="w-full h-full object-cover"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
        />
      </AnimatePresence>

      {/* Anterior */}
      {images.length > 1 && (
        <button
          onClick={prevImage}
          disabled={currentIndex === 0}
          className={`absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full shadow transition ${
            currentIndex === 0
              ? "bg-transparent text-transparent"
              : "bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700"
          }`}
        >
          <ChevronLeft size={20} />
        </button>
      )}

      {/* Posterior */}
      {images.length > 1 && (
        <button
          onClick={nextImage}
          disabled={currentIndex === images.length - 1}
          className={`absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full shadow transition ${
            currentIndex === images.length - 1
              ? "bg-transparent text-transparent"
              : "bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700"
          }`}
        >
          <ChevronRight size={20} />
        </button>
      )}

      {/* Contador */}
      <div className="absolute bottom-3 right-4 bg-white/80 dark:bg-gray-800/80 text-xs px-2 py-1 rounded-full shadow-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
