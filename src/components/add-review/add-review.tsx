import {FormEvent, useState} from 'react';
import {fetchAddReviewAction} from '../../store/api-actions.ts';
import {useAppDispatch, useAppSelector} from '../../hooks';

export function AddReview() {
  const [text, setText] = useState<string>('');
  const [rating, setRating] = useState<number>(10);
  const dispatch = useAppDispatch();
  const film = useAppSelector((state) => state.selectedFilm);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(fetchAddReviewAction({comment: text, filmId: film?.id, rating: rating}));
  };

  return (
    <div className="add-review">
      <form action="" className="add-review__form" onSubmit={handleSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {Array.from({length: 10}).map((_, index) => (
              <>
                <input className="rating__input" id={`star-${10 - index}`} type="radio" name="rating"
                  value={10 - rating} onChange={() => setRating(10 - index)}
                />
                <label className="rating__label" htmlFor={`star-${10 - index}`}>Rating {10 - index}</label>
              </>
            ))}
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text"
            placeholder="Review text" value={text} onChange={(evt) => setText(evt.target.value)}
          />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}
