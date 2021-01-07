import React, { useState } from 'react';
import axios from 'axios';
import MovieData from './MovieData';

function getUrlParams() {
  const params = {};
  window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (str, key, value) {
    params[key] = value;
  });
  return params;
}

function DataBlock() {
  const [newText, setNewText] = useState('');
  const [movieList, setMovieList] = useState(false);
  const URL = 'http://localhost:4000/movie';

  const onChange = (event) => {
    const value = event.target.value;
    setNewText(value);
  };

  const getMovie = () => axios({ url: URL, method: 'get', params: { movieNm: newText } }).then((request) => request.data);
  const onSubmit = async (event) => {
    event.preventDefault();
    const movieResult = await getMovie();
    console.log(movieResult);
    setMovieList(movieResult);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="제목을 입력해주세요." value={newText} onChange={onChange} />
        <input type="submit" value="검색" />
      </form>
      <ul>
        {movieList
          ? movieList.map((movie) => {
              const index = getUrlParams(movie.link)['code'];
              return <MovieData key={index} movie={movie} />;
            })
          : '영화를 검색해주세요.'}
      </ul>
    </div>
  );
}

export default DataBlock;
