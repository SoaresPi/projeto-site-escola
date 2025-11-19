import { motion } from "framer-motion";
import { BookOpen, User, Lightbulb } from "lucide-react";

export default function OurMissionSection() {
  const pillars = [
    {
      id: 1,
      icon: <BookOpen className="w-10 h-10 text-orange-500" />,
      title: "Educação de Excelência",
      desc: "Formamos alunos com pesamento crítico e autonomia para o futuro.",
    },
    {
      id: 2,
      icon: <User className="w-10 h-10 text-orange-500" />,
      title: "Valores Humanos",
      desc: "Trabalhamos empatia, solidariedade e respeito em todas as ações.",
    },
    {
      id: 3,
      icon: <Lightbulb className="w-10 h-10 text-orange-500" />,
      title: "Inovação e Futuro",
      desc: "Incentivamos a criatividade e o uso da tecnologia na aprendizagem.",
    },
  ];
  return (
    <section className="w-full py-20 bg-gray-50 text-center relative z-10">
      <motion.h2
        className="text-3xl font-bold text-orange-600 mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Nossa Missão
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {pillars.map((p, index) => (
          <motion.div
            key={p.id}
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex justify-center mb-4">{p.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {p.title}
            </h3>
            <p className="text-gray-600 text-sm">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
