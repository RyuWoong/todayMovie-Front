import { Card } from 'antd';
import React from 'react';

function ReviewCard({ Review }) {
  return (
    <Card style={{ width: '200px', height: '300px' }}>
      <div className="ReviewRate">{Review.rating}</div>
      <div className="ReviewPlatform">{Review.platform}</div>
      <div className="ReviewText">{Review.content}</div>
      <div className="Reviewer">by.{Review.userID}</div>
    </Card>
  );
}

export default ReviewCard;
