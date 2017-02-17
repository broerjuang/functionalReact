// @flow

import React from 'react';
import {compose, map, prop} from 'ramda';


type ProductList = {
  id: string;
  name: string;
  description: string;
  price: string;
};

function Container(props: ProductList) {
  return (
    <div>{props}</div>
  );
}

function List(props: ProductList) {
  return (
    <ul>{props}</ul>
  );
}

function Item(props: ProductList) {
  let {id, name} = props;
  return (
    <li key={id}>{name}</li>
  );
}

let Product = compose(Container, List, map(Item), prop('products'));

export default Product;
