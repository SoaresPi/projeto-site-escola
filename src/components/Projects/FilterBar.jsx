export default function FilterBar({ selectedFilter, setSelectedFilter }) {
  const filters = [
    "Todos",
    "Criatividade",
    "Liderança",
    "Matemática",
    "Linguística",
    "Artes Visuais",
    "Música",
    "Esportes",
    "Tecnologia",
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 py-4">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setSelectedFilter(filter)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            selectedFilter === filter
              ? "bg-orange-600 text-white shadow-md"
              : "bg-gray-700 dark:bg-gray-200 text-gray-300 dark:text-gray-700 hover:bg-gray-600 dark:hover:bg-gray-300"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
