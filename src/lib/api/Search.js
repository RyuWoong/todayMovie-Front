import axios from '@/lib/default';

export const Search = (query) => {
  console.log(('영화명', query.movieNm));
  return axios({ url: '/movie', method: 'get', params: { movieNm: query.movieNm } });
};
