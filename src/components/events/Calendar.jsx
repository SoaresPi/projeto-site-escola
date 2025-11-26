import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function Calendar({ events = [] }) {
  const [date, setDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);

  const month = date.getMonth();
  const year = date.getFullYear();

  const monthNames = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  // Cores por tipo de evento
  const eventColors = {
    cultural: "bg-purple-500",
    educacional: "bg-blue-500",
    esportivo: "bg-green-500",
    comunidade: "bg-orange-500",
  };

  // Agrupar eventos por dia (verificando dia/mês/ano)
  const eventsByDay = events.reduce((acc, ev) => {
    const [dayStr, monthStr, yearStr] = ev.date.split("/");
    const day = parseInt(dayStr);
    const evMonth = parseInt(monthStr) - 1;
    const evYear = parseInt(yearStr);

    if (evMonth === month && evYear === year) {
      if (!acc[day]) acc[day] = [];
      acc[day].push(ev);
    }

    return acc;
  }, {});

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = new Date(year, month, 1).getDay();

  const nextMonth = () => setDate(new Date(year, month + 1, 1));
  const prevMonth = () => setDate(new Date(year, month - 1, 1));

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={prevMonth} className="p-2 hover:bg-gray-100 rounded">
          <ChevronLeft />
        </button>

        <h2 className="text-xl font-semibold text-blue-600">
          {monthNames[month]} {year}
        </h2>

        <button onClick={nextMonth} className="p-2 hover:bg-gray-100 rounded">
          <ChevronRight />
        </button>
      </div>

      {/* Dias da semana */}
      <div className="grid grid-cols-7 text-center font-semibold text-gray-600 mb-2">
        {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      {/* Dias */}
      <div className="grid grid-cols-7 text-center gap-1">
        {[...Array(firstDayIndex)].map((_, i) => (
          <div key={i}></div>
        ))}

        {[...Array(daysInMonth)].map((_, i) => {
          const day = i + 1;
          const hasEvent = eventsByDay[day];

          return (
            <div key={day} className="group relative">
              <motion.button
                whileHover={{ scale: 1.07 }}
                onClick={() => setSelectedDay(day)}
                className={`
                  p-2 rounded-lg w-full transition
                  ${selectedDay === day ? "bg-blue-100" : "hover:bg-gray-100"}
                `}
              >
                {day}

                {/* bolinha do evento */}
                {hasEvent && (
                  <span
                    className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full 
                    ${eventColors[hasEvent[0].type] || "bg-blue-500"}`}
                  />
                )}
              </motion.button>

              {/* Tooltip */}
              {hasEvent && (
                <div
                  className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-800 text-white 
                text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 
                pointer-events-none transition whitespace-nowrap shadow-lg"
                >
                  {hasEvent[0].title}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Modal com eventos do dia */}
      <AnimatePresence>
        {selectedDay && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white w-full max-w-md rounded-xl p-6 shadow-xl relative"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
            >
              <button
                onClick={() => setSelectedDay(null)}
                className="absolute top-3 right-3 p-1 hover:bg-gray-100 rounded"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-xl font-bold text-blue-600 mb-4">
                {selectedDay}/{month + 1}/{year}
              </h3>

              {eventsByDay[selectedDay] ? (
                eventsByDay[selectedDay].map((ev, i) => (
                  <div
                    key={i}
                    className="border-l-4 pl-3 mb-4"
                    style={{
                      borderColor:
                        ev.type === "cultural"
                          ? "#9333EA"
                          : ev.type === "educacional"
                          ? "#2563EB"
                          : ev.type === "esportivo"
                          ? "#16A34A"
                          : ev.type === "comunidade"
                          ? "#EA580C"
                          : "#2563EB",
                    }}
                  >
                    <h4 className="font-medium text-gray-800">{ev.title}</h4>
                    <p className="text-sm text-gray-600">{ev.local}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-600">Nenhum evento neste dia.</p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
