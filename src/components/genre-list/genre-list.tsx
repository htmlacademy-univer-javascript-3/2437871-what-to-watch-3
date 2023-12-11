import cn from 'classnames';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeGenre} from '../../store/action.ts';

export type GenreListProps = {
  genres: string[];
}

export function GenreList({genres} : GenreListProps) {
  const selectedGenre = useAppSelector((state) => state.selectedGenre);
  const dispatch = useAppDispatch();
  return (
    <>
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <ul className="catalog__genres-list">
        {genres.map((genre) => (
          <li key={genre} className={cn('catalog__genres-item', {'catalog__genres-item--active': genre === selectedGenre})}>
            <button className="catalog__genres-link" onClick={() => dispatch(changeGenre(genre))}>{genre}</button>
          </li>
        ))}
      </ul>
    </>
  );
}
