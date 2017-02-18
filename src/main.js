// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import createDataStore from './helpers/createDataStore';
import initialState from './db/initialState';
import fetchProduct from './actions/fetchProduct';

export let store = createDataStore(initialState, () => render());
fetchProduct(store);


function render() {
  ReactDOM.render(<App store={store}/>, document.getElementById('app'));
}

render();
