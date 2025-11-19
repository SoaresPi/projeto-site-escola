// src/components/Projects/ProjectComments.jsx
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";

export default function ProjectComments({
  open,
  setOpen,
  comments = [],
  onAddComment,
}) {
  return (
    <motion.div
      className="relative border-l border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 flex flex-col overflow-hidden"
      animate={{
        width: open ? 320 : 0,
        opacity: open ? 1 : 0,
      }}
      transition={{ duration: 0.36, ease: "easeInOut" }}
    >
      {/* Botão lateral */}
      <motion.button
        onClick={() => setOpen(!open)}
        className={`absolute -left-8 top-1/2 -translate-y-1/2 p-2 rounded-full shadow bg-white dark:bg-gray-800 hover:scale-105 transition ${
          open ? "rotate-180" : ""
        }`}
      >
        {open ? <ChevronRight /> : <ChevronLeft />}
      </motion.button>

      {open && (
        <>
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between">
            <h3 className="font-semibold">Comentários</h3>
          </div>

          <div className="flex-1 overflow-auto p-4 space-y-3">
            {comments.length === 0 && (
              <p className="text-sm text-gray-500">Nenhum comentário ainda.</p>
            )}
            {comments.map((c, i) => (
              <div key={i} className="flex gap-3">
                <img
                  src={c.avatar || "https://via.placeholder.com/40"}
                  alt={c.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <b className="text-sm">{c.name}</b>
                  <p className="text-sm text-gray-500">{c.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <input
              placeholder="Adicione um comentário..."
              className="w-full px-3 py-2 rounded-md border bg-transparent focus:outline-none text-sm"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  const text = e.currentTarget.value.trim();
                  if (!text) return;
                  if (typeof onAddComment === "function") onAddComment(text);
                  e.currentTarget.value = "";
                }
              }}
            />
          </div>
        </>
      )}
    </motion.div>
  );
}
