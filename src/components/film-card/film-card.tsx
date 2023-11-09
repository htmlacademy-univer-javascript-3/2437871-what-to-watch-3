import {useNavigate} from 'react-router-dom';

export type FilmCardProps = {
  id: string;
  posterSrc: string;
  posterAlt: string;
  title: string;
  onMouseEnter: (x: string) => void;
  onMouseLeave: () => void;
}

export function FilmCard({id, posterSrc, posterAlt, title, onMouseEnter, onMouseLeave}: FilmCardProps) {
  const navigate = useNavigate();
  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={() => onMouseEnter(id)}
      onMouseLeave={() => onMouseLeave()} onClick={() => navigate(`/films/${id}`)}
    >
      <div className="small-film-card__image">
        <img src={posterSrc}
          alt={posterAlt}
        />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link">{title}</a>
      </h3>
    </article>
  );
}
