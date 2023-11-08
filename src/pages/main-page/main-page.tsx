import {Footer} from '../../components/footer/footer.tsx';
import {genresListTypes, filmCardsDescription} from '../../mocks/mocks.ts';
import {FilmCard} from '../../components/film-card/film-card.tsx';
import {Logo} from '../../components/logo/logo.tsx';
import {User} from '../../components/user/user.tsx';
import GenreList from '../../components/genre-list';

export type MainPageProps = {
  backgroundSrc: string;
  backgroundAlt: string;
  title: string;
  posterSrc: string;
  posterAlt: string;
  genre: string;
  year: number;
}

export function MainPage({backgroundSrc, backgroundAlt, title, posterSrc, posterAlt, genre, year}: MainPageProps){
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={backgroundSrc} alt={backgroundAlt}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header film-card__head">
          <Logo/>
          <User/>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={posterSrc} alt={posterAlt} width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{year}</span>
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
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            {genresListTypes.map((catalogGenre) => (
              <GenreList key={catalogGenre} title={catalogGenre}
                            className={catalogGenre === genresListTypes[0] ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'}
              />))}
          </ul>

          <div className="catalog__films-list">
            {filmCardsDescription.map((film) => (
              <FilmCard key={posterSrc} posterSrc={film.posterSrc} posterAlt={film.posterAlt}
                        title={film.title}
              />))}
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer/>
      </div>
    </>
  );
}
