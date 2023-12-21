import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.tsx';
import {Provider} from 'react-redux';
import {store} from './store';
import {
  checkAuthAction,
  fetchAllFilmsAction,
  fetchFavoriteFilmsAction,
  fetchPromoFilmAction
} from './store/api-actions.ts';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


store.dispatch(fetchAllFilmsAction());
store.dispatch(fetchPromoFilmAction());
store.dispatch(fetchFavoriteFilmsAction());
store.dispatch(checkAuthAction());

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <ToastContainer/>
      <App />
    </React.StrictMode>
  </Provider>
);
