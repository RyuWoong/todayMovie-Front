import React from 'react';
import ReviewButton from '../ReviewButton/ReviewButton';
import ReviewPoint from '../ReviewPoint/ReviewPoint';
import { MovieListStyle } from './MovieListStyle';

function MovieList({ movie }) {
  const isReview = false;
  const handleLink = () => {
    const link = movie?.link;
    window.open(link, '_blank');
  };

  return (
    <li css={MovieListStyle(isReview)}>
      <img src={movie.image} alt={movie.subtitle} />
      <div className="MovieInfo">
        <div onClick={handleLink}>
          <h2>{movie.title.replace(/(<([^>]+)>)/gi, '')}</h2>
          <h3>{movie.subtitle}</h3>
          <span>{movie.pubDate}년</span>
        </div>
        <div className="ShowReview">{isReview ? <ReviewPoint /> : <ReviewButton />}</div>
      </div>
    </li>
  );
}

export default MovieList;
