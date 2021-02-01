import axios from '@/lib/default';

export const getReviewList = (isQuery) => {
  console.log(('리뷰목록', isQuery.movieID));
  return axios({ url: '/review', method: 'get', params: { query: isQuery.movieID } });
};
