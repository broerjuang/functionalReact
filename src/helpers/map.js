// @flow

function map(fn: Function) {
  return (list: Array<mixed>) => {
    return list.map(fn);
  };
}

export default map;
