function MangaCard({ manga, handleClick }) {
  const isLoading = !manga;

  return (
    <div
      className={`flex flex-col h-104 bg-gray-800 rounded-lg shadow-md transform transition
                  ${isLoading ? "animate-pulse" : "hover:scale-105 cursor-pointer"}`}
      onClick={() => !isLoading && handleClick?.(manga.id)}
    >
      {isLoading ? (
        <div className="w-full h-64 bg-gray-700 rounded-t-lg"></div>
      ) : (
        <img
          src={manga.mangaPictureURL || "/placeholder.jpg"}
          alt={manga.name}
          className="w-full h-64 object-cover rounded-t-lg"
        />
      )}

      <div className="p-4 space-y-3">
        {isLoading ? (
          <>
            <div className="h-6 bg-gray-700 rounded w-3/4"></div>
            <div className="h-4 bg-gray-700 rounded"></div>
            <div className="h-4 bg-gray-700 rounded w-5/6"></div>
            <div className="h-4 bg-gray-700 rounded w-2/3"></div>
          </>
        ) : (
          <>
            <h5 className="text-xl font-bold mb-2 line-clamp-1">
              {manga.name}
            </h5>
            <p className="text-gray-300 text-sm line-clamp-3">
              {manga.description || "No description available."}
            </p>
          </>
        )}
      </div>

      <div className="px-4 py-2 bg-gray-900 mt-auto">
        {isLoading ? (
          <div className="h-4 bg-gray-700 rounded w-1/2"></div>
        ) : (
          <small className="text-gray-400">
            Average Rating: {manga.averageRating || "N/A"}
          </small>
        )}
      </div>
    </div>
  );
}

export default MangaCard;
