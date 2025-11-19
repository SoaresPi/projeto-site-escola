import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ isVisible = true }) {
  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-gray-900 z-100"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <motion.div
            className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeInOut", delay: 0.2 }}
            className="mt-6 text-lg font-medium text-gray-600 dark:text-gray-300"
          >
            Carregando...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
