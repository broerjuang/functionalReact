// @flow
import React from 'react';
import Product from './components/Product';
import Seller from './components/Seller';
import Button from './components/Button';

type Props = {
  store: Object;
};


function App(props: Props) {
  let {store} = props;
  return (
    <div>
      <Product {...store.getState()}/>
      <Seller {...store.getState()} />
      <Button />
    </div>
  );
}

export default App;
