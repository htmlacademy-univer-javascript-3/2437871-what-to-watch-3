import {useAppDispatch, useAppSelector} from '../../hooks';
import {useEffect} from 'react';
import {fetchReviewsAction} from '../../store/api-actions.ts';

function MovieReviews() {
  const {selectedFilm, reviews} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchReviewsAction(selectedFilm?.id));
  }, [dispatch, selectedFilm]);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((review) => (
          <div className="review" key={review.id}>
            <blockquote className="review__quote">
              <p className="review__text">{review.comment}</p>

              <footer className="review__details">
                <cite className="review__author">{review.user}</cite>
                <time className="review__date" dateTime={review.date}>{review.date}</time>
              </footer>
            </blockquote>

            <div className="review__rating">{review.rating}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieReviews;
