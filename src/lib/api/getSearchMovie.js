import axios from '@/lib/TMdefault';

export const getSearchMovie = (isQuery) => {
  console.log(('영화명', isQuery.movieNm));
  return axios({ url: '/search/movie', method: 'get', params: { query: isQuery.movieNm } });
};
