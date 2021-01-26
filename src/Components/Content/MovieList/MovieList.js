import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { MovieListStyle } from './MovieListStyle';

function MovieList({ movie, showDetail }) {
  const isReview = false;
  const handleLink = () => {
    showDetail(movie);
  };

  return (
    <li onClick={handleLink} css={MovieListStyle(isReview)}>
      <MovieCard movie={movie} />
    </li>
  );
}

export default MovieList;
