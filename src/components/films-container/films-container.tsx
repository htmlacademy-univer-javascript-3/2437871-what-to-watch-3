import FilmCard from '../film-card';
import {Films} from '../../types/types.ts';
import {useAppSelector} from '../../hooks';

export type FilmsContainerProps = {
  films: Films;
}

export function FilmsContainer({films}: FilmsContainerProps) {
  const filmsCount = useAppSelector((state) => state.filmsCount);
  return (
    <div className="catalog__films-list">
      {films.slice(0, filmsCount).map((film) => (
        <FilmCard key={film.id} id={film.id} posterSrc={film.posterSrc} posterAlt={film.posterAlt}
          title={film.title} videoLink={film.video}
        />))}
    </div>
  );
}
