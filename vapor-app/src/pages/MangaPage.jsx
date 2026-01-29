import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Review from "../components/Review";
import { deleteReview, getManga } from "../services/MangaApi";
import useAsyncEffect from "../customHooks/useAsyncEffect";
import { globalContext } from "../context/context";

function MangaPage() {
  const { navigationShow } = useContext(globalContext);
  const [manga, setManga] = useState(null);
  const { id } = useParams();
  const [error, setError] = useState("");

  const loadManga = async () => {
    const { success, errorText, data } = await getManga(id);
    if (success) {
      setManga(data);
    } else {
      setError(errorText);
    }
  };

  const deleteRev = async (mangaId) => {
    const { success, errorText } = await deleteReview(mangaId);
    if (success) {
      loadManga();
    } else {
      setError(errorText);
    }
  };

  useAsyncEffect(loadManga, [id]);
  return manga ? (
    <div
      className={`min-h-screen text-gray-100 px-6 pt-20 transition-all
      ${navigationShow ? "ml-80" : "ml-10"}
    `}
    >
      <div className="flex flex-col lg:flex-row gap-10 max-w-6xl">
        {/* LEFT SIDE */}
        <div className="flex flex-col items-center lg:items-start gap-6 w-full lg:w-1/3">
          <img
            src={manga.mangaPictureURL || undefined}
            alt={manga.name}
            className="w-72 rounded-xl shadow-lg"
          />

          <div className="bg-gray-800 px-4 py-2 rounded-lg text-sm">
            ⭐ Average Rating: {manga.averageRating || "N/A"}
          </div>

          {localStorage.getItem("accessToken") && (
            <div className="flex flex-col gap-3 w-full">
              <Review loadManga={loadManga} />

              <button
                onClick={() => deleteRev(id)}
                className="bg-red-600 hover:bg-red-700 transition rounded-lg py-2 text-white font-semibold"
              >
                Delete Review
              </button>
            </div>
          )}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-6 w-full lg:w-2/3">
          <h1 className="text-4xl font-bold">{manga.name}</h1>

          <p className="text-gray-300 leading-relaxed">{manga.description}</p>

          {/* REVIEWS */}
          <div className="flex flex-col gap-4 mt-4">
            <h2 className="text-2xl font-semibold">Reviews</h2>

            {manga.reviews.length === 0 && (
              <p className="text-gray-400">No reviews yet.</p>
            )}

            {manga.reviews.map((review) => (
              <div
                key={review.id}
                className="bg-gray-800 rounded-xl p-4 flex flex-col gap-1 shadow"
              >
                <span className="font-semibold text-indigo-400">
                  {review.createdBy}
                </span>

                <span className="text-sm">⭐ {review.rating}/10</span>

                <p className="text-gray-300">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="pt-32 text-center text-gray-300">Loading...</div>
  );
}

export default MangaPage;
