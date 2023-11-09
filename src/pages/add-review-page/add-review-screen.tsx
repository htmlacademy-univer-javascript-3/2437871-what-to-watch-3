import User from '../../components/user';
import Logo from '../../components/logo';
import AddReview from '../../components/add-review';
import {Films} from '../../types/types.ts';
import {Link, useParams} from 'react-router-dom';
import {AppRoute} from '../../mocks/mocks.ts';

export type AddReviewPageProps = {
  backgroundSrc: string;
  backgroundAlt: string;
  films: Films;
}

export function AddReviewScreen({backgroundSrc, backgroundAlt, films}: AddReviewPageProps) {
  const params = useParams();
  const film = films.filter((film) => film.id === params.id)[0];

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundSrc} alt={backgroundAlt}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo/>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`${AppRoute.Movie }/${film.id}`} className="breadcrumbs__link">{film.title}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <User/>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterSrc} alt={film.posterAlt} width="218" height={327}/>
        </div>
      </div>

      <AddReview/>

    </section>
  );
}
