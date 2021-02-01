import React, { useState, useEffect } from 'react';
import { getMovieInfo } from '../lib/api/getMovieInfo';
import ReviewMovieInfo from '../Components/Review/ReviewMovieInfo/ReviewMovieInfo';
import ReviewTemplate from '../Components/Review/ReviewTemplate/ReviewTemplate';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { getReviewList } from '../lib/api/getReviewList';

function Movie({ location, match }) {
  const [movieInfo, setMovieInfo] = useState();
  const [ReviewList, setReviewList] = useState();
  const LoadingSpin = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  const { id } = match.params;

  useEffect(() => {
    const fetchMovieInfo = getMovieInfo(id);
    const fetchReviewList = getReviewList(id);
    fetchMovieInfo
      .then((result) => {
        console.log(result.data);
        setMovieInfo(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
    fetchReviewList
      .then((result) => {
        console.log(result.data);
        setReviewList(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [location]);

  return (
    <div className="Page">
      <ReviewTemplate>
        {movieInfo ? (
          <>
            <ReviewMovieInfo movie={movieInfo} />
          </>
        ) : (
          <Spin indicator={LoadingSpin} />
        )}
      </ReviewTemplate>
    </div>
  );
}

export default Movie;
