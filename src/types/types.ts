export type Film = {
  id: string;
  posterSrc: string;
  posterAlt: string;
  title: string;
  genre: string;
  year: number;
  ratingScore: string;
  ratingLevel: string;
  ratingCount: string;
  movieDescription: string;
  movieDirector: string;
  movieStarring: string;
  video: string;
  runTime: string;
  released: number;
}

export type Films = Film[];

export type Review = {
  id: string;
  rating: number;
  comment: string;
  date: string;
  author: string;
}

export type Reviews = Review[];

export type StoreState = {
  genre: string;
  films: Films;
};
