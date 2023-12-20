import {useAppDispatch, useAppSelector} from '../../hooks';
import {logoutAction} from '../../store/api-actions.ts';
import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../constants.ts';
export function User() {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const user = useAppSelector((state) => state.user);

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src={user?.avatarUrl} alt="User avatar" width="63" height="63"/>
          </div>
        </li>
        <li className="user-block__item">
          <Link
            className="user-block__link"
            to={AppRoute.Main}
            onClick={(evt) => {
              evt.preventDefault();
              dispatch(logoutAction());
            }}
          >Sign out
          </Link>
        </li>
      </ul>
    );
  } else {
    return (
      <div className="user-block">
        <Link to={AppRoute.Login} className="user-block__link">Sign in</Link>
      </div>
    );
  }
}
