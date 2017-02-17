// @flow
import React from 'react';
import Product from './components/Product';
import Seller from './components/Seller';

type Props = {
  store: Object;
};


function App(props: Props) {
  let {store} = props;
  return (
    <div>
      <Product {...store}/>
      <Seller {...store} />
    </div>
  );
}

export default App;
