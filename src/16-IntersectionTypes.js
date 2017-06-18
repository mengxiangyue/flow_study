// @flow

// 交叉类型
type A = { a: number };
type B = { b: boolean };
type C = { c: string };

function method(value: A & B & C) {
  // ...
}

// Intersections of object types
type One = { foo: number };
type Two = { bar: boolean };

type Both = One & Two;

var value: Both = {
  foo: 1,
  bar: true
};

function test() {
  type One = { prop: number };
  type Two = { prop: boolean };

  type Both = One & Two;

  // 如果有相同属性 并且类型不同 将会无法创建该属性
  // var value: Both = {
  //   prop: 1 // Error!
  // };
}
