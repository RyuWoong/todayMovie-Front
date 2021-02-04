import axios from '@/lib/default';

export const putUserReview = (query) => {
  console.log('리뷰전송', query);
  return axios({ url: '/Review', method: 'POST', data: { review: query } });
};
