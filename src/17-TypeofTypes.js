// @flow

// The typeof operator returns the Flow type of a given value to be used as a type.

let num1 = 42;
let num2: typeof num1 = 3.14;     // Works!
// let num3: typeof num1 = 'world';  // Error!
var num3: 42 = 42;
// $ExpectError
// var num4: typeof num3 = 3.14;

let obj1 = { foo: 1, bar: true, baz: 'three' };
let obj2: typeof obj1 = { foo: 42, bar: false, baz: 'hello' };

let arr1 = [1, 2, 3];
let arr2: typeof arr1 = [3, 2, 1];


// 结构相同 类型不同 也是错误

class MyClass {
  method(val: number) { /* ... */ }
}

class YourClass {
  method(val: number) { /* ... */ }
}

// $ExpectError
// let test1: typeof MyClass = YourClass; // Error!
let test1: typeof MyClass = MyClass;   // Works!

let test2: MyClass = new MyClass()
