import { motion } from "framer-motion";
import { ArrowUpCircle } from "lucide-react";

export default function Team() {
  const members = [
    {
      name: "Jaqueline Bensi",
      role: "Coordenadora",
      image: "https://randomuser.me/api/portraits/women/40.jpg",
    },
    {
      name: "Claci",
      role: "Professora",
      image: "https://randomuser.me/api/portraits/women/79.jpg",
    },
    {
      name: "Claudenice Souza",
      role: "Professora",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "Andressa Keller",
      role: "Professora",
      image: "https://randomuser.me/api/portraits/women/54.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100">
      {/* Cabeçalho */}
      <section className="bg-linear-to-t from-neutral-200 to-blue-50 dark:from-gray-900 dark:to-[#002038] py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4 text-blue-700/80 dark:text-blue-300"
        >
          Nossa Equipe
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl max-w-2xl mx-auto"
        >
          Conheça os profissionais que controem, todos os dias, um ensino
          inovador e inspirador.
        </motion.p>
      </section>

      {/* Card da equipe */}
      <section className="py-20 px-0 md:px-0 max-w-full">
        <div className="flex flex-col">
          {members.map((member, index) => {
            const isEven = index % 2 === 1;

            return (
              <div key={member.name + index} className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 * index, duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Imagem - encostando na borda */}
                  <div
                    className={`w-full md:w-1/2 flex justify-center py-10 md:justify-${
                      isEven ? "end" : "start"
                    }`}
                  >
                    <img
                      src={member.image}
                      alt={`${member.name} — ${member.role}`}
                      className={`w-64 h-64 md:w-[400px] md:h-[400px] object-cover rounded-none md:rounded-r-2xl ${
                        isEven
                          ? "md:rounded-l-none md:rounded-r-2xl"
                          : "md:rounded-l-2xl md:rounded-r-none"
                      } shadow-lg hover:scale-[1.02] transition-transform duration-500`}
                    />
                  </div>

                  {/* Texto */}
                  <div className="w-full md:w-1/2 text-center md:text-left p-6 md:p-12">
                    <h3 className="text-2xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                      {member.name.split(" ")[0]} é um(a) profissional
                      comprometido(a) com o aprendizado e desenvolvimento dos
                      alunos, contribuindo para um ambiente escolar mais
                      acolhedor, criativo e inspirador.
                    </p>
                  </div>
                </motion.div>

                {/* Linha divisória */}
                {index < members.length - 1 && (
                  <motion.hr
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="border-t border-dashed border-gray-700 dark:border-gray-300 my-10 w-[90%] mx-auto"
                  />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Seção Motivacional final */}
      <section className="bg-orange-500 text-white text-center py-20 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Juntos, transformamos o futuro da educação
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg max-w-2xl mx-auto mb-8"
        >
          Nossa missão é construir um espaço onde o conhecimento floresce e os
          sonhos ganham forma.
        </motion.p>
        <motion.a
          href="#"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300"
        >
          <ArrowUpCircle size={22} />
          Voltar ao início
        </motion.a>
      </section>
    </main>
  );
}
