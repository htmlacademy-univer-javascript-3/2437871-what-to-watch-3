export type GenreListProps = {
  title: string;
  className: string;
}

export function GenreList({title, className} : GenreListProps) {
  return (
    <li className={className}>
      <a href="#" className="catalog__genres-link">{title}</a>
    </li>
  );
}
export default class CatalogGenre {
}
