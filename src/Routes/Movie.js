import React, { useState, useEffect } from 'react';

import ReviewMovieInfo from '../Components/Review/ReviewMovieInfo/ReviewMovieInfo';
import ReviewTemplate from '../Components/Review/ReviewTemplate/ReviewTemplate';
import ReviewList from '../Components/Review/ReviewList/ReviewList';

import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import { getMyReview } from '../lib/api/getMyReview';
import { getReviewData } from '../lib/api/getReviewData';
import { getMovieInfo } from '../lib/api/getMovieInfo';

function Movie({ location, match }) {
  const [MovieInfo, setMovieInfo] = useState();
  const [ReviewData, setReviewData] = useState();
  const [MyReview, setMyReview] = useState();
  const LoadingSpin = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  const { id } = match.params;

  useEffect(() => {
    const fetchMovieInfo = getMovieInfo(id);
    const fetchReviewList = getReviewData(id);
    const fetchMyReview = getMyReview(id);
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
        const Data = result.data.data;
        setReviewData(Data);
      })
      .catch((err) => {
        console.log(err);
      });
    fetchMyReview
      .then((result) => {
        const Data = result.data.data;
        setMyReview(Data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [location]);

  return (
    <div className="Page" style={{ backgroundColor: 'white' }}>
      <ReviewTemplate>
        {MovieInfo && ReviewData && MyReview ? (
          <>
            <ReviewMovieInfo movie={MovieInfo} />
            <ReviewList MyReview={MyReview} ReviewData={ReviewData} />
          </>
        ) : (
          <Spin indicator={LoadingSpin} />
        )}
      </ReviewTemplate>
    </div>
  );
}

export default Movie;
