import {createAction} from '@reduxjs/toolkit';
import {FilmPromo, Films} from '../types/film.ts';
import {AppRoute, AuthorizationStatus} from '../constants.ts';
import {UserData} from '../types/user-data.ts';

export const getFilms = createAction('films/getFilms');
export const changeGenre = createAction('films/changeGenre', (genre: string) => ({
  payload: genre,
}));
export const showMoreFilms = createAction('films/showMore');
export const resetShowMore = createAction('films/resetShowMore');
export const loadFilms = createAction('data/loadFilms', (value: Films) => ({
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
export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
