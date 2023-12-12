import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.ts';
import {AxiosInstance} from 'axios';
import { FilmPromo, Films} from '../types/film.ts';
import {loadFilms, setLoadingStatus, setPromoFilm} from './action.ts';

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
