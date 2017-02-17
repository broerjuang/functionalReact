// @flow

import React from 'react';
import compose from '../helpers/compose';
import map from '../helpers/map';
import prop from '../helpers/prop';
import logPrice from '../actions/logPrice';


type ProductList = {
  id: string;
  name: string;
  description: string;
  price: string;
};

function Container(props: React$Element<*>) {
  return (
    <div>
      <h2>Product List</h2>
      {props}
    </div>
  );
}

function List(props: React$Element<*>) {
  return (
    <ul>{props}</ul>
  );
}

function Item(props: ProductList) {
  let {id, name, price} = props;
  return (
    <li key={id} onClick={() => logPrice(price)}>{name}</li>
  );
}

let Product = compose(Container, List, map(Item), prop('products'));

export default Product;
