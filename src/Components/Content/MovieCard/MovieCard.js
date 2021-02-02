import { Empty } from 'antd';
import React from 'react';

function MovieCard({ movie }) {
  const imgLink = `https://image.tmdb.org/t/p/w185${movie.poster_path}`;
  return (
    <>
      {movie.poster_path ? <img className="Poster" src={imgLink} alt={movie.title} /> : <Empty className="Poster" />}
      <div className="MovieInfo">
        <h2 className="MovieTitle">{movie.title}</h2>
        <h3 className="MovieSubTitle">{movie.origianl_title}</h3>
        <div className="MovieYear">{movie.release_date}</div>
      </div>
    </>
  );
}

export default MovieCard;
