export const genresListTypes = ['All genres', 'Comedies', 'Crime', 'Documentary', 'Dramas', 'Horror', 'Kids & Family', 'Romance', 'Sci-Fi', 'Thrillers'];

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum AppRoute {
  Login = '/login',
  Main = '/',
  MyList = '/mylist',
  Movie = '/films',
  Review = '/review',
  Player = '/player',
  NotFound = '*',
}

export enum NameSpace {
  User = 'USER',
  Films = 'FILMS',
  Review = 'REVIEW',
}

export enum TabEnum {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

export const SIMILAR_FILMS_COUNT = 4;

export const INITIAL_GENRE = 'All genres';

export const EXECUTION_DELAY = 1000;

export const INITIAL_FILMS_COUNT = 8;

export const AUTH_TOKEN_KEY_NAME = 'WTW-token';
