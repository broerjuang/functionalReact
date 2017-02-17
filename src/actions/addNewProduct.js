// @flow
import {store} from '../main';

type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
};


function addNewProduct(product: Product) {
  let {products} = store.getState();
  store.setState({
    products: [...products, product],
  });
}

export default addNewProduct;
