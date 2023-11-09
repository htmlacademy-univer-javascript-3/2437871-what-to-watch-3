import FilmCard from '../film-card';
import {useState} from 'react';
import {Films} from '../../types/types.ts';

export type FilmsContainerProps = {
  films: Films;
}

export function FilmsContainer({films}: FilmsContainerProps) {
  const [currentFilm, setCurrentFilm] = useState<string | null>(null);
  setCurrentFilm(currentFilm);
  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard key={film.id} id={film.id} posterSrc={film.posterSrc} posterAlt={film.posterAlt}
          title={film.title} onMouseEnter={setCurrentFilm} onMouseLeave={() => setCurrentFilm(null)}
        />))}
    </div>
  );
}
