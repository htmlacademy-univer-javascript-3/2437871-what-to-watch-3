import {Film, FilmPromo, Films} from './film.ts';
import {AuthorizationStatus} from '../constants.ts';
import {UserData} from './user-data.ts';

export type StoreState = {
  selectedGenre: string;
  films: Films;
  filmsCount: number;
  filmsByGenre: Films;
  selectedFilm: Film | null;
  promoFilm: FilmPromo | null;
  isLoading: boolean;
  availableGenres: string[];
  authorizationStatus: AuthorizationStatus;
  user: UserData | null;
};
