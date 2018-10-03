// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import todoApp from './reducers';
import App from './App';
import lexer from './blogic/lexer';
import * as serviceWorker from './serviceWorker';

const store = createStore(todoApp);
render(
  <App store={store} />,
  document.getElementById('root'), // eslint-disable-line no-undef
);

window.lexer = lexer;

serviceWorker.unregister();
