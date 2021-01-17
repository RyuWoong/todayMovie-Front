import React from 'react';
import { MovieTemplateStyle } from './MovieTemplateStyle';

function MovieTemplate({ children }) {
  return (
    <div css={MovieTemplateStyle}>
      <ul>{children}</ul>
    </div>
  );
}

export default MovieTemplate;
