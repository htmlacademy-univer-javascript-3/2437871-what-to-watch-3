import {Film} from '../../types/film.ts';

type MovieOverviewProps = {
  film: Film;
}

export function MovieOverview({film}: MovieOverviewProps) {
  const ratingFilm = () => {
    if (film.rating >= 0 && film.rating < 3) {
      return 'Bad';
    }
    if (film.rating >= 3 && film.rating < 5) {
      return 'Normal';
    }
    if (film.rating >= 5 && film.rating < 8) {
      return 'Good';
    }
    if (film.rating >= 8 && film.rating < 10) {
      return 'Very good';
    }
    if (film.rating === 10) {
      return 'Awesome';
    }
  };

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{ratingFilm()}</span>
          <span className="film-rating__count">{film.scoresCount}</span>
        </p>
      </div>

      <div className="film-card__text">
        {film.description}

        <p className="film-card__director"><strong>{`Director: ${film.director}`}</strong></p>

        <p className="film-card__starring"><strong>{`Starring: ${film.starring.join(' ')}`}</strong></p>
      </div>
    </>
  );
}
