import axios from '@/lib/default';

export const getMyReview = (movieID) => {
  console.log('내 리뷰', movieID);
  return axios({ url: '/myreview', method: 'get', params: { movieID: movieID } });
};
