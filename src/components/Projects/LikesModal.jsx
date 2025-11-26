import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

export default function LikesModal({ project = { likedBy: [] }, onClose }) {
  // local copy to control following state visually
  const [people, setPeople] = useState(
    (project.likedBy || []).map((p) => ({ ...p }))
  );

  const toggleFollow = (index) => {
    setPeople((prev) => {
      const copy = prev.map((item) => ({ ...item }));
      copy[index].following = !copy[index].following;
      // opcional: persistir de volta em project.likedBy (se quiser)
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
                  src={p.avatar || "https://via.placeholder.com/48"}
                  alt={getDisplayName(p)}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium">{getDisplayName(p)}</div>
                  <div className="text-sm text-gray-500">
                    {p.following ? "Seguindo" : "Não segue"}
                  </div>
                </div>
              </div>
              <div>
                <button
                  onClick={() => toggleFollow(i)}
                  className={`px-3 py-1 rounded-full ${
                    p.following ? "bg-gray-500" : "bg-orange-500"
                  } text-white text-sm`}
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
