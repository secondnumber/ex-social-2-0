import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/reduxStore';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
<<<<<<< Updated upstream
=======
import { Provider } from 'react-redux';
>>>>>>> Stashed changes

<<<<<<< Updated upstream
let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
<<<<<<< Updated upstream
      <App state={state} store={store} />
=======
      <Provider store={store}>
        <App />
      </Provider>
>>>>>>> Stashed changes
    </BrowserRouter>,
    document.getElementById('root')
  );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});
=======
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
>>>>>>> Stashed changes

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
