// src/components/Projects/LikesModal.jsx
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

/**
 * LikesModal
 * props:
 * - project: projeto com campo likedBy
 * - onClose: função para fechar o modal
 */
export default function LikesModal({ project, onClose }) {
  // local copy to control following state visually
  const [people, setPeople] = useState(
    (project.likedBy || []).map((p) => ({ ...p }))
  );

  const toggleFollow = (index) => {
    setPeople((prev) => {
      const copy = [...prev];
      copy[index] = { ...copy[index], following: !copy[index].following };
      // Optionally persist to project.likedBy as well:
      if (project.likedBy && project.likedBy[index]) {
        project.likedBy[index].following = copy[index].following;
      }
      return copy;
    });
  };

  const getDisplayName = (p) => p.name || "Usuário";

  return (
    <motion.div
      className="fixed inset-0 z-60 flex items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <motion.div
        className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-md p-4"
        initial={{ scale: 0.95, y: 12 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 12 }}
      >
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold">Curtidas</h3>
          <button onClick={onClose} className="p-1">
            <X />
          </button>
        </div>

        <div className="space-y-3 max-h-[60vh] overflow-auto">
          {people.length === 0 && (
            <p className="text-sm text-gray-500">Nenhuma curtida ainda.</p>
          )}

          {people.map((p, i) => (
            <div key={i} className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <img
                  src={p.avatar}
                  alt={getDisplayName(p)}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium text-sm">{getDisplayName(p)}</div>
                  <div className="text-xs text-gray-500">Curtido</div>
                </div>
              </div>

              <div>
                <button
                  onClick={() => toggleFollow(i)}
                  className={`text-sm px-3 py-1 rounded-full transition ${
                    p.following
                      ? "bg-gray-200 text-gray-700"
                      : "bg-blue-600 text-white"
                  }`}
                >
                  {p.following ? "Seguindo" : "Seguir"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
