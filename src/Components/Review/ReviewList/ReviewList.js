import { Empty } from 'antd';
import React from 'react';
import ReviewButton from '../ReviewButton/ReviewButton';
import ReviewCard from '../ReviewCard/ReviewCard';

function ReviewList({ MyReview, ReviewData }) {
  return (
    <div>
      {MyReview.length > 0 ? <div>내리뷰!</div> : <ReviewButton />}
      <div>
        {ReviewData.length > 0 ? (
          ReviewData.map((review, index) => <ReviewCard key={index} Review={review} />)
        ) : (
          <Empty description={<span>리뷰가 없습니다.</span>} />
        )}
      </div>
    </div>
  );
}

export default ReviewList;
