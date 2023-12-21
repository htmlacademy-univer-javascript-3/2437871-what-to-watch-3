import {useNavigate, useParams} from 'react-router-dom';
import {AppRoute} from '../../constants.ts';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useEffect} from 'react';
import {fetchFilmAction, fetchSimilarFilmsAction} from '../../store/api-actions.ts';
import {getFilm} from '../../store/film-process/selectors.ts';
import PageNotFoundError from '../../components/errors/page-not-found';

export function PlayerPage() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const film = useAppSelector(getFilm);

  useEffect(() => {
    dispatch(fetchFilmAction(params.id));
    dispatch(fetchSimilarFilmsAction(params.id));
  }, [dispatch, params]);

  if (film === null) {
    return (<PageNotFoundError/>);
  }

  return (
    <div className="player">
      <video src={film.videoLink} className="player__video" poster={film.posterImage}></video>

      <button type="button" className="player__exit" onClick={() => navigate(`${AppRoute.Movie }/${film.id}`)}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{'left': '30%'}}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}
