import React from 'react';
import { withRouter } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';
import { MovieListStyle } from './MovieListStyle';

function MovieList({ movie, history }) {
  const goMovieInfo = () => {
    const link = `/movie/${movie.id}`;
    history.push(link);
  };

  return (
    <li onClick={goMovieInfo} css={MovieListStyle}>
      <MovieCard movie={movie} />
    </li>
  );
}

export default withRouter(MovieList);
