import {useNavigate} from 'react-router-dom';
import {AppRoute, EXECUTION_DELAY} from '../../constants.ts';
import VideoPlayer from '../video-player';
import {useState} from 'react';
import {FilmShortInfo} from '../../types/film.ts';

export type FilmCardProps = {
  film: FilmShortInfo;
}

export function FilmCard({film}: FilmCardProps) {
  const [timer, setTimer] = useState<NodeJS.Timeout | undefined>(undefined);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${AppRoute.Movie }/${film.id}`);
  };

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
      onClick={handleClick}
    >
      <div className="small-film-card__image">
        {
          isHovered ?
            <VideoPlayer videoLink={film.previewVideoLink} posterSrc={film.previewImage}/> :
            <img src={film.previewImage} alt={film.name}/>
        }
      </div>
      <h3 className="small-film-card__title">
        <label className="small-film-card__link">{film.name}</label>
      </h3>
    </article>
  );
}
