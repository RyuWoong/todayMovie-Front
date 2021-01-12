import { v4 as uuid4 } from 'uuid';

function uuid() {
  const tokens = uuid4().split('-');
  return tokens[2] + tokens[1] + tokens[0] + tokens[3] + tokens[4];
}

export function setCookie(name) {
  const browserId = uuid();
  document.cookie = `${name}=${browserId} domain=localhost.com`;
}

export function getCookie(name) {
  const browserId = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return browserId ? browserId[2] : null;
}
