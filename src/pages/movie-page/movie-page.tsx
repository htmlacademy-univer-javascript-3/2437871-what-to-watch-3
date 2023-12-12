import Footer from '../../components/footer';
import Logo from '../../components/logo';
import User from '../../components/user';
import {Link, useParams} from 'react-router-dom';
import FilmsContainer from '../../components/films-container';
import {AppRoute} from '../../constants.ts';
import {useAppSelector} from '../../hooks';

export function MoviePage() {
  const params = useParams();
  const films = useAppSelector((state) => state.films);
  const film = films.filter((f) => f.id === params.id)[0];

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.previewImage} alt={film.name}/>
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
                <Link to={`${AppRoute.Movie }/${film.id}${ AppRoute.Review}`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.previewImage} alt={film.name} width="218"
                height="327"
              />
            </div>

            {/*<Tabs film={film} />*/}
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsContainer films={films}/>
        </section>

        <Footer/>
      </div>
    </>
  );
}
