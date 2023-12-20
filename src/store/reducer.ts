import {createReducer} from '@reduxjs/toolkit';
import {
  changeGenre,
  getFilms, getUser, loadFavoriteFilms, loadFilm,
  loadFilms, loadReviews, loadSimilarFilms, requireAuthorization,
  resetShowMore,
  setLoadingStatus,
  setPromoFilm,
  showMoreFilms
} from './action.ts';
import {StoreState} from '../types/store-state.ts';
import {AuthorizationStatus, INITIAL_FILMS_COUNT, INITIAL_GENRE} from '../constants.ts';

const initialState : StoreState = {
  isLoading: false,
  promoFilm: null,
  selectedFilm: null,
  similarFilms: [],
  favoriteFilms: [],
  favoriteFilmsCount: 0,
  selectedGenre: INITIAL_GENRE,
  films: [],
  filmsByGenre: [],
  filmsCount: INITIAL_FILMS_COUNT,
  availableGenres: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
  reviews: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadFilm, (state, action) => {
      state.selectedFilm = action.payload;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(loadFavoriteFilms, (state, action) => {
      state.favoriteFilms = action.payload;
      state.favoriteFilmsCount = action.payload.length;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(getFilms, (state) => {
      state.filmsByGenre = state.selectedGenre === INITIAL_GENRE ?
        state.films :
        state.films.filter((film) => film.genre === state.selectedGenre);
    })
    .addCase(changeGenre, (state, action) => {
      state.selectedGenre = action.payload;
    })
    .addCase(showMoreFilms, (state) => {
      state.filmsCount += INITIAL_FILMS_COUNT;
    })
    .addCase(resetShowMore, (state) => {
      state.filmsCount = INITIAL_FILMS_COUNT;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.filmsByGenre = action.payload;
      state.availableGenres = [INITIAL_GENRE, ...new Set(action.payload.map((x) => x.genre))];
    })
    .addCase(setLoadingStatus, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(setPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(getUser, (state, action) => {
      state.user = action.payload;
    });
});
