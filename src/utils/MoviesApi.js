import { HEADERS } from "./MainApi";
export const BASE_URL = 'https://api.nomoreparties.co';

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const getAllMovies = () => {
  return fetch(`${BASE_URL}/beatfilm-movies`, {
    method: 'GET',
    credentials: 'include',
    headers: HEADERS,
  }).then((res) => checkResponse(res));
}
