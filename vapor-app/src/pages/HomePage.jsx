import { useState, useContext } from "react";
import useAsyncEffect from "../customHooks/useAsyncEffect";
import { getAllMangas } from "../services/MangaApi";
import { useNavigate } from "react-router-dom";
import { globalContext } from "../context/context";
import MangaCard from "../components/MangaCard";

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
    <div className="bg-gray-900 min-h-screen text-white py-20 w-full px-6">
      {error && <div className="text-red-500 text-center mb-6">{error}</div>}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 ${navigationShow ? "ml-64" : ""}`}
      >
        {[...(data || Array(10))].map((manga, i) => (
          <MangaCard
            key={manga?.id || i}
            manga={manga || null}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
