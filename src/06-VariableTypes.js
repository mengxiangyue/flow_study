// @flow

/*
let var 可以被修改
const 不能修改
*/

function test(value: number) {

}

// flow 能够推断出类型
let a = 2
const b = 3
test(a)
test(b)

let c: number = 4
// let d: Number = 5 // Error
let ff: number = c // 对比下面 还是报错
// c = "4" // let var 重新赋值 只能赋值相同类型的


// 重新赋值 如果一个变量的改变只是为了赋值给另外一个值  这个是可以修改值得
function ab() {
  let foo = 42;
  if (Math.random()) foo = true;
  if (Math.random()) foo = "hello";

  let isOneOf: number | boolean | string = foo; // Works!

}

let foo = 42;
let isNumber: number = foo; // Works!

foo = true;
let isBoolean: boolean = foo; // Works!

foo = "hello";
let isString: string = foo; // Works!
