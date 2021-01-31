import { Card } from 'antd';
import React from 'react';

function ReviewCard({ ReviewData }) {
  return (
    <Card>
      <div className="ReviewText">{ReviewData.text}</div>
      <div className="Reviewer">by.{ReviewData.email}</div>
    </Card>
  );
}

export default ReviewCard;
