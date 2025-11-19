export default function ProjectDiary({ diary }) {
  return (
    <div className="p-6 text-gray-700 space-y-4">
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">
        Diário de Bordo
      </h2>

      {/* Exibe resumo, se existir */}
      {diary.summary && (
        <p className="text-sm text-gray-600 mb-4">{diary.summary}</p>
      )}

      {/* Exibe entradas do diário */}
      {diary.entries && diary.entries.length > 0 ? (
        diary.entries.map((entry, i) => (
          <div
            key={i}
            className="border-l-4 border-blue-500 pl-4 mb-4 bg-gray-50 dark:bg-gray-800/40 p-3 rounded-md"
          >
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
              {entry.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {entry.content}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
              {entry.date}
            </p>
          </div>
        ))
      ) : (
        <p className="Nenhuma entrada de diário adicionada aidna."></p>
      )}
    </div>
  );
}
