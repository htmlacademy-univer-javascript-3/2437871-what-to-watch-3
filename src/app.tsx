import MainPage from './pages/main-page';

function App() {
  return (
    <MainPage backgroundSrc={'img/bg-the-grand-budapest-hotel.jpg'} backgroundAlt={'The Grand Budapest Hotel'}
      title={'The Grand Budapest Hotel'} posterSrc={'img/the-grand-budapest-hotel-poster.jpg'}
      posterAlt={'The Grand Budapest Hotel poster'} genre={'Drama'} year={2014}
    />
  );
}

export default App;
