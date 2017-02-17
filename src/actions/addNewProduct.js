// @flow
import {store} from '../main';

type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
};


function addNewProduct(products: Product) {
  store.setState({
    products: [products],
  });
}

export default addNewProduct;
