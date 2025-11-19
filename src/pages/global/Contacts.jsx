import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { useState } from "react";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setStatus("succes");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
    } finally {
      setIsSending(false);
    }

    setTimeout(() => {
      setIsSending(false);
      setStatus(null);
    }, 4000);
  };

  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Hero Section */}
      <section className="relative bg-linear-to-t from-neutral-200 to-amber-50 py-24 px-6 text-center overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4 text-orange-700/80"
        >
          Entre em Contato
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600"
        >
          Fale conosco, tire suas dúvidas ou encie sugestões. Teremos prazer em
          ajudar você!
        </motion.p>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 md:px-16 lg:px-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <iframe
              title="School map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.6138328388297!2d-49.237877000000005!3d-25.3842557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce666b96f9827%3A0x9158b0e7190d955d!2sR.%20Maria%20Geronasso%20do%20Ros%C3%A1rio%20-%20Boa%20Vista%2C%20Curitiba%20-%20PR%2C%2082560-540!5e0!3m2!1spt-BR!2sbr!4v1762437525705!5m2!1spt-BR!2sbr"
              className="w-full h-80 md:h-96"
              style={{ border: "none" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <label className="block text-lg font-medium mb-2">Nome</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-lg font-medium mb-2">E-mail</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-lg font-medium mb-2">Mensagem</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              disabled={isSending}
              className={`w-full font-semibold py-3 rounded-lg transition-colors ${
                isSending
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              {isSending ? "Enviando mensagem..." : "Enviar Mensagem"}
            </motion.button>

            {status === "succes" && (
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="text-green-600 text-center font-medium mt-4"
              >
                ✅ Mensagem enviada com sucesso!
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="text-red-600 text-center font-medium mt-4"
              >
                ❌ Ocorreu um erro ao enviar. Tente novamente.
              </motion.p>
            )}
          </motion.form>
        </div>
      </section>

      {/* Redes Sociais */}
      <section className="bg-orange-500 dark:bg-orange-700 text-white dark:text-amber-300/80 text-center py-16 font-semibold">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-8"
        >
          Nossas Redes
        </motion.h2>

        <div className="flex justify-center gap-10 text-3xl">
          {[
            { icon: <FaWhatsapp />, color: "hover:text-green-400" },
            { icon: <FaFacebook />, color: "hover:text-blue-400" },
            { icon: <FaInstagram />, color: "hover:text-pink-400" },
            { icon: <FaEnvelope />, color: "hover:text-red-500" },
          ].map((item, index) => (
            <motion.a
              key={index}
              href="#"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`p-3 bg-neutral-100 dark:bg-gray-800 rounded-full text-gray-800 dark:text-white transition-all duration-300 ${item.color}`}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </section>
    </main>
  );
}
