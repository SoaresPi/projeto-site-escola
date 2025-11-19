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
  const [cooldown, setCooldown] = useState(false);
  const [showLikesModal, setShowLikesModal] = useState(false);

  useEffect(() => {
    setLikesCount((project.likedBy && project.likedBy.length) || 0);
  }, [project.likedBy]);

  // Gera pequenos corações animados no centro (3 corações)
  const spawnHearts = (count = 3) => {
    const newHearts = Array.from({ length: count }).map((_, idx) => ({
      id: Date.now() + Math.random() + idx,
      offset: Math.random() * 120 - 60, // px horizontal offset
      size: 18 + Math.random() * 14,
      delay: idx * 0.08,
    }));
    setHearts((s) => [...s, ...newHearts]);
    setTimeout(() => {
      setHearts((s) =>
        s.filter((h) => !newHearts.find((nh) => nh.id === h.id))
      );
    }, 1400);
  };

  const handleToggleLike = () => {
    const willLike = !liked;
    setLiked(willLike);

    project.likedBy = project.likedBy || [];

    if (willLike) {
      // adiciona currentUser em likedBy (evita duplicata)
      if (!project.likedBy.find((u) => u.name === currentUser.name)) {
        project.likedBy.unshift({
          name: currentUser.name,
          avatar: currentUser.avatar,
          following: false,
        });
      }
      project.likes = (project.likes ?? 0) + 1;
      setLikesCount((c) => c + 1);

      // chuva + cooldown 2s
      if (!cooldown) {
        spawnHearts(3);
        setCooldown(true);
        setTimeout(() => setCooldown(false), 2000);
      }
    } else {
      // remove like
      project.likedBy = (project.likedBy || []).filter(
        (u) => u.name !== currentUser.name
      );
      project.likes = Math.max((project.likes ?? 1) - 1, 0);
      setLikesCount((c) => Math.max(c - 1, 0));
    }
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
            onClick={handleToggleLike}
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
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center">
          <AnimatePresence>
            {hearts.map((h) => (
              <motion.div
                key={h.id}
                initial={{ y: 0, opacity: 1, scale: 0.6, x: h.offset }}
                animate={{
                  y: -120 - Math.random() * 60,
                  opacity: 0,
                  scale: 1.1,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.1, delay: h.delay, ease: "easeOut" }}
                style={{
                  position: "absolute",
                  left: `calc(50% + ${h.offset}px)`,
                }}
              >
                <div
                  style={{
                    width: h.size,
                    height: h.size,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{ fontSize: h.size, lineHeight: 1 }}
                    className="text-red-400 drop-shadow"
                  >
                    ❤️
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
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
