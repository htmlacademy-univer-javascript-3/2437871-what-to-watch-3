import {useState} from 'react';

export function AddReview() {
  const [text, setText] = useState<string>('');
  const [rating, setRating] = useState<number>(10);

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {Array.from({length: 10}).map((_, index) => (
              <>
                <input className="rating__input" id={`star-${10 - index}`} type="radio" name="rating"
                  value={10 - rating} onChange={(evt) => setRating(+evt.target.value)}
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
