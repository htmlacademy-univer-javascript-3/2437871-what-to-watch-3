import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../constants.ts';
import {useAppSelector} from '../../hooks';
import {getAuthorizationStatus} from '../../store/user-process/selectors.ts';

type PrivateRouteProps = {
  children: JSX.Element;
}

export function PrivateRoute(props: PrivateRouteProps) {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? props.children
      : <Navigate to={AppRoute.Login}/>
  );
}
