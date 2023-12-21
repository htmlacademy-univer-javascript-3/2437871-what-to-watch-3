import {State} from '../../types/state.ts';
import {Film, FilmPromo, Films} from '../../types/film.ts';
import {NameSpace} from '../../constants.ts';

export const getLoadingStatus = (state: State): boolean => state[NameSpace.Films].isLoading;
export const getFilm = (state: State): Film | null => state[NameSpace.Films].selectedFilm;
export const getPromoFilm = (state: State): FilmPromo | null => state[NameSpace.Films].promoFilm;
export const getFilmsByGenre = (state: State): Films => state[NameSpace.Films].filmsByGenre;
export const getFavoriteFilms = (state: State): Films => state[NameSpace.Films].favoriteFilms;
export const getFavoriteFilmsCount = (state: State): number => state[NameSpace.Films].favoriteFilmsCount;
export const getFilmsCount = (state: State): number => state[NameSpace.Films].filmsCount;
export const getSimilarFilms = (state: State): Films => state[NameSpace.Films].similarFilms;
export const getGenre = (state: State): string => state[NameSpace.Films].selectedGenre;
export const getAvailableGenres = (state: State): string[] => state[NameSpace.Films].availableGenres;
