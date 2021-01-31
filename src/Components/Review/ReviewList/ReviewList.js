import React from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';

function ReviewList({ children }) {
  return (
    <div>
      이래서 추천해요!
      <ReviewCard />
    </div>
  );
}

export default ReviewList;
