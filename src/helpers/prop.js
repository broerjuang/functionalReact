// @flow

function prop(key: string) {
  return (obj: Object) => {
    return obj[key];
  };
}

export default prop;
