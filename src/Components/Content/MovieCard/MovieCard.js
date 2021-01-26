import React from 'react';

function MovieCard({ movie }) {
  return (
    <>
      <img src={movie.image} alt={movie.subtitle} />
      <div className="MovieInfo">
        <div>
          <h2 dangerouslySetInnerHTML={{ __html: movie.title }}></h2>
          <h3>{movie.subtitle}</h3>
          <span>{movie.pubDate}년</span>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
