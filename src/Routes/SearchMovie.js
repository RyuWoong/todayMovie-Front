import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { Search } from 'lib/api/Search';

import qs from 'query-string';
import MovieList from '../Components/Content/MovieList/MovieList';
import MovieTemplate from 'Components/Content/MovieTemplate/MovieTemplate';

const Page = css`
  height: 100%;
`;

function SearchMovie({ location }) {
  const [movieList, setMovieList] = useState(false);

  useEffect(() => {
    const query = qs.parse(location.search);
    const requestMovie = Search(query);
    requestMovie.then((reuslt) => setMovieList(reuslt.data));
  }, [location]);

  return (
    <div css={Page}>
      <MovieTemplate>{movieList ? movieList.filter((list) => list.image !== '').map((movie, index) => <MovieList key={index} movie={movie} />) : '영화 로딩중..'}</MovieTemplate>
    </div>
  );
}

export default SearchMovie;
