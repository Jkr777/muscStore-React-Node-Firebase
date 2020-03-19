import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/main.scss';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'; 
import initStore, { persistor } from './redux/store';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={initStore}>
    <BrowserRouter>
      <PersistGate persistor={persistor}> 
        <App /> 
      </PersistGate>
    </BrowserRouter>
  </Provider> , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();