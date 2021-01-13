function getUrlParams(url) {
  const params = {};
  url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (str, key, value) {
    params[key] = value;
  });
  return params;
}

export default getUrlParams;
