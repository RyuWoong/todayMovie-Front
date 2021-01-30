import React, { useEffect, useState } from 'react';

import qs from 'query-string';
import MovieList from '@/Components/Content/MovieList/MovieList';
import MovieTemplate from '@/Components/Content/MovieTemplate/MovieTemplate';
import { getSearchMovie } from '../lib/api/getSearchMovie';

function SearchMovie({ location }) {
  const [movieList, setMovieList] = useState(false);
  const [detailState, showDetail] = useState(false);

  useEffect(() => {
    const query = qs.parse(location.search);
    const requestMovie = getSearchMovie(query);
    requestMovie.then((result) => {
      const movie = result.data.results;
      console.log(movie);
      setMovieList(movie);
    });
  }, [location]);

  return (
    <div className="Page">
      <MovieTemplate>{movieList ? movieList.map((movie, index) => <MovieList key={index} movie={movie} showDetail={showDetail} />) : '영화 로딩중..'}</MovieTemplate>
    </div>
  );
}

export default SearchMovie;
