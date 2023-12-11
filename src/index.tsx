import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.tsx';
import {mockFilms} from './mocks/films.ts';
import {Provider} from 'react-redux';
import {store} from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App backgroundSrc={'img/bg-the-grand-budapest-hotel.jpg'}
           backgroundAlt={'The Grand Budapest Hotel'}
           films={mockFilms} myListFilmsCount={9}
      />
    </React.StrictMode>
  </Provider>
);
