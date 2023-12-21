import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  fetchAllFilmsAction, fetchFavoriteFilmsAction, fetchFilmAction, fetchPromoFilmAction, fetchSimilarFilmsAction,
} from '../api-actions';
import {INITIAL_FILMS_COUNT, INITIAL_GENRE, NameSpace} from '../../constants.ts';
import {FilmsProcess} from '../../types/state.ts';

const initialState : FilmsProcess = {
  isLoading: false,
  films: [],
  filmsByGenre: [],
  promoFilm: null,
  selectedFilm: null,
  similarFilms: [],
  favoriteFilms: [],
  favoriteFilmsCount: 0,
  filmsCount: INITIAL_FILMS_COUNT,
  selectedGenre: INITIAL_GENRE,
  availableGenres: [],
};

export const filmsProcess = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {
    getFilms: (state) => {
      state.filmsByGenre = state.selectedGenre === INITIAL_GENRE ?
        state.films :
        state.films.filter((film) => film.genre === state.selectedGenre);
    },
    changeGenre: (state, action : PayloadAction<string>) => {
      state.selectedGenre = action.payload;
    },
    showMoreFilms: (state) => {
      state.filmsCount += INITIAL_FILMS_COUNT;
    },
    resetShowMore: (state) => {
      state.filmsCount = INITIAL_FILMS_COUNT;
    }
  },
  extraReducers: function (builder) {
    builder
      .addCase(fetchAllFilmsAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.filmsByGenre = action.payload;
        state.availableGenres = [INITIAL_GENRE, ...new Set(action.payload.map((x) => x.genre))];
        state.isLoading = false;
      })
      .addCase(fetchSimilarFilmsAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSimilarFilmsAction.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchFavoriteFilmsAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFavoriteFilmsAction.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
        state.favoriteFilmsCount = action.payload.length;
        state.isLoading = false;
      })
      .addCase(fetchFilmAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFilmAction.fulfilled, (state, action) => {
        state.selectedFilm = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchPromoFilmAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
        state.isLoading = false;
      });
  }
});

export const {getFilms, changeGenre, showMoreFilms, resetShowMore} = filmsProcess.actions;
