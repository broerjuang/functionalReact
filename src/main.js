// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import createDataStore from './helpers/createDataStore';
import initialState from './db/initialState';

let store = createDataStore(initialState, () => render());


function render() {
  ReactDOM.render(<App store={store.getState()}/>, document.getElementById('app'));
}

render();
