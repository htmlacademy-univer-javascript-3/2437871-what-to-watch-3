import {createAction} from '@reduxjs/toolkit';
import {FilmPromo, Films} from '../types/film.ts';

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
