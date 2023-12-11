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

export enum TabEnum {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

export const INITIAL_GENRE = 'All genres';

export const EXECUTION_DELAY = 1000;
