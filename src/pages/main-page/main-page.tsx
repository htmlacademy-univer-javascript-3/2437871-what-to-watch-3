import Footer from '../../components/footer';
import Logo from '../../components/logo';
import User from '../../components/user';
import GenresList from '../../components/genre-list';
import FilmsContainer from '../../components/films-container';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useEffect} from 'react';
import {getFilms} from '../../store/action.ts';
import ShowMore from '../../components/show-more';

export function MainPage(){
  const dispatch = useAppDispatch();
  const {filmsByGenre, selectedGenre, filmsCount, promoFilm} = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(getFilms());
  }, [selectedGenre, dispatch]);
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm?.backgroundImage} alt={promoFilm?.backgroundImage}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header film-card__head">
          <Logo/>
          <User/>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm?.posterImage} alt={promoFilm?.backgroundImage} width="218" height={327}/>
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm?.genre}</span>
                <span className="film-card__year">{promoFilm?.year}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span className="film-card__count">{9}</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <GenresList/>
          <FilmsContainer films={filmsByGenre}/>
          {filmsByGenre.length >= filmsCount && <ShowMore/>}
        </section>

        <Footer/>
      </div>
    </>
  );
}