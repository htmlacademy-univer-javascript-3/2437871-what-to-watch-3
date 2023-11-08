import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from './mocks/mocks.ts';
import MainPage from './pages/main-page';
import SignInPage from './pages/sing-in-page';
import PrivateRoute from './components/private-route/private-route.tsx';
import MyListPage from './pages/my-list-page';
import MoviePage from './pages/movie-page';
import AddReviewPage from './pages/add-review-page';
import PlayerPage from './pages/player-page';
import PageNotFoundError from './components/errors/page-not-found';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={
          <MainPage backgroundSrc={'img/bg-the-grand-budapest-hotel.jpg'}
            backgroundAlt={'The Grand Budapest Hotel'}
            title={'The Grand Budapest Hotel'}
            posterSrc={'img/the-grand-budapest-hotel-poster.jpg'}
            posterAlt={'The Grand Budapest Hotel poster'}
            genre={'Drama'}
            year={2014}
          />
        }
        />
        <Route path={AppRoute.Login} element={<SignInPage/>}/>
        <Route path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <MyListPage/>
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Movie}
          element={
            <MoviePage backgroundSrc={'img/bg-the-grand-budapest-hotel.jpg'}
              backgroundAlt={'The Grand Budapest Hotel'}
              title={'The Grand Budapest Hotel'}
              posterSrc={'img/the-grand-budapest-hotel-poster.jpg'}
              posterAlt={'The Grand Budapest Hotel poster'}
              genre={'Drama'}
              year={2014} ratingScore={'8,9'}
              ratingLevel={'Very good'}
              ratingCount={'240 ratings'}
              movieDescription={'In the 1930s, the Grand Budapest Hotel is a popular European ski resort'}
              movieDirector={'Director: Wes Anderson'}
              movieStarring={'Starring: Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other'}
            />
          }
        />
        <Route path={AppRoute.Review}
          element={
            <AddReviewPage backgroundSrc={'img/bg-the-grand-budapest-hotel.jpg'}
              backgroundAlt={'The Grand Budapest Hotel'}
              title={'The Grand Budapest Hotel'}
              posterSrc={'img/the-grand-budapest-hotel-poster.jpg'}
              posterAlt={'The Grand Budapest Hotel poster'}
            />
          }
        />
        <Route path={AppRoute.Player} element={<PlayerPage/>}/>
        <Route path={AppRoute.NotFound} element={<PageNotFoundError/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
