import {useAppDispatch} from '../../hooks';
import {showMoreFilms} from '../../store/film-process/film-process.ts';

export function ShowMore() {
  const dispatch = useAppDispatch();

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={() => dispatch(showMoreFilms())}>Show more</button>
    </div>
  );
}
