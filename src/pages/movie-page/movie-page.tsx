import {Footer} from '../../components/footer/footer.tsx';
import {moreLikeThis} from '../../mocks/mocks.ts';
import {FilmCard} from '../../components/film-card/film-card.tsx';
import {Logo} from '../../components/logo/logo.tsx';
import {User} from '../../components/user/user.tsx';
import CardsNavigation from '../../components/cards-navigation';

export type MoviePageProps = {
  backgroundSrc: string;
  backgroundAlt: string;
  title: string;
  posterSrc: string;
  posterAlt: string;
  genre: string;
  year: number;
  ratingScore: string;
  ratingLevel: string;
  ratingCount: string;
  movieDescription: string;
  movieDirector: string;
  movieStarring: string;
}

export function MoviePage(props: MoviePageProps) {
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={props.backgroundSrc} alt={props.backgroundAlt}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo/>

            <User/>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{props.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{props.genre}</span>
                <span className="film-card__year">{props.year}</span>
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
                <a href="add-review.html" className="btn film-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={props.posterSrc} alt={props.posterAlt} width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <CardsNavigation/>

              <div className="film-rating">
                <div className="film-rating__score">{props.ratingScore}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">{props.ratingLevel}</span>
                  <span className="film-rating__count">{props.ratingCount}</span>
                </p>
              </div>

              <div className="film-card__text">
                {props.movieDescription}

                <p className="film-card__director"><strong>{props.movieDirector}</strong></p>

                <p className="film-card__starring"><strong>{props.movieStarring}</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            {moreLikeThis.map((film) => <FilmCard key={props.posterSrc} posterSrc={film.posterSrc} posterAlt={film.posterAlt} title={film.title}/>)}
          </div>
        </section>

        <Footer/>
      </div>
    </>
  );
}
