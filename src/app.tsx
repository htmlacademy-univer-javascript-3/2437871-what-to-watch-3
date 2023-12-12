import {Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from './constants.ts';
import MainPage from './pages/main-page';
import SignInPage from './pages/sing-in-page';
import PrivateRoute from './components/private-route/private-route.tsx';
import MyListPage from './pages/my-list-page';
import MoviePage from './pages/movie-page';
import AddReviewPage from './pages/add-review-page';
import PlayerPage from './pages/player-page';
import PageNotFoundError from './components/errors/page-not-found';
import Spinner from './components/spinner';
import {useAppSelector} from './hooks';
import HistoryRouter from './components/history-route';
import browserHistory from './browser-history.ts';

function App() {
  const isLoading = useAppSelector((state) => state.isLoading);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown || isLoading) {
    return (<Spinner/>);
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} element={
          <MainPage />
        }
        />
        <Route path={AppRoute.Login} element={<SignInPage/>}/>
        <Route path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <MyListPage />
            </PrivateRoute>
          }
        />
        <Route path={`${AppRoute.Movie }/:id`}
          element={
            <MoviePage />
          }
        />
        <Route path={`${AppRoute.Movie }/:id`} element={<MoviePage/>}/>
        <Route path={`${AppRoute.Movie }/:id${ AppRoute.Review}`} element={<AddReviewPage/>}/>
        <Route path={`${AppRoute.Player }/:id`} element={<PlayerPage/>}/>
        <Route path={AppRoute.NotFound} element={<PageNotFoundError/>}/>
      </Routes>
    </HistoryRouter>
  );
}

export default App;
