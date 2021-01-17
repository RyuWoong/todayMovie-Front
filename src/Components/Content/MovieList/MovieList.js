import React from 'react';
import { MovieListStyle } from './MovieListStyle';

function MovieList({ movie }) {
  return (
    <li css={MovieListStyle}>
      <img src={movie.image} alt={movie.subtitle} />
      <div>
        <h2>{movie.title.replace(/(<([^>]+)>)/gi, '')}</h2>
        <h3>({movie.subtitle})</h3>
        <span>{movie.pubDate}년</span>
      </div>
    </li>
  );
}

export default MovieList;
