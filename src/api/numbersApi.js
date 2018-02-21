import 'whatwg-fetch';
import getBaseUrl from './baseUrl';
const baseUrl = getBaseUrl();

export function getNumbers() {
  return get('numbers');
}

function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error); // eslint-disable-line no-console
}
