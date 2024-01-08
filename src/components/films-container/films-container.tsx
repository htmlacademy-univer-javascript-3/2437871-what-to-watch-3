import FilmCard from '../film-card';
import {Films} from '../../types/film.ts';

export type FilmsContainerProps = {
  films: Films;
  filmsCount: number;
}

export function FilmsContainer({films, filmsCount}: FilmsContainerProps) {
  return (
    <div className="catalog__films-list">
      {films.slice(0, filmsCount).map((film) => (
        <FilmCard key={film.id} film={film}/>))}
    </div>
  );
}
