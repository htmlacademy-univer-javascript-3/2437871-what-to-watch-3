export type FilmCardProps = {
  posterSrc: string;
  posterAlt: string;
  title: string;
}

export function FilmCard({posterSrc, posterAlt, title}: FilmCardProps) {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={posterSrc}
          alt={posterAlt}
        />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{title}</a>
      </h3>
    </article>
  );
}
