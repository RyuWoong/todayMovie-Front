import axios from 'axios';

const baseURL = (() => 'http://localhost:4000/')();

const defaultClient = axios.create({
  baseURL,
});

if (process.env.APP_ENV === 'server') {
  defaultClient.defaults.timeout = 3000;
}

export default defaultClient;
