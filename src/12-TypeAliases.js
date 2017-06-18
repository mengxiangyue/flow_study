// @flow

// 最终生成的文件会移除  可以当做类型使用
type MyObject = {
  foo: number,
  bar: boolean,
  baz: string,
};

// Type Alias Generics
type MyObject1<A, B, C> = {
  foo: A,
  bar: B,
  baz: C,
};

var val: MyObject1<number, boolean, string> = {
  foo: 1,
  bar: true,
  baz: 'three',
};
