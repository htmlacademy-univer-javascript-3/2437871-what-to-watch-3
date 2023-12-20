import {createAction} from '@reduxjs/toolkit';
import {AppRoute, AuthorizationStatus} from '../constants.ts';
import {Film, FilmPromo, Films} from '../types/film.ts';
import {UserData} from '../types/user-data.ts';
import {Reviews} from '../types/review.ts';

export const getFilms = createAction('films/getFilms');
export const changeGenre = createAction('films/changeGenre', (genre: string) => ({
  payload: genre,
}));
export const showMoreFilms = createAction('films/showMore');
export const resetShowMore = createAction('films/resetShowMore');
export const loadFilms = createAction('data/loadFilms', (value: Films) => ({
  payload: value,
}));
export const loadFilm = createAction('data/loadFilm', (value: Film) => ({
  payload: value,
}));
export const loadSimilarFilms = createAction('data/loadSimilarFilms', (value: Films) => ({
  payload: value,
}));
export const loadFavoriteFilms = createAction('data/loadFavoriteFilms', (value: Films) => ({
  payload: value,
}));
export const loadReviews = createAction('data/loadReviews', (value: Reviews) => ({
  payload: value,
}));
export const setPromoFilm = createAction('films/setPromo', (value: FilmPromo) => ({
  payload: value,
}));
export const setLoadingStatus = createAction<boolean>('app/loadingStatus');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const getUser = createAction('data/getUser', (value : UserData) => ({
  payload: value,
}));
export const redirectToRoute = createAction<AppRoute | string>('app/redirectToRoute');
