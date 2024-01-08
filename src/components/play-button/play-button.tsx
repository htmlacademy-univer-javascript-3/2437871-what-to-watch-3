import {Film, FilmPromo} from '../../types/film.ts';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../constants.ts';

type PlayButtonProps = {
  film: Film | FilmPromo;
}

export function PlayButton(props: PlayButtonProps) {
  return (
    <Link to={`${AppRoute.Player}/${props.film.id}`} className="btn btn--play film-card__button" type="button">
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </Link>
  );
}
