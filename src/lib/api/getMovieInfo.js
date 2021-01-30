import axios from '@/lib/TMdefault';

export const getMovieInfo = (movieID) => {
  console.log(('영화ID', movieID));
  return axios({ url: `/movie/${movieID}`, method: 'get' });
};
