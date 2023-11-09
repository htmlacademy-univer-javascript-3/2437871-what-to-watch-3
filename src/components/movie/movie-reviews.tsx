type MovieReviewProps = {
  review: string;
  author: string;
  date: string;
  rating: string;
}

function MovieReview(props: MovieReviewProps) {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{props.review}</p>

        <footer className="review__details">
          <cite className="review__author">{props.author}</cite>
          <time className="review__date" dateTime="2016-12-24">{props.date}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{props.rating}</div>
    </div>
  );
}

type MovieReviewsProps = {
  reviews: MovieReviewProps[];
}

function MovieReviews(props: MovieReviewsProps) {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {props.reviews.map((review) => <MovieReview key={review.review} review={review.review} author={review.author} date={review.date} rating={review.rating}/>)}
      </div>
    </div>
  );
}

export default MovieReviews;
