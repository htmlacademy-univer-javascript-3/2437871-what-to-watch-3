import {Film, FilmPromo, Films} from './film.ts';

export type StoreState = {
  selectedGenre: string;
  films: Films;
  filmsCount: number;
  filmsByGenre: Films;
  selectedFilm: Film | null;
  promoFilm: FilmPromo | null;
  isLoading: boolean;
  availableGenres: string[];
};
