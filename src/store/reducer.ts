import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, getFilms} from './action.ts';
import {mockFilms} from '../mocks/films.ts';
import {StoreState} from '../types/types.ts';
import {INITIAL_GENRE} from '../constants.ts';

const initialState : StoreState = {
  genre: INITIAL_GENRE,
  films: mockFilms,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getFilms, (state) => {
      state.films = state.genre === INITIAL_GENRE ?
        mockFilms :
        mockFilms.filter((film) => film.genre === state.genre);
    })
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    });
});
