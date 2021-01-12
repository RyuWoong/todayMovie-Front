import React, { useEffect, useState } from 'react';
import axios from 'axios';
import queryString from 'query-string';
import MovieData from './MovieData';

const URL = 'http://localhost:4000/movie';

async function getMovieList(query) {
  try {
    const response = await axios({ url: URL, method: 'get', params: { movieNm: query.movieNm } });
    return response.data;
  } catch (e) {
    console.log(e.message);
    throw e;
  }
}

function MovieList({ location }) {
  const query = queryString.parse(location.search);
  console.log(query);
  const [movieList, setMovieList] = useState();
  useEffect(() => {
    const data = getMovieList();
    setMovieList(data);
  }, []);

  return (
    <div className="MovieList">
      <ul>{movieList ? movieList.map((movie) => <MovieData movie={movie} />) : '영화 로딩중..'}</ul>
    </div>
  );
}

export default MovieList;
