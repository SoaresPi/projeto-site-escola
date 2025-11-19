import { motion } from "framer-motion";

export default function FeedbackSection() {
  const feedbacks = [
    {
      id: 1,
      name: "Maria Eduarda",
      role: "Aluna",
      img: "https://randomuser.me/api/portraits/women/79.jpg",
      message:
        "As aulas de Altas Habilidades mudaram minha forma de aprender. Estou mais confiante e criativa!",
    },
    {
      id: 2,
      name: "Prof. Claudenice de Souza",
      role: "Professor",
      img: "https://randomuser.me/api/portraits/women/32.jpg",
      message:
        "A proposta pedagógica incentiva o desenvolvimento integral dos alunos. É gratificante fazer parte disso.",
    },
    {
      id: 3,
      name: "Helena Lopez",
      role: "Responsável",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      message:
        "Meu filho ama participar das oficionas! Vejo o quanto ele cresceu em autonomia e raciocínio criativo",
    },
  ];

  return (
    <section className="py-20 w-full bg-white">
      <div className="max-w-6xl mx-auto text-center px-4">
        <motion.h2
          className="text-3xl font-bold text-[#5cb3fa] mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          O que dizem sobre nós
        </motion.h2>
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {feedbacks.map((feedback, index) => (
            <motion.div
              key={feedback.id}
              className="bg-neutral-100 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2 * index,
                ease: "easeInOut",
              }}
            >
              <img
                src={feedback.img}
                alt={feedback.name}
                className="w-20 h20 object-cover rounded-full mx-auto mb-4 border-4 border-orange-200"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feedback.name}
              </h3>
              <p className="text-sm text-blue-400 mb-3">{feedback.role}</p>
              <p className="text-gray-600 italic text-sm leading-relaxed">
                “{feedback.message}”
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
