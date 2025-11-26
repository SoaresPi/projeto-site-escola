// src/components/Projects/InteractionBar.jsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Bookmark, Send, MessageCircle } from "lucide-react";
import LikesModal from "./LikesModal";

/**
 * InteractionBar
 * props:
 * - project: objeto do projeto (mutado diretamente para simplicidade)
 * - onOpenModal(project): função para abrir modal principal (diário + comentários)
 */
export default function InteractionBar({ project, onOpenModal }) {
  // usuário atual (simulação)
  const currentUser = {
    name: "Você",
    avatar: "https://via.placeholder.com/48/0077ff/ffffff?text=V",
  };

  const [liked, setLiked] = useState(
    !!(
      project.likedBy &&
      project.likedBy.find((u) => u.name === currentUser.name)
    )
  );
  const [saved, setSaved] = useState(false);
  const [likesCount, setLikesCount] = useState(
    (project.likedBy && project.likedBy.length) || 0
  );
  const [expanded, setExpanded] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [hearts, setHearts] = useState([]); // chuva de corações
  const [showLikesModal, setShowLikesModal] = useState(false);

  useEffect(() => {
    setLiked(
      !!(
        project.likedBy &&
        project.likedBy.find((u) => u.name === currentUser.name)
      )
    );
    setLikesCount((project.likedBy && project.likedBy.length) || 0);
  }, [project]);

  const toggleLike = () => {
    if (liked) {
      setLiked(false);
      setLikesCount((c) => Math.max(0, c - 1));
    } else {
      setLiked(true);
      setLikesCount((c) => c + 1);

      // gerar um coração animado
      const id = Date.now();
      setHearts((h) => [...h, { id }]);
      setTimeout(() => {
        setHearts((h) => h.filter((x) => x.id !== id));
      }, 900);
    }
    // nota: se quiser persistir no backend, faça a chamada aqui
  };

  const toggleSave = () => setSaved((s) => !s);

  // adiciona comentário e abre modal (sincroniza feed <-> modal)
  const handleCommentKey = (e) => {
    if (e.key === "Enter") {
      const text = commentText.trim();
      if (!text) return;
      project.comments = project.comments || [];
      project.comments.push({
        name: currentUser.name,
        text,
        avatar: currentUser.avatar,
      });
      setCommentText("");
      // abre modal principal com comentários (o pai deverá abrir ao receber project)
      onOpenModal(project);
    }
  };

  const openLikesModal = () => setShowLikesModal(true);
  const closeLikesModal = () => setShowLikesModal(false);

  // pega primeiro nome em likedBy (compatível com keys 'name' ou 'user')
  const firstLikedUser =
    project.likedBy && project.likedBy.length > 0
      ? project.likedBy[0].name
      : "alguém que você segue";

  const description = project.post?.summary || project.description?.text || "";
  const shortDesc =
    description.length > 150 && !expanded
      ? description.slice(0, 150) + "..."
      : description;

  return (
    <div className="p-4 relative">
      {/* Top icons */}
      <div className="flex justify-between mb-3 items-center">
        <div className="flex gap-3 items-center">
          {/* Heart button with scale animation */}
          <motion.button
            onClick={toggleLike}
            whileTap={{ scale: 0.9 }}
            className="flex items-center"
            aria-label="Curtir"
          >
            <motion.div
              initial={false}
              animate={liked ? { scale: 1.05 } : { scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              className="text-lg"
            >
              {/* Use emoji for filled heart effect (simple and reliable) */}
              <Heart
                className={`w-7.5 h-7.5 cursor-pointer hover:scale-110 transition-all ${
                  liked ? "fill-red-500/90 text-red-500/90" : ""
                }`}
              />
            </motion.div>
          </motion.button>

          <MessageCircle
            className="w-7.5 h-7.5 cursor-pointer hover:scale-110 transition-transform text-gray-700"
            onClick={() => onOpenModal(project)}
          />

          <Send className="w-7.5 h-7.5 cursor-pointer hover:scale-110 transition-transform text-gray-700" />
        </div>

        <button onClick={toggleSave} className="p-1">
          <Bookmark
            className={`w-7.5 h-7.5 cursor-pointer hover:scale-110 transition-all ${
              saved ? "fill-yellow-500/90 text-yellow-500/90" : ""
            }`}
          />
        </button>
      </div>

      {/* Curtido por */}
      <div className="text-sm font-medium text-gray-800 mb-1">
        Curtido por <span className="font-semibold">{firstLikedUser}</span> e{" "}
        <button
          onClick={openLikesModal}
          className="font-semibold hover:underline"
        >
          outros {likesCount - 1}
        </button>
      </div>

      {/* Descrição */}
      <p className="text-sm mt-1">
        <span className="font-semibold">{project.creator.name}</span>{" "}
        <span>{shortDesc}</span>
        {description.length > 150 && (
          <button
            onClick={() => setExpanded((s) => !s)}
            className="text-blue-600 ml-2 text-sm"
          >
            {expanded ? "ver menos" : "mais"}
          </button>
        )}
      </p>

      {/* Hashtags */}
      <div className="flex flex-wrap gap-2 mt-2">
        {project.description?.topics?.map((t) => (
          <span
            key={t}
            className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full"
          >
            #{t}
          </span>
        ))}
      </div>

      {/* Ver comentários */}
      {project.comments && project.comments.length > 0 && (
        <button
          onClick={() => onOpenModal(project)}
          className="text-xs text-gray-500 mt-2 hover:underline"
        >
          Ver todos os {project.comments.length} comentário
          {project.comments.length > 1 ? "s" : ""}
        </button>
      )}

      {/* Campo de comentário */}
      <div className="mt-2">
        <input
          type="text"
          placeholder="Adicione um comentário..."
          className="w-full text-sm border-b border-gray-300 focus:outline-none py-1"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          onKeyDown={handleCommentKey}
        />
      </div>

      {/* contador resumo */}
      <div className="text-xs text-gray-500 mt-2">
        {likesCount} curtidas • {project.comments?.length ?? 0} comentários
      </div>

      {/* Hearts rain — centered overlay */}
      <div className="relative">
        <AnimatePresence>
          {hearts.map((h) => (
            <motion.div
              key={h.id}
              initial={{ opacity: 0, y: 0, scale: 0.8 }}
              animate={{ opacity: 1, y: -40, scale: 1.1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9 }}
              className="absolute right-0 bottom-0 pointer-events-none"
            >
              <span className="text-red-400 drop-shadow text-xl">❤</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Likes modal (internal) */}
      <AnimatePresence>
        {showLikesModal && (
          <LikesModal project={project} onClose={closeLikesModal} />
        )}
      </AnimatePresence>
    </div>
  );
}
