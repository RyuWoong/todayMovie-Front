import axios from '@/lib/default';

export const getReviewData = (movieID) => {
  console.log('리뷰목록', movieID);
  return axios({ url: '/review', method: 'get', params: { movieID: movieID } });
};
