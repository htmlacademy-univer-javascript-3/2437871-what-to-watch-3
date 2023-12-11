import FilmCard from '../film-card';
import {Films} from '../../types/film.ts';
import {useAppSelector} from '../../hooks';

export type FilmsContainerProps = {
  films: Films;
}

export function FilmsContainer({films}: FilmsContainerProps) {
  const filmsCount = useAppSelector((state) => state.filmsCount);
  return (
    <div className="catalog__films-list">
      {films.slice(0, filmsCount).map((film) => (
        <FilmCard key={film.id} film={film}/>))}
    </div>
  );
}
