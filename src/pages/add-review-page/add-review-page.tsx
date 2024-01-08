import User from '../../components/user';
import Logo from '../../components/logo';
import AddReview from '../../components/add-review';
import {Link, useParams} from 'react-router-dom';
import {AppRoute} from '../../constants.ts';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getFilm, getLoadingStatus} from '../../store/film-process/selectors.ts';
import PageNotFoundError from '../../components/errors/page-not-found';
import Spinner from '../../components/spinner';
import {useEffect} from 'react';
import {fetchFilmAction} from '../../store/api-actions.ts';

export function AddReviewPage() {
  const params = useParams();
  const dispatch = useAppDispatch();
  const film = useAppSelector(getFilm);
  const isLoading = useAppSelector(getLoadingStatus);

  useEffect(() => {
    dispatch(fetchFilmAction(params.id));
  }, [dispatch, params]);

  if (isLoading) {
    return (<Spinner/>);
  }

  if (film === null) {
    return (<PageNotFoundError/>);
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo/>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`${AppRoute.Movie }/${film.id}`} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <User/>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={film.name} width={218} height={327}/>
        </div>
      </div>

      <AddReview/>

    </section>
  );
}
