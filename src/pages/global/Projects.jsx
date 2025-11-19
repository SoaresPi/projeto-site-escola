import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { projectExamples } from "../../data/projectExamples";
import FilterBar from "../../components/Projects/FilterBar";
import ProjectCard from "../../components/Projects/ProjectCard";
import ProjectModal from "../../components/Projects/ProjectModal";

export default function Projects() {
  const [projects, setProjects] = useState(projectExamples);
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("Todos");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // ---------- MODAL ----------
  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  // ---------- SEGUIR / DEIXAR DE SEGUIR ----------
  const toggleFollow = (creatorId) => {
    setProjects((prev) =>
      prev.map((p) =>
        p.creator.id === creatorId
          ? {
              ...p,
              creator: {
                ...p.creator,
                isFollowing: !p.creator.isFollowing,
              },
            }
          : p
      )
    );
  };

  // ---------- FILTRO + BUSCA ----------
  const filtered = projects.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.creator.name.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      selectedFilter === "Todos" || p.area === selectedFilter;

    return matchesSearch && matchesFilter;
  });

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* HERO */}
      <section className="relative bg-linear-to-t from-neutral-50 to-pink-50 text-white pt-24 px-6 text-center overflow-hidden">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-orange-700/80">
          Projetos dos Alunos
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600">
          Confira os projetos incríveis criados pelos alunos!
        </p>

        {/* Busca */}
        <div className="pt-10 pb-4 flex justify-center">
          <input
            type="text"
            placeholder="Procure por algum projeto"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 border rounded-xl bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-700/40 text-gray-700 dark:text-neutral-200"
          />
        </div>

        <FilterBar
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
      </section>

      {/* FEED */}
      <section className="px-4 md:px-10 py-20 flex flex-col items-center gap-10 mt-6">
        {filtered.map((p) => (
          <ProjectCard
            key={p.id}
            project={p}
            onOpenModal={openModal}
            onToggleFollow={toggleFollow}
          />
        ))}

        {filtered.length === 0 && (
          <p className="text-gray-500 mt-10">Nenhum projeto encontrado.</p>
        )}
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={closeModal}
            onToggleFollow={toggleFollow}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
