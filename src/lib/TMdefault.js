import axios from 'axios';

const baseURL = (() => 'https://api.themoviedb.org/3/')();
const TMClient = axios.create({
  baseURL,
  headers: {
    Accept: '*/*',
    'Accept-Language': 'ko-KR;q=1',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  params: { api_key: '2ad7149834c17a2f9401110f9269dcc6', language: 'ko', region: 'ko' },
});

TMClient.defaults.timeout = 3000;

export default TMClient;
