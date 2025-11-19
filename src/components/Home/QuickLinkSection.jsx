import { motion } from "framer-motion";
import { FolderKanban, Info, Mail, Newspaper } from "lucide-react";
import { Link } from "react-router-dom";

const links = [
  {
    icon: Info,
    title: "Sobre",
    text: "Conheça nossa história e missão.",
    path: "/about",
  },
  {
    icon: Newspaper,
    title: "Notícias",
    text: "Fique por dentro das novidades.",
    path: "/news",
  },
  {
    icon: FolderKanban,
    title: "Projetos",
    text: "Veja os trabalhos de nossos alunos.",
    path: "/projects",
  },
  {
    icon: Mail,
    title: "Contatos",
    text: "Entre em contato conosco.",
    path: "/contacts",
  },
];

export default function QuickLinkSection() {
  return (
    <section className="w-full bg-linear-to-b from-neutral-200 to-neutral-300">
      <div className="xl:max-w-6xl mx-auto px-6 text-center bg-linear-to-r from-[#fa8b3cd7] to-[#f97316] rounded-t-2xl py-16">
        <motion.h2 className="text-3xl font-bold text-gray-700 mb-10">
          Acesso Rápido
        </motion.h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-9 text-center px-8">
          {links.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className="bg-blue-400 rounded-2xl shadow hover:shadow-lg transition-all"
            >
              <Link to={item.path} className="p-6">
                <item.icon className="w-10 h-10 text-white mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-neutral-50 text-sm">{item.text}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
