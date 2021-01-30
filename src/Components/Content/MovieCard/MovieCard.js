import React from 'react';

function MovieCard({ movie }) {
  console.log(movie);
  const imgLink = `https://image.tmdb.org/t/p/w185${movie.poster_path}`;
  return (
    <>
      <img src={imgLink} alt={movie.title} />
      <div className="MovieInfo">
        <h2 className="MovieTitle">{movie.title}</h2>
        <h3 className="MovieSubTitle">{movie.origianl_title}</h3>
        <div className="MovieYear">{movie.release_date}년</div>
      </div>
    </>
  );
}

export default MovieCard;
