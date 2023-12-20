import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.ts';
import {AxiosInstance} from 'axios';
import {AppRoute, AuthorizationStatus} from '../constants.ts';
import {dropToken, saveToken} from '../services/token.ts';
import {AuthData} from '../types/auth-data.ts';
import {UserData} from '../types/user-data.ts';
import {Film, FilmPromo, Films} from '../types/film.ts';
import {
  loadFavoriteFilms,
  loadFilm,
  loadFilms,
  loadReviews,
  loadSimilarFilms,
  redirectToRoute,
  requireAuthorization,
  setLoadingStatus,
  setPromoFilm
} from './action.ts';
import {Review, Reviews} from '../types/review.ts';

export const fetchAllFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setLoadingStatus(true));
    const {data} = await api.get<Films>('/films');
    dispatch(loadFilms(data));
    dispatch(setLoadingStatus(false));
  },
);

export const fetchFilmAction = createAsyncThunk<void, string | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilm',
  async (filmId, {dispatch, extra: api}) => {
    try {
      if (filmId === undefined) {
        return;
      }
      const {data} = await api.get<Film>(`/films/${filmId}`);
      dispatch(loadFilm(data));
    } catch {
      dispatch(redirectToRoute(AppRoute.NotFound));
    }
  },
);

export const fetchSimilarFilmsAction = createAsyncThunk<void, string | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchSimilarFilms',
  async (filmId, {dispatch, extra: api}) => {
    try {
      if (filmId === undefined) {
        return;
      }
      const {data} = await api.get<Films>(`/films/${filmId}/similar`);
      dispatch(loadSimilarFilms(data));
    } catch {
      dispatch(redirectToRoute(AppRoute.NotFound));
    }
  },
);

export const fetchFavoriteFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavoriteFilm',
  async (_arg, {dispatch, extra: api}) => {
    try {
      dispatch(setLoadingStatus(true));
      const {data} = await api.get<Films>('/favorite');
      dispatch(loadFavoriteFilms(data));
    } finally {
      dispatch(setLoadingStatus(false));
    }
  },
);

export const fetchReviewsAction = createAsyncThunk<void, string | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async (filmId, {dispatch, extra: api}) => {
    if (filmId === undefined) {
      return;
    }
    const {data} = await api.get<Reviews>(`/comments/${filmId}`);
    dispatch(loadReviews(data));
  },
);

export const fetchAddReviewAction = createAsyncThunk<void, { filmId: string | undefined; comment : string; rating : number}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchAddReview',
  async ({ filmId, comment, rating }, { dispatch, extra: api }) => {
    if (filmId === undefined) {
      return;
    }
    await api.post<Review>(`/comments/${filmId}`, {comment, rating});
    dispatch(redirectToRoute(`${AppRoute.Movie }/${filmId}`));
  },
);

export const fetchPromoFilmAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchPromo',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setLoadingStatus(true));
    const {data} = await api.get<FilmPromo>('/promo');
    dispatch(setPromoFilm(data));
    dispatch(setLoadingStatus(false));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get('/login');
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>('/login', {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete('/logout');
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
