import Footer from '../../components/footer';
import Logo from '../../components/logo';
import User from '../../components/user';
import {Link, useParams} from 'react-router-dom';
import FilmsContainer from '../../components/films-container';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useEffect} from 'react';
import {fetchFilmAction, fetchSimilarFilmsAction} from '../../store/api-actions.ts';
import PageNotFoundError from '../../components/errors/page-not-found';
import Tabs from '../../components/tabs';
import {AppRoute, AuthorizationStatus, SIMILAR_FILMS_COUNT} from '../../constants.ts';
import Spinner from '../../components/spinner';
import {
  getFilm,
  getLoadingStatus,
  getSimilarFilms
} from '../../store/film-process/selectors.ts';
import {getAuthorizationStatus} from '../../store/user-process/selectors.ts';
import AddButton from '../../components/add-button';
import PlayButton from '../../components/play-button';

export function MoviePage() {
  const params = useParams();
  const dispatch = useAppDispatch();

  const film = useAppSelector(getFilm);
  const similarFilms = useAppSelector(getSimilarFilms);
  const status = useAppSelector(getAuthorizationStatus);
  const isLoading = useAppSelector(getLoadingStatus);


  useEffect(() => {
    dispatch(fetchFilmAction(params.id));
    dispatch(fetchSimilarFilmsAction(params.id));
  }, [dispatch, params]);

  if (film === null) {
    return (<PageNotFoundError/>);
  }

  if (status === AuthorizationStatus.Unknown || isLoading) {
    return (<Spinner/>);
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo/>

            <User/>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.year}</span>
              </p>

              <div className="film-card__buttons">
                <PlayButton film={film}/>
                <AddButton film={film}/>
                {status === AuthorizationStatus.Auth &&
                  <Link to={`${AppRoute.Movie}/${film.id}${AppRoute.Review}`} className="btn film-card__button">Add
                    review
                  </Link>}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={film.name} width="218"
                height="327"
              />
            </div>

            <Tabs film={film}/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsContainer films={similarFilms} filmsCount={SIMILAR_FILMS_COUNT}/>
        </section>

        <Footer/>
      </div>
    </>
  );
}
