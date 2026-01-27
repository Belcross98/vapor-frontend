function AboutPage() {
  return (
    <div className="bg-gray-900 min-h-screen text-gray-200 py-12 px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
        About MangaLib
      </h1>
      <div className="flex flex-col md:flex-row gap-8 items-center max-w-4xl mx-auto">
        <p className="md:w-1/2 text-lg md:text-xl leading-relaxed">
          Welcome to{" "}
          <span className="font-semibold text-indigo-400">MangaLib</span>, your
          ultimate destination for manga lovers! Whether you're a seasoned manga
          enthusiast or just starting your journey into the world of manga,
          MangaLib is here to offer you a rich, engaging experience.
          <br />
          <br />
          At MangaLib, we host a diverse collection of mangas across various
          genres, ensuring that there's something for everyone. From
          action-packed adventures to heartfelt dramas, our library grows
          regularly, bringing you new titles and hidden gems every week.
          <br />
          <br />
          <span className="font-semibold text-indigo-400">What We Offer:</span>
          <br />
          <strong>Vast Manga Collection:</strong> Browse through a wide variety
          of mangas. Whether you're into fantasy, romance, horror, or slice of
          life, our collection has something to match your interests.
          <br />
          <strong>User Ratings & Reviews:</strong> We believe in the power of
          community! You can rate your favorite mangas on a scale from 1-5 stars
          and share your thoughts with others through detailed comments.
        </p>

        <img
          className="md:w-1/2 w-full rounded-xl shadow-lg object-cover"
          src="https://4kwallpapers.com/images/wallpapers/one-piece-character-5120x2880-15328.jpeg"
          alt="Some random Manga"
        />
      </div>

      <p className="text-center text-lg md:text-xl mt-12 leading-relaxed font-light max-w-3xl mx-auto">
        Start Rating & Reviewing Today! Take part in rating and reviewing the
        mangas you've read and let others know about your favorite stories. Your
        feedback makes{" "}
        <span className="font-semibold text-indigo-400">MangaLib</span> a richer
        place for manga lovers like you.
      </p>
    </div>
  );
}

export default AboutPage;
