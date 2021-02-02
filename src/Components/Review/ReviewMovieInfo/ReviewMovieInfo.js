import React from 'react';

function ReviewMovieInfo({ movie }) {
  const imgLink = `https://image.tmdb.org/t/p/w185/${movie.poster_path}`;

  return (
    <div>
      <img src={imgLink} alt={movie.title} />
      <div className="MovieInfo">
        <h2>{movie.title}</h2>
        <h3>{movie.origianl_title}</h3>
        <div className="year">{movie.release_date}</div>
        <div className="overview">{movie.overview}</div>
      </div>
    </div>
  );
}

export default ReviewMovieInfo;
