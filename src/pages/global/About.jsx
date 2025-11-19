import { motion } from "framer-motion";
import { Target, Star, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Hero Section */}
      <section className="relative bg-linear-to-t from-neutral-200 to-amber-50 text-white py-24 px-6 text-center overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4 text-orange-700/80"
        >
          Sobre Nossa Escola
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600"
        >
          Um espaço onde o conhecimento floresce, o talento é valorizado e o
          futuro é construído com propósito.
        </motion.p>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold mb-8 text-orange-600 dark:text-orange-400"
        >
          Nossa História
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg leading-relaxed max-w-3xl mx-auto"
        >
          Fundada com o compromisso de oferecer uma educação de qualidade, nossa
          escola nasceu da crença de que cada aluno possui potencial único. Ao
          longo dos anos, fortalecemos nossos pilares em torno da inovação
          pedagógica, do desenvolvimento humano e da formação integral. Hoje,
          somos referência em ensino moderno e acolhedor, promovendo o
          aprendizado por meio de experiências significativas e colaborativas.
        </motion.p>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 px-6 bg-linear-to-r from-blue-400 to-blue-600 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold mb-12 text-blue-200 dark:text-blue-700"
          >
            Missão, Visão e Valores
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <Target className="w-10 h-10 text-blue-600 mb-4" />,
                title: "Missão",
                text: "Promover a excelência acadêmica e humana, formando cidadãos críticos, éticos e criativos.",
              },
              {
                icon: <Star className="w-10 h-10 text-yellow-500 mb-4" />,
                title: "Visão",
                text: "Ser uma instituição de referência em inovação educacional e compromisso social.",
              },
              {
                icon: <Heart className="w-10 h-10 text-red-500 mb-4" />,
                title: "Valores",
                text: "Respeito, empatia, responsabilidade e amor pelo conhecimento guiam todas as nossas ações.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col items-center">
                  {item.icon}
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-base">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe (resumo) */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold mb-8 text-orange-700 dark:text-orange-400"
        >
          Nossa Equipe
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg leading-relaxed max-w-3xl mx-auto mb-10"
        >
          Cada projeto que realizamos é fruto da dedicação de profissionais que
          acreditam no poder transformador da educação. Nossa equipe é formada
          por educadores e colaboradores apaixonados pelo que fazem, sempre em
          busca de inspirar novas gerações.
          <br />
          <span className="block mt-4 text-orange-600 dark:text-orange-400 font-semibold">
            Venha conhecer quem torna tudo isso possível!
          </span>
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
            to="/team"
            className="bg-[#ffa24b] text-white font-semibold  px-6 py-[8.5px] rounded-full shadow-md hover:bg-orange-500 transition"
          >
            Conheça nossa equipe
          </Link>
        </motion.button>
      </section>

      {/* Contato */}
      <section className="py-20 px-6 text-center bg-linear-to-b from-[#0083ee] to-[#64c5fd] dark:bg-gray-800">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold mb-8 text-sky-200 dark:text-blue-700"
        >
          Ficou com alguma dúvida?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg text-white leading-relaxed max-w-3xl mx-auto mb-10"
        >
          Entre em contato conosco para tirar qualquer dúvida.
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
            to="/contacts"
            className="bg-[#005fad] text-white font-semibold  px-6 py-[8.5px] rounded-full shadow-md hover:bg-blue-900 transition"
          >
            Ir para Contatos
          </Link>
        </motion.button>
      </section>
    </main>
  );
}
