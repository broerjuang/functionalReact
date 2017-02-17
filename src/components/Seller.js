// @flow

import React from 'react';
import compose from '../helpers/compose';
import map from '../helpers/map';
import prop from '../helpers/prop';


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
    <li key={id}>{name}</li>
  );
}

let Seller = compose(Container, List, map(Item), prop('sellers'));

export default Seller;
