import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, getFilms, resetShowMore, showMoreFilms} from './action.ts';
import {mockFilms} from '../mocks/films.ts';
import {StoreState} from '../types/types.ts';
import {INITIAL_FILMS_COUNT, INITIAL_GENRE} from '../constants.ts';

const initialState : StoreState = {
  selectedGenre: INITIAL_GENRE,
  films: mockFilms,
  filmsCount: INITIAL_FILMS_COUNT,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getFilms, (state) => {
      state.films = state.selectedGenre === INITIAL_GENRE ?
        mockFilms :
        mockFilms.filter((film) => film.genre === state.selectedGenre);
    })
    .addCase(changeGenre, (state, action) => {
      state.selectedGenre = action.payload;
    })
    .addCase(showMoreFilms, (state) => {
      state.filmsCount += INITIAL_FILMS_COUNT;
    })
    .addCase(resetShowMore, (state) => {
      state.filmsCount = INITIAL_FILMS_COUNT;
    });
});
