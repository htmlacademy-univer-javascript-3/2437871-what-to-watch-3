import {Film} from '../../types/types.ts';

type MovieOverviewProps = {
  film: Film;
}

function MovieOverview({film}: MovieOverviewProps) {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.ratingScore}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{film.ratingLevel}</span>
          <span className="film-rating__count">{film.ratingCount}</span>
        </p>
      </div>

      <div className="film-card__text">
        {film.movieDescription}

        <p className="film-card__director"><strong>{film.movieDirector}</strong></p>

        <p className="film-card__starring"><strong>{film.movieStarring}</strong></p>
      </div>
    </>
  );
}

export default MovieOverview;
