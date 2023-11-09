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
}

export type Films = Film[];
