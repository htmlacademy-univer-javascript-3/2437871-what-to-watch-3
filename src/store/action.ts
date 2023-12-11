import {createAction} from '@reduxjs/toolkit';

export const getFilms = createAction('films/getFilms');
export const changeGenre = createAction('films/changeGenre', (genre: string) => ({
  payload: genre,
}));
