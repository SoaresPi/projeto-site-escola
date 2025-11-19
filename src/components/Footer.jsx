import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaEnvelope, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  const socials = [
    {
      id: 1,
      icon: <FaFacebook className="w-8 h-8" />,
      link: "#",
      color: "hover:bg-[#1877F2]",
    },
    {
      id: 2,
      icon: <FaInstagram className="w-8 h-8" />,
      link: "#",
      color: "hover:bg-[#E4405F]",
    },
    {
      id: 3,
      icon: <FaEnvelope className="w-8 h-8" />,
      link: "#",
      color: "hover:bg-[#EA4335]",
    },
  ];
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      {/* Seção Principal */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-10 relative">
        {/* Logo / Identidade */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <h2 className="text-2xl font-bold text-white mb-3">
            Escola de Referência
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Formando cidadãos criativos, éticos e preparados para o futuro.
          </p>

          {/* Newsletter */}
          <h3 className="text-xl font-semibold text-white mb-4">
            Receba nossas novidades
          </h3>
          <form className="flex">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="w-full p-2 rounded-l-md outline-none text-white bg-gray-800/75"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 px-4 rounded-r-md text-white duration-300"
            >
              Enviar
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:gap-12 gap-8"
        >
          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Links úteis
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Início", path: "/" },
                { name: "Sobre", path: "/about" },
                { name: "Projetos", path: "/projects" },
                { name: "Contatos", path: "/contacts" },
                { name: "Notícias", path: "/news" },
                { name: "Eventos", path: "/events" },
                { name: "Equipe", path: "/team" },
                { name: "Login", path: "/login" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-orange-500 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Contatos */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contatos</h3>
            <p className="text-sm text-gray-400">
              Rua Maria Geronasso do Rosário, 259 - Bairo Boa Vista
              <br />
              Curitiba - PR
              <br />
              <span className="block mt-2">📧 contato@escola.pr.gov.br</span>
              <span className="block">📞 (41) 91234-5678</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Redes sociais */}
          <h3 className="text-xl font-semibold text-white mb-4">
            Conecte-se conosco
          </h3>
          <div className="flex gap-4">
            {socials.map((s) => (
              <motion.a
                key={s.id}
                href={s.link}
                target="_blank"
                rel="noreferrer"
                className={`p-2 bg-gray-800 rounded-full transition-all duration-300 ${s.color}`}
                whileHover={{ y: -5, scale: 1.1 }}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Linha inferior */}
      <motion.div
        className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.9 }}
        viewport={{ once: true }}
      >
        © {new Date().getFullYear()} Escola de Referência. Todos os direitos
        reservados.
      </motion.div>
    </footer>
  );
}
