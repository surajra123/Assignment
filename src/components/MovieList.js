import React, { useState, useEffect } from "react";
import "./movieList.css";

const MovieList = ({ movies, setSelectedMovie }) => {
  const [selectedMovie, setSelectedMovieState] = useState("NO SELECTION");

  useEffect(() => {
    setSelectedMovie(selectedMovie);
  }, [selectedMovie, setSelectedMovie]);

  return (
    <div className="list">
      <h2>Movie List</h2>
      <ul
        style={{
          listStyle: "none",
          boxSizing: "border-box",
          paddingInlineStart: "0",
        }}
      >
        {movies.map((movie) => (
          <>
            <li
              style={{
                padding: "12px",
                display: "flex",
                justifyContent: "space-between",
                fontWeight: "500",
                fontSize: "16px",
              }}
              key={movie.episode_id}
              onClick={() => setSelectedMovieState(movie)}
            >
              <span>EPISODE {movie.episode_id}</span>
              <span>{movie.title}</span>
              <span>{movie.release_date}</span>
            </li>
            <hr />
          </>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
