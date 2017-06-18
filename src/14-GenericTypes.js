// @flow

// function
function identity<T>(value: T): T {
  return value;
}

// class
class Item<T> {
  prop: T;

  constructor(param: T) {
    this.prop = param;
  }

  method(): T {
    return this.prop;
  }
}


// Type aliases
type Item1<T> = {
  foo: T,
  bar: T,
};

let item: Item1<string> = { foo: "", bar: ""}

// Interfaces
interface Item2<T> {
  foo: T,
  bar: T,
}


function logFoo<T: { foo: string }>(obj: T): T {
  console.log(obj.foo); // Works!
  return obj;
}
