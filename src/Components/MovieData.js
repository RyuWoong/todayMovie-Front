import React from 'react';

function MovieData({ movie }) {
  return (
    <li>
      {movie.image === '' ? <></> : <img src={movie.image} alt={movie.subtitle} />}
      <h2>
        {movie.title.replace(/(<([^>]+)>)/gi, '')}
        <span>{movie.pubDate}년</span>
      </h2>
      ({movie.subtitle})
    </li>
  );
}

export default MovieData;
