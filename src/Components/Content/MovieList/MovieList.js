import React from 'react';
import { withRouter } from 'react-router-dom';
import MovieInfo from '../MovieInfo/MovieInfo';
import { MovieListStyle } from './MovieListStyle';
import { Empty } from 'antd';

function MovieList({ movie, history }) {
  const imgLink = `https://image.tmdb.org/t/p/w185${movie.poster_path}`;

  const goMovieInfo = () => {
    const link = `/movie/${movie.id}`;
    history.push(link);
  };

  return (
    <li onClick={goMovieInfo} css={MovieListStyle}>
      {movie.poster_path ? (
        <img className="Poster" src={imgLink} alt={movie.title} />
      ) : (
        <Empty className="Poster" />
      )}
      <div className="MainTitle">
        <h2>{movie.title}</h2>
      </div>
      <MovieInfo movie={movie} />
    </li>
  );
}

export default withRouter(MovieList);
