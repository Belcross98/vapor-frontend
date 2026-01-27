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
      className={`flex text-gray-100 ${navigationShow ? "ml-80" : "ml-10"} mt-20  `}
    >
      <div className="">
        <img
          src={manga.mangaPictureURL == "" ? undefined : manga.mangaPictureURL}
          className="w-80"
          alt={manga.name}
        />
        <div className="manga-page-left-rating">
          Average Rating: {manga.averageRating || "N/A"}
        </div>
        {localStorage.getItem("accessToken") ? (
          <div className="manga-page-left-rate">
            <Review loadManga={loadManga} />
            <button
              onClick={() => deleteRev(id)}
              type="button"
              className="bg-red-950 cursor-pointer rounded-lg w-32"
            >
              Delete Review
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="manga-page-right">
        <span className="manga-page-right-title">{manga.name}</span>
        <span className="manga-page-right-description">
          <div className="manga-page-right-description-text">
            {manga.description}
          </div>
        </span>
        <div className="manga-page-right-revlist">
          {manga.reviews.map((review) => (
            <div className="manga-page-right-revlist-rev">
              <span>Author: {review.createdBy}</span>
              <span>Rating: {review.rating}</span>
              <span>Comment: {review.comment}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <>
      <h1>Loading...</h1>
    </>
  );
}

export default MangaPage;
