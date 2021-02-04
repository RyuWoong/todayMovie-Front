import axios from '@/lib/default';

export const getMovieInfo = (movieID) => {
  console.log(('영화ID', movieID));
  return axios({ url: '/movie', method: 'get', params: { movieID } });
};
