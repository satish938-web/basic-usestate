import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="border shadow-md p-4 rounded-lg bg-white w-64">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300"}
        alt="Poster"
        className="h-72 w-full object-cover rounded"
      />
      <h3 className="font-bold text-lg mt-2">{movie.Title}</h3>
      <p className="text-sm text-gray-600">Year: {movie.Year}</p>
      <p className="text-sm text-gray-500">Type: {movie.Type}</p>
    </div>
  );
};

export default MovieCard;
