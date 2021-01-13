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
    return false;
  }
}

function MovieList({ location }) {
  const [movieList, setMovieList] = useState(false);
  const MovieNm = queryString.parse(location.search);
  console.log(movieList);

  useEffect(() => {
    const data = getMovieList(MovieNm);
    data.then((value) => setMovieList(value));
  }, [location]);

  return (
    <div className="MovieList">
      <ul css={{ listStyleType: 'none' }}>{movieList ? movieList.filter((list) => list.image !== '').map((movie, index) => <MovieData key={index} movie={movie} />) : '영화 로딩중..'}</ul>
    </div>
  );
}

export default MovieList;
