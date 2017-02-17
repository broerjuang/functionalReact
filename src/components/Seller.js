// @flow

import React from 'react';
import compose from '../helpers/compose';
import map from '../helpers/map';
import prop from '../helpers/prop';
import addNewProduct from '../actions/addNewProduct';

let product = {
  id: '12',
  name: 'newProduct',
  description: 'aha',
  price: '12455',
}


type SellerType = {
  id: string;
  name: string;
};

function Container(children: React$Element<*>) {
  return (
    <div>{children}</div>
  );
}

function List(children: React$Element<*>) {
  return (
    <ul>{children}</ul>
  );
}

function Item(seller: SellerType) {
  let {id, name} = seller;
  return (
    <li key={id} onClick={() => addNewProduct(product)}>{name}</li>
  );
}

let Seller = compose(Container, List, map(Item), prop('sellers'));

export default Seller;
