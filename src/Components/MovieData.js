import React from 'react';
import { css } from '@emotion/react';

const card = css({
  display: 'flex',
  border: '1px solid black',
  div: {
    display: 'flex',
    flexDirection: 'column',
  },
});

function MovieData({ movie }) {
  return (
    <li css={card}>
      <img src={movie.image} alt={movie.subtitle} />
      <div>
        <h2>{movie.title.replace(/(<([^>]+)>)/gi, '')}</h2>
        <h3>({movie.subtitle})</h3>
        <span>{movie.pubDate}년</span>
      </div>
    </li>
  );
}

export default MovieData;
