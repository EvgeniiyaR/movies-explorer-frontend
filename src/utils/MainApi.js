import { HEADERS } from "./MainApi";
export const BASE_URL = 'https://api.movies.evgeniiyar.nomoreparties.sbs';

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    credentials: 'include',
    headers: HEADERS,
    body: JSON.stringify({ name, email, password }),
  }).then((res) => checkResponse(res));
}

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: HEADERS,
    body: JSON.stringify({ email, password }),
  }).then((res) => checkResponse(res));
}

export const getUserInfo = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    credentials: 'include',
    headers: HEADERS,
  }).then((res) => checkResponse(res));
}

export const deleteCookies = () => {
  return fetch(`${BASE_URL}/signout`, {
    method: 'GET',
    credentials: 'include',
    headers: HEADERS,
  }).then((res) => checkResponse(res));
}

export const editUserInfo = (name, email) => {
  return fetch(`${this._url}/users/me`, {
    method: 'PATCH',
    credentials: 'include',
    headers: HEADERS,
    body: JSON.stringify({ name, email }),
  }).then((res) => this._checkResponse(res));
}

export const getMovies = () => {
  return fetch(`${this._url}/movies`, {
    method: 'GET',
    credentials: 'include',
    headers: HEADERS,
  }).then((res) => checkResponse(res));
}

export const deleteMovie = (id) => {
  return fetch(`${this._url}/movies/${id}`, {
    method: 'DELETE',
    credentials: 'include',
    headers: HEADERS,
  }).then((res) => checkResponse(res));
}

export const createMovie = (country, director, duration, year, description, image, trailerLink, thumbnail, nameRU, nameEN, movieId) => {
  return fetch(`${this._url}/movies`, {
    method: 'POST',
    credentials: 'include',
    headers: HEADERS,
    body: JSON.stringify({ country, director, duration, year, description, image, trailerLink, thumbnail, nameRU, nameEN, movieId }),
  }).then((res) => checkResponse(res));
}
