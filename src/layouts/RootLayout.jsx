import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useLoading } from "../context/LoadingContext";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LoadingScreen } from "../pages/assistant/index";

export default function RootLayout() {
  const { loading, setLoading } = useLoading();
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    window.scrollTo({ top: 0, behavior: "smooth" });

    const minLoadTime = 400;
    const start = Date.now();

    const handleReady = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, minLoadTime - elapsed);

      setTimeout(() => setLoading(false), remaining);
    };

    if (document.readyState === "complete") {
      handleReady();
    } else {
      window.addEventListener("load", handleReady);
    }

    return () => window.removeEventListener("load", handleReady);
  }, [location.pathname, setLoading]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      <LoadingScreen isVisible={loading} />
      <Navbar />

      <main
        className={`grow transition-opacity duration-500 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        <AnimatePresence mode="wait">
          {!loading && (
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Outlet />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
