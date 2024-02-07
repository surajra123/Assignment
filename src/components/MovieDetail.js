import React from 'react';
import "./movieDetails.css"

const MovieDetail = ({ movie }) => {

  return (
    <div className='details'>
      <h2>Movie Details</h2>
          <h3>Episode: {movie.episode_id} {movie.title}</h3>
          <p>{movie.opening_crawl}</p>
          <p>Director By: {movie.director}</p>
    </div>
  );
};

export default MovieDetail;
