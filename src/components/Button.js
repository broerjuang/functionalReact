// @flow
import React from 'react';
import addNewProduct from '../actions/addNewProduct';

let product = {
  id: '12',
  name: 'newProduct',
  description: 'aha',
  price: '12455',
};

function Button() {
  return (
    <button onClick={() => addNewProduct(product)}>Click Me</button>
  );
}

export default Button;
