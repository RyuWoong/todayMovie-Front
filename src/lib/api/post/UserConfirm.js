import axios from 'lib/default';

export const UserConfirm = (query) => {
  console.log('토큰', query);

  return axios({ url: '/confirm', method: 'GET', params: { token: query.token } });
};
