import FilmCard from '../film-card';
import {Films} from '../../types/types.ts';

export type FilmsContainerProps = {
  films: Films;
}

export function FilmsContainer({films}: FilmsContainerProps) {
  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard key={film.id} id={film.id} posterSrc={film.posterSrc} posterAlt={film.posterAlt}
          title={film.title} videoLink={film.video}
        />))}
    </div>
  );
}
