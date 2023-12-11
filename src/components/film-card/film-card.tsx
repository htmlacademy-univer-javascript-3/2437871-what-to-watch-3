import {Link} from 'react-router-dom';
import {AppRoute, EXECUTION_DELAY} from '../../constants.ts';
import VideoPlayer from '../video-player';
import {useState} from 'react';
import {useAppDispatch} from '../../hooks';
import {resetShowMore} from '../../store/action.ts';
import {FilmShortInfo} from '../../types/film.ts';

export type FilmCardProps = {
  film: FilmShortInfo;
}

export function FilmCard({film}: FilmCardProps) {
  const [timer, setTimer] = useState<NodeJS.Timeout | undefined>(undefined);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const onMouseEnter = () => {
    setTimer(setTimeout(() => setIsHovered(true), EXECUTION_DELAY));
  };

  const onMouseLeave = () => {
    clearTimeout(timer);
    setIsHovered(false);
  };

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="small-film-card__image">
        {
          isHovered ?
            <VideoPlayer videoLink={film.previewVideoLink} posterSrc={film.previewImage}/> :
            <img src={film.previewImage} alt={film.name}/>
        }
      </div>
      <h3 className="small-film-card__title">
        <Link onClick={() => dispatch(resetShowMore())} to={`${AppRoute.Movie }/${film.id}`} className="small-film-card__link">{film.name}</Link>
      </h3>
    </article>
  );
}
