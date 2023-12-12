import Footer from '../../components/footer';
import Logo from '../../components/logo';
import User from '../../components/user';
import FilmsContainer from '../../components/films-container';
import {useAppSelector} from '../../hooks';

export function MyListPage() {
  const films = useAppSelector((state) => state.films);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{9}</span></h1>
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
