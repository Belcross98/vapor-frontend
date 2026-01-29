import { useState } from "react";
import useDebounce from "../customHooks/useDebounce";
import { searchManga } from "../services/MangaApi";
import { useNavigate } from "react-router-dom";

function SearchManga() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [focused, setFocused] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async (query) => {
    if (!query) {
      setResults([]);
      return;
    }

    const { success, errorText, data } = await searchManga(query);
    if (success) {
      setResults(data);
    } else {
      console.error(errorText);
    }
  };
  useDebounce(() => handleSearch(query), query, 500);

  const handleClick = (id) => {
    navigate(`/Manga/${id}`);
  };

  return (
    <div className="">
      <input
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        spellCheck="false"
        className={`bg-gray-100 text-gray-900 border rounded-full px-4
                    w-64 focus:w-96
                    transition-all duration-300 ease-in-out`}
        type="text"
        placeholder="Search mangas..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {focused && (
        <div className="flex flex-col gap-2 w-96 absolute bg-gray-900 text-gray-100 mt-2 pl-2 pr-2 pb-2">
          {results.map((manga) => (
            <div
              key={manga.id}
              onMouseDown={() => handleClick(manga.id)}
              className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 cursor-pointer p-2 rounded-lg transition"
            >
              <img
                src={manga.mangaPictureURL}
                alt={manga.name}
                className="w-10 h-14 object-cover rounded"
              />

              <span className="text-sm font-medium">{manga.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchManga;
