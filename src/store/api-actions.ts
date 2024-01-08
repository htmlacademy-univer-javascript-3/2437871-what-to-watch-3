import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.ts';
import {AxiosInstance} from 'axios';
import {AppRoute} from '../constants.ts';
import {dropToken, saveToken} from '../services/token.ts';
import {AuthData} from '../types/auth-data.ts';
import {UserData} from '../types/user-data.ts';
import {Film, FilmPromo, Films} from '../types/film.ts';
import {
  redirectToRoute
} from './action.ts';
import {Review, Reviews} from '../types/review.ts';

export const fetchAllFilmsAction = createAsyncThunk<Films, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Films>('/films');

    return data;
  },
);

export const fetchFilmAction = createAsyncThunk<Film | null, string | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilm',
  async (filmId, {dispatch, extra: api}) => {
    if (filmId === undefined) {
      return null;
    }
    const {data, status} = await api.get<Film>(`/films/${filmId}`);
    if (status === 404) {
      dispatch(redirectToRoute(AppRoute.NotFound));
      return null;
    }

    return data;
  },
);

export const fetchSimilarFilmsAction = createAsyncThunk<Films, string | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchSimilarFilms',
  async (filmId, {dispatch, extra: api}) => {
    if (filmId === undefined) {
      return [];
    }
    const {data, status} = await api.get<Films>(`/films/${filmId}/similar`);
    if (status === 404) {
      dispatch(redirectToRoute(AppRoute.NotFound));
    }

    return data;
  },
);

export const fetchFavoriteFilmsAction = createAsyncThunk<Films, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavoriteFilm',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Films>('/favorite');

    return data;
  },
);

export const fetchReviewsAction = createAsyncThunk<Reviews, string | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async (filmId, {extra: api}) => {
    if (filmId === undefined) {
      return [];
    }
    const {data} = await api.get<Reviews>(`/comments/${filmId}`);
    return data;
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

export const fetchPromoFilmAction = createAsyncThunk<FilmPromo, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchPromo',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<FilmPromo>('/promo');

    return data;
  },
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<UserData>('/login');

    return data;
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>('/login', {email, password});
    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.Main));

    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete('/logout');
    dropToken();
  },
);

export const fetchChangeFavoriteFilmsAction = createAsyncThunk<Film, { filmId: string; status : number }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchChangeFavoriteFilm',
  async ({filmId, status}, {extra: api}) => {
    const {data} = await api.post<Film>(`favorite/${filmId}/${status}`);

    return data;
  },
);
