import {Footer} from '../../components/footer/footer.tsx';
import {Logo} from '../../components/logo/logo.tsx';
import {User} from '../../components/user/user.tsx';
import {myListFilms} from '../../mocks/mocks.ts';
import {FilmCard} from '../../components/film-card/film-card.tsx';

export function MyListPage() {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
        <User/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {myListFilms.map((film) => <FilmCard key={film.posterSrc} posterSrc={film.posterSrc} posterAlt={film.posterAlt} title={film.title}/>)}
        </div>
      </section>

      <Footer/>
    </div>
  );
}
