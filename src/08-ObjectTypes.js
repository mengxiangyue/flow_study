// @flow

var obj1: { foo: boolean } = { foo: true };
var obj2: {
  foo: number,
  bar: boolean,
  baz: string,
} = {
  foo: 1,
  bar: true,
  baz: 'three',
};

// 对象某个属性可能不存在
var obj: { foo?: boolean } = {};

obj.foo = true;    // Works!
// $ExpectError
// obj.foo = 'hello'; // Error!
// 如果注释掉 foo 的赋值，下面的调用将会报错
function test(value: boolean) {}
test(obj.foo)


// Object type inference  对象类型推断
// 创建对象并赋值 flow 能够推断属性类型 叫做 Sealed objects 密封对象
function test() {
  var obj = {
    foo: 1,
    bar: true,
    baz: 'three'
  };

  var foo: number  = obj.foo; // Works!
  var bar: boolean = obj.bar; // Works!
  // $ExpectError
  // var baz: null    = obj.baz; // Error!
  // var bat: string  = obj.bat; // Error!
  // 密封对象不能添加属性了
  // obj.xx = "22"  // Error

  // Unsealed objects
  var obj = {};

  obj.foo = 1;       // Works!
  obj.bar = true;    // Works!
  obj.baz = 'three'; // Works!

  // Reassigning unsealed object properties
  var obj = {};

  if (Math.random()) obj.prop = true;
  else obj.prop = "hello";

  // var val1: boolean = obj.prop; // Error!
  // var val2: string  = obj.prop; // Error!
  var val3: boolean | string = obj.prop; // Works!
}

// Exact object types 明确对象类型
function method(obj: { foo: string }) {
}

method({
  foo: "test", // Works!
  bar: 42      // Works!
});
// 上面调用是可以的，如果准确的限制传入对象的属性 可以类似如下 {| **** |}
// var foo: {| foo: string |} = { foo: "Hello", bar: "World!" }; // Error!
function method1(obj: {| foo: string |}) {
}
// Error
// method1({
//   foo: "test",
//   bar: 42
// });

// Objects as maps  虽然es6提供了map，但是还是很少使用，一般都是使用object当map，flow提供了indexer property，可以类似map那样通过key访问值
var o: { [string]: number } = {};
o["foo"] = 0;
o["bar"] = 1;
var foo: number = o["foo"];
