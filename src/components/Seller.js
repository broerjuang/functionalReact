// @flow


import React from 'react';
import {compose, map, prop} from 'ramda';


type SellerType = {
  id: string;
  name: string;
};

function Container(listofSeller: SellerType) {
  return (
    <div>{listofSeller}</div>
  );
}

function List(sellers: SellerType) {
  return (
    <ul>{sellers}</ul>
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
