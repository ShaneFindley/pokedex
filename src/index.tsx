import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import App from './components/app/App';
import { store } from './stores/Store';

import './index.css';

const persistor = persistStore(store);

if (process.env.NODE_ENV === 'development') {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('purge') === 'true') {
    persistor.purge();
  }
}


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<h1>Loading...</h1>} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);