import Footer from '../../components/footer';
import Logo from '../../components/logo';
import User from '../../components/user';
import {Films} from '../../types/types.ts';
import FilmsContainer from '../../components/films-container';

type MyListPageProps = {
  films: Films;
  myListFilmsCount: number;
}

export function MyListPage({films, myListFilmsCount}: MyListPageProps) {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{myListFilmsCount}</span></h1>
        <User/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsContainer films={films}/>
      </section>

      <Footer/>
    </div>
  );
}
