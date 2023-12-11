import {createAction} from '@reduxjs/toolkit';

export const getFilms = createAction('films/getFilms');
export const changeGenre = createAction('films/changeGenre', (genre: string) => ({
  payload: genre,
}));
export const showMoreFilms = createAction('films/showMore');
export const resetShowMore = createAction('films/resetShowMore');
