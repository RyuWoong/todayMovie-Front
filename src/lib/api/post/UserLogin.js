import axios from 'lib/default';

export const UserLogin = (userEmail) => {
  console.log('이메일', userEmail);
  return axios({ url: '/login', method: 'POST', data: { email: userEmail } });
};
