import React from 'react';
import { MovieInfoStyle } from './MovieInfoStyle';

function MovieInfo({ movie }) {
  return (
    <>
      <div className="MovieInfo" css={MovieInfoStyle}>
        <div className="MovieTitle">{movie.title}</div>
        <div className="MovieSubTitle">{movie.origianl_title}</div>
        <div className="MovieYear">{movie.release_date}</div>
        <div className="MovieOverview">{movie.overview}</div>
      </div>
    </>
  );
}

export default MovieInfo;
