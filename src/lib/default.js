import axios from 'axios';

const baseURL = (() => 'http://localhost:4000/')();
axios.defaults.withCredentials = true;
const defaultClient = axios.create({
  baseURL,
});

defaultClient.defaults.timeout = 3000;

export default defaultClient;
