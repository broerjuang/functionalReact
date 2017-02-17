// @flow

function prop(key: string) {
  return (obj: Object) => {
    if (obj[key]) {
      return obj[key];
    }
    return null;
  };
}

export default prop;
