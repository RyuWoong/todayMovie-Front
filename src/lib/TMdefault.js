import axios from 'axios';

const baseURL = (() => 'https://api.themoviedb.org/3/')();
const TMClient = axios.create({
  baseURL,
  headers: {
    'Accept-Language': 'ko-KR;q=1',
    'Content-Language': 'ko-KR',
    'Content-Type': 'application/json;charset=utf-8',
  },
  params: { api_key: '2ad7149834c17a2f9401110f9269dcc6', language: 'ko', region: 'ko' },
  withCredentials: true,
});

TMClient.defaults.timeout = 5000;

export default TMClient;
