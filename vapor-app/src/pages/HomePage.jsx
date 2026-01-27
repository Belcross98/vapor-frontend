import { useState } from "react";
import useAsyncEffect from "../customHooks/useAsyncEffect";
import { getAllMangas } from "../services/MangaApi";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { globalContext } from "../context/context";

function HomePage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { navigationShow } = useContext(globalContext);

  const loadMangas = async () => {
    const { success, errorText, data } = await getAllMangas();
    if (success) {
      setData(data);
    } else {
      setError(errorText);
    }
  };

  const handleClick = (id) => {
    navigate(`/Manga/${id}`);
  };

  useAsyncEffect(loadMangas, []);

  return (
    <div className="bg-gray-900 min-h-screen text-white py-10 w-full px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
        MangaLib
      </h1>

      {error && <div className="text-red-500 text-center mb-6">{error}</div>}

      {data ? (
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 ${navigationShow ? "ml-64" : ""}`}
        >
          {data.map((manga) => (
            <div
              key={manga.id}
              className="flex flex-col h-104 bg-gray-800 rounded-lg shadow-md cursor-pointer hover:scale-105 transform transition"
              onClick={() => handleClick(manga.id)}
            >
              <img
                src={manga.mangaPictureURL || "/placeholder.jpg"}
                alt={manga.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h5 className="text-xl font-bold mb-2 line-clamp-1">
                  {manga.name}
                </h5>
                <p className="text-gray-300 text-sm line-clamp-3">
                  {manga.description || "No description available."}
                </p>
              </div>
              <div className="px-4 py-2 bg-gray-900 mt-auto">
                <small className="text-gray-400">
                  Average Rating: {manga.averageRating || "N/A"}
                </small>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-white text-lg">Loading...</div>
      )}
    </div>
  );
}

export default HomePage;
