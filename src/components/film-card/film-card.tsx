import {Link} from 'react-router-dom';
import {AppRoute, EXECUTION_DELAY} from '../../constants.ts';
import VideoPlayer from '../video-player';
import {useState} from 'react';

export type FilmCardProps = {
  id: string;
  posterSrc: string;
  posterAlt: string;
  title: string;
  videoLink: string;
}

export function FilmCard({id, posterSrc, posterAlt, title, videoLink}: FilmCardProps) {
  const [timer, setTimer] = useState<NodeJS.Timeout | undefined>(undefined);
  const [isHovered, setIsHovered] = useState<boolean>(false);

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
            <VideoPlayer videoLink={videoLink} posterSrc={posterSrc}/> :
            <img src={posterSrc} alt={posterAlt}/>
        }
      </div>
      <h3 className="small-film-card__title">
        <Link to={`${AppRoute.Movie }/${id}`} className="small-film-card__link">{title}</Link>
      </h3>
    </article>
  );
}
