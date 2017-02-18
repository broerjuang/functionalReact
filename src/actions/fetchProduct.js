// @flow

function fetchProduct(store: Object) {
  return fetch('http://localhost:8090/products')
    .then((response) => response.json())
    .then((result) => {
      let {products} = result;
      store.setState({
        products: [...products],
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

export default fetchProduct;
