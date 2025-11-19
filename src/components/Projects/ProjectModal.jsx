// src/components/Projects/ProjectModal.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, PanelRight, PanelRightClose } from "lucide-react";
import ProjectDiary from "./ProjectDiary";
import ProjectComments from "./ProjectComments";
import ProjectImages from "./ProjectImages";

export default function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState("diary");
  const [commentsOpen, setCommentsOpen] = useState(false);
  // version usado para forçar re-render quando project é mutado diretamente
  const [version, setVersion] = useState(0);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [project]);

  if (!project) return null;

  const handleAddComment = (text) => {
    project.comments = project.comments || [];
    project.comments.push({
      name: "Você",
      text,
      avatar: "", // ou avatar do currentUser se tiver
    });
    // força re-render
    setVersion((v) => v + 1);
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Overlay */}
          <div
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-md"
          />

          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 flex bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"
            initial={{ width: "1000px", scale: 0.95, y: 20, opacity: 0 }}
            animate={{
              width: commentsOpen ? "1320px" : "1000px",
              scale: 1,
              y: 0,
              opacity: 1,
            }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
          >
            {/* Fechar */}
            <button
              onClick={onClose}
              className="absolute top-2 right-3 p-2 bg-white/90 dark:bg-gray-800/90 rounded-full shadow hover:scale-105 z-50"
            >
              <X />
            </button>

            {/* Conteúdo principal */}
            <div className="flex-1 flex flex-col w-[1000px] h-[620px]">
              <div className="flex items-center justify-center p-4 border-b border-gray-200 dark:border-gray-700 relative">
                <div className="flex gap-6">
                  <span
                    onClick={() => setActiveTab("images")}
                    className={`cursor-pointer text-sm font-medium ${
                      activeTab === "images"
                        ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Imagens
                  </span>
                  <span
                    onClick={() => setActiveTab("diary")}
                    className={`cursor-pointer text-sm font-medium ${
                      activeTab === "diary"
                        ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Diário de Bordo
                  </span>
                </div>

                <button
                  onClick={() => setCommentsOpen((s) => !s)}
                  className=" absolute right-16 text-gray-500 hover:text-gray-700 flex items-center gap-1"
                >
                  {!commentsOpen ? (
                    <PanelRight size={18} />
                  ) : (
                    <PanelRightClose size={18} />
                  )}
                  <span className="text-sm">Comentários</span>
                </button>
              </div>

              <motion.div
                key={activeTab + "-" + version}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.28 }}
                className="flex-1 overflow-auto"
              >
                {activeTab === "images" ? (
                  <ProjectImages
                    images={project.images}
                    title={project.title}
                  />
                ) : (
                  <ProjectDiary diary={project.diary} />
                )}
              </motion.div>
            </div>

            {/* Painel de comentários expansível */}
            <ProjectComments
              open={commentsOpen}
              setOpen={setCommentsOpen}
              comments={project.comments || []}
              onAddComment={(text) => {
                handleAddComment(text);
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
