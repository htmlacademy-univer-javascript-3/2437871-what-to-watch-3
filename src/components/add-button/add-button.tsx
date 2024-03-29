import {useAppDispatch, useAppSelector} from '../../hooks';
import {getFavoriteFilmsCount} from '../../store/film-process/selectors.ts';
import {Film, FilmPromo} from '../../types/film.ts';
import {useEffect} from 'react';
import {fetchChangeFavoriteFilmsAction, fetchFavoriteFilmsAction} from '../../store/api-actions.ts';
import {getAuthorizationStatus} from '../../store/user-process/selectors.ts';
import {AuthorizationStatus} from '../../constants.ts';

type AddButtonProps = {
  film: Film | FilmPromo;
}

export function AddButton(props: AddButtonProps) {
  const dispatch = useAppDispatch();
  const favoriteFilmsCount = useAppSelector(getFavoriteFilmsCount);
  const film = props.film;
  const authStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    dispatch(fetchFavoriteFilmsAction());
  }, [dispatch, film.isFavorite]);

  const handleChangeFilmStatus = () => {
    dispatch(fetchChangeFavoriteFilmsAction({filmId: film.id, status: Number(!film.isFavorite)}));
  };

  return (
    <button className="btn btn--list film-card__button" type="button"
      onClick={handleChangeFilmStatus}
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        {film.isFavorite ? <use xlinkHref="#in-list"></use> : <use xlinkHref="#add"></use>}
      </svg>
      <span>My list</span>
      <span className="film-card__count">{authStatus === AuthorizationStatus.Auth ? favoriteFilmsCount : 0}</span>
    </button>
  );
}
