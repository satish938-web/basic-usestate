import React, { useState } from "react";
import MovieCard from "./MovieCard";

const API_KEY = "def427b1f27ddd4f5c8663ae8cd2ce3b";   // your key

const Parent = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchMovies = async () => {
    if (search.trim() === "") {
      setError("Please type a movie name.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
      );
      const data = await res.json();

      if (data.Response === "False") {
        setError(data.Error);
        setMovies([]);
      } else {
        setMovies(data.Search);
      }
    } catch (err) {
      setError("Something went wrong. Try again.");
    }

    setLoading(false);
  };

  const pressEnter = (e) => {
    if (e.key === "Enter") fetchMovies();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">🎬 Movie Search Parent</h1>

      <div className="flex justify-center gap-3 mb-6">
        <input
          type="text"
          placeholder="Search movie..."
          className="border px-4 py-2 rounded w-72"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={pressEnter}
        />

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={fetchMovies}
        >
          Search
        </button>
      </div>

      {loading && <h2 className="text-center text-lg font-semibold">Loading...</h2>}

      {error && <p className="text-center text-red-600 text-lg">{error}</p>}

      <div className="flex flex-wrap justify-center gap-6 mt-6">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Parent;
