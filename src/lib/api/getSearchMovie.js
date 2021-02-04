import axios from '@/lib/default';

export const getSearchMovie = (isQuery) => {
  console.log('영화명', isQuery.movieNm);
  return axios({ url: '/searchmovie', method: 'get', params: { movieNm: isQuery.movieNm } });
};
