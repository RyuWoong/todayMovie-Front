import React, { useState } from 'react';
import { getMovieInfo } from '../lib/api/getMovieInfo';
import ReviewMovieInfo from '../Components/Review/ReviewMovieInfo/ReviewMovieInfo';
import ReviewTemplate from '../Components/Review/ReviewTemplate/ReviewTemplate';
import ReviewList from '../Components/Review/ReviewList/ReviewList';

function Movie({ match }) {
  const [movieInfo, setMovieInfo] = useState(null);
  console.log(match);
  const { id } = match.params;
  const promiseMovie = getMovieInfo(id);
  promiseMovie.then((result) => {
    console.log(result.data);
    setMovieInfo(result.data);
  });

  return (
    <ReviewTemplate className="Page">
      {movieInfo && (
        <>
          <ReviewMovieInfo movie={movieInfo} />
          <ReviewList />
        </>
      )}
    </ReviewTemplate>
  );
}

export default Movie;
