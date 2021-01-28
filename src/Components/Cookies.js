import { getCookie, setCookie } from '@/utils/BrowserId';

function Cookies() {
  if (getCookie('tid') === null) {
    setCookie('tid');
  }
  if (getCookie('token') !== null) {
    return true;
  }
  return false;
}

export default Cookies;
