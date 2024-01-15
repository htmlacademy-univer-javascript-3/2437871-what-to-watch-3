import Footer from '../../components/footer';
import Logo from '../../components/logo';
import User from '../../components/user';
import GenresList from '../../components/genre-list';
import FilmsContainer from '../../components/films-container';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useEffect} from 'react';
import {AuthorizationStatus} from '../../constants.ts';
import {getFilms, resetShowMore} from '../../store/film-process/film-process.ts';
import {
  getFilmsByGenre,
  getFilmsCount,
  getGenre,
  getLoadingStatus,
  getPromoFilm
} from '../../store/film-process/selectors.ts';
import {getAuthorizationStatus} from '../../store/user-process/selectors.ts';
import ShowMore from '../../components/show-more';
import PageNotFoundError from '../../components/errors/page-not-found';
import Spinner from '../../components/spinner';
import PlayButton from '../../components/play-button';
import AddButton from '../../components/add-button';

export function MainPage(){
  const dispatch = useAppDispatch();
  const filmsByGenre = useAppSelector(getFilmsByGenre);
  const selectedGenre = useAppSelector(getGenre);
  const filmsCount = useAppSelector(getFilmsCount);
  const promoFilm = useAppSelector(getPromoFilm);
  const isLoading = useAppSelector(getLoadingStatus);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    dispatch(getFilms());
  }, [selectedGenre, dispatch]);

  useEffect(() => {
    dispatch(resetShowMore());
  }, [dispatch, selectedGenre]);

  if (promoFilm === null) {
    return (<PageNotFoundError/>);
  }

  if (authorizationStatus === AuthorizationStatus.Unknown || isLoading) {
    return (<Spinner/>);
  }

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm.backgroundImage} alt={promoFilm.backgroundImage}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header film-card__head">
          <Logo/>
          <User/>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm.posterImage} alt={promoFilm.backgroundImage} width="218" height={327}/>
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <PlayButton film={promoFilm}/>
                <AddButton film={promoFilm}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <GenresList/>
          <FilmsContainer films={filmsByGenre} filmsCount={filmsCount}/>
          {filmsByGenre.length >= filmsCount && <ShowMore/>}
        </section>

        <Footer/>
      </div>
    </>
  );
}
