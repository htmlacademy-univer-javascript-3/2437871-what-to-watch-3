import {store} from '../store';
import {Film, FilmPromo, Films} from './film.ts';
import {AuthorizationStatus} from '../constants.ts';
import {UserData} from './user-data.ts';
import {Reviews} from './review.ts';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type FilmsProcess = {
  selectedGenre: string;
  films: Films;
  filmsCount: number;
  filmsByGenre: Films;
  selectedFilm: Film | null;
  similarFilms: Films;
  favoriteFilms: Films;
  favoriteFilmsCount: number;
  promoFilm: FilmPromo | null;
  isLoading: boolean;
  availableGenres: string[];
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: UserData | null;
}

export type ReviewProcess = {
  reviews: Reviews;
}
