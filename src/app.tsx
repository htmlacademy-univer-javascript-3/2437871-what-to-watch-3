import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from './constants.ts';
import MainPage from './pages/main-page';
import SignInPage from './pages/sing-in-page';
import PrivateRoute from './components/private-route/private-route.tsx';
import MyListPage from './pages/my-list-page';
import MoviePage from './pages/movie-page';
import AddReviewPage from './pages/add-review-page';
import PlayerPage from './pages/player-page';
import PageNotFoundError from './components/errors/page-not-found';
import {Films} from './types/types.ts';

type AppProps = {
  backgroundSrc: string;
  backgroundAlt: string;
  myListFilmsCount: number;
  films: Films;
}

function App({backgroundSrc, backgroundAlt, myListFilmsCount, films}: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={
          <MainPage backgroundSrc={backgroundSrc}
            backgroundAlt={backgroundAlt}
            films={films} mainFilm={films[0]}
            myListFilmsCount={myListFilmsCount}
          />
        }
        />
        <Route path={AppRoute.Login} element={<SignInPage/>}/>
        <Route path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <MyListPage films={films} myListFilmsCount={myListFilmsCount}/>
            </PrivateRoute>
          }
        />
        <Route path={`${AppRoute.Movie }/:id`}
          element={
            <MoviePage
              backgroundSrc={backgroundSrc}
              backgroundAlt={backgroundAlt}
              films={films}
              myListFilmsCount={myListFilmsCount}
            />
          }
        />
        <Route path={`${AppRoute.Movie }/:id${ AppRoute.Review}`}
          element={
            <AddReviewPage backgroundSrc={backgroundSrc}
              backgroundAlt={backgroundAlt}
              films={films}
            />
          }
        />
        <Route path={`${AppRoute.Player }/:id`} element={<PlayerPage films={films}/>}/>
        <Route path={AppRoute.NotFound} element={<PageNotFoundError/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
