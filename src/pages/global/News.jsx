import { motion } from "framer-motion";

const fakeNews = [
  {
    id: 1,
    title: "Feira Cultural movimenta a escola",
    desc: "Alunos apresentaram projetos criativos envolvendo arte, ciência e tecnologia.",
    date: "05/11/2025",
    img: "https://source.unsplash.com/800x550/?school,event",
  },
  {
    id: 2,
    title: "Novo laboratório de informática inaugurado",
    desc: "Espaço moderno com computadores atualizados para uso em aulas práticas.",
    date: "01/11/2025",
    img: "https://source.unsplash.com/800x550/?computer,lab",
  },
  {
    id: 3,
    title: "Equipe de Robótica avança no torneio estadual",
    desc: "Alunos conquistam vaga na fase final com um projeto inovador.",
    date: "28/10/2025",
    img: "https://source.unsplash.com/800x550/?robotics,technology",
  },
];

export default function News() {
  return (
    <main className="min-h-screen bg-neutral-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-orange-600 mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Notícias da Escola
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {fakeNews.map((news, i) => (
            <motion.div
              key={news.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={news.img}
                alt={news.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{news.date}</p>

                <h3 className="font-semibold text-lg text-orange-600 mb-2">
                  {news.title}
                </h3>

                <p className="text-gray-700 text-sm mb-4">{news.desc}</p>

                <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md text-sm transition">
                  Ler mais
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
