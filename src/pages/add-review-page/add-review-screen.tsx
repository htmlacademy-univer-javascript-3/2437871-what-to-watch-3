import {User} from '../../components/user/user.tsx';
import {Logo} from '../../components/logo/logo.tsx';
import {AddReview} from '../../components/add-review/add-review.tsx';

export type AddReviewPageProps = {
  backgroundSrc: string;
  backgroundAlt: string;
  title: string;
  posterSrc: string;
  posterAlt: string;
}

export function AddReviewScreen({backgroundSrc, backgroundAlt, title, posterSrc, posterAlt}: AddReviewPageProps) {
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
                <a href="film-page.html" className="breadcrumbs__link">{title}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <User/>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={posterSrc} alt={posterAlt} width="218" height="327"/>
        </div>
      </div>

      <AddReview/>

    </section>
  );
}
