import { Link } from "react-router-dom";
import InteractionBar from "./InteractionBar";

export default function ProjectCard({ project, onOpenModal, onToggleFollow }) {
  return (
    <article className="w-full max-w-3xl bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Header */}
      <div className="p-4 flex items-center gap-3 border-b border-gray-100 dark:border-gray-700">
        {/* Avatar */}
        <Link to={project.creator.profileUrl}>
          <img
            src={project.creator.avatar}
            alt={project.creator.name}
            className="w-12 h-12 rounded-full"
          />
        </Link>

        {/* Nome + data */}
        <div>
          <Link
            to={project.creator.profileUrl}
            className="font-semibold hover:underline"
          >
            {project.creator.name}
          </Link>
          <div className="text-sm text-gray-500">{project.date}</div>
        </div>

        {/* Botão Seguir */}
        <div className="flex items-center ml-4">
          <button
            onClick={() => onToggleFollow(project.creator.id)}
            className={`
              px-3 py-1 text-sm rounded-lg transition font-medium
              ${
                project.creator.isFollowing
                  ? "bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-400"
                  : "bg-orange-600 text-white hover:bg-orange-700 shadow"
              }
            `}
          >
            {project.creator.isFollowing ? "Seguindo" : "Seguir"}
          </button>
        </div>

        {/* Ver diário */}
        <button
          onClick={() => onOpenModal(project)}
          className="ml-auto text-sm px-3 py-1 bg-orange-600 text-white rounded-lg shadow-md hover:bg-orange-700 transition"
        >
          Ver Diário
        </button>
      </div>

      {/* Imagem Principal */}
      <div className="aspect-video bg-gray-200 dark:bg-gray-700">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Área de interação (curtidas, comentários, hashtags) */}
      <InteractionBar project={project} onOpenModal={onOpenModal} />
    </article>
  );
}
