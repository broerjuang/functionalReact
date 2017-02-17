// @flow

type FuncArgs = Array<Function>;

function compose(...functionArgs: FuncArgs) {
  return (executable: Object) => {
    return functionArgs.reduceRight((nextFn, fn) => {
      return fn(nextFn);
    }, executable);
  };
}

export default compose;
