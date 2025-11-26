import { motion } from "framer-motion";
import Calendar from "../../components/events/Calendar";
import { CalendarDays, MapPin } from "lucide-react";

const upcomingEvents = [
  {
    title: "Apresentação Musical",
    type: "cultural",
    date: "12/11/2025",
    local: "Auditório Principal",
    desc: "Apresentações de alunos do 6º ao 9º ano.",
  },
  {
    title: "Festival de Ciências",
    type: "educacional",
    date: "25/11/2025",
    local: "Pátio Central",
    desc: "Exposição de experimentos dos alunos.",
  },
];

const timeline = [
  { title: "Feira Cultural", date: "20/10/2025" },
  { title: "Semana da Leitura", date: "02/10/2025" },
  { title: "Dia da Família", date: "10/09/2025" },
];

export default function Events() {
  return (
    <main className="min-h-screen bg-neutral-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-blue-600 mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Eventos da Escola
        </motion.h1>

        {/* Layout principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Calendário */}
          <Calendar events={upcomingEvents} />

          {/* Lista de próximos eventos */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Próximos eventos
            </h2>

            <div className="space-y-8">
              {upcomingEvents.map((event, i) => (
                <motion.div
                  key={i}
                  className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                >
                  <div className="flex items-center gap-3 text-blue-600 mb-2">
                    <CalendarDays className="w-6 h-6" />
                    <p className="font-semibold">{event.date}</p>
                  </div>

                  <h3 className="text-xl font-semibold mb-2 text-blue-700">
                    {event.title}
                  </h3>

                  <p className="text-gray-700">{event.desc}</p>

                  <div className="flex items-center gap-2 text-gray-600 mt-4">
                    <MapPin className="w-5 h-5" />
                    <p>{event.local}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* Timeline */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold text-gray-800 mb-10">
            Eventos passados
          </h2>

          <div className="border-l-4 border-blue-500 ml-4">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                className="ml-6 mb-10"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <div className="w-4 h-4 bg-blue-500 rounded-full -ml-8 mb-2" />
                <p className="text-blue-600 font-semibold">{item.date}</p>
                <p className="text-gray-800 text-lg font-medium">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
