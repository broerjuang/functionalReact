// @flow
import {store} from '../main';

type Product = {
  name: string;
  description: string;
  price: string;
};


function addNewProduct(product: Product) {
  return fetch('http://localhost:8090/products/create', {
    method: 'POST',
    body: JSON.stringify({newProduct: product}),
    mode: 'cors',
    cache: 'default',
  })
    .then((response) => response.json())
    .then((result) => {
      return store.setState({
        products: [...result.products],
      });
    });
}

export default addNewProduct;
