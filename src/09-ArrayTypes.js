// @flow

let arr: Array<number> = [1, 2, 3];

// 短语法
let arr1: number[] = [1, 2, 3]

// ?Type[] == ?Array<Type>  ?Type[] != Array<?Type>  (?Type)[] == Array<?Type>


let array: Array<number> = [];

array[0] = 0;
array[2] = 2;

// 下面是undefined 我们可以标志出来它可能是undefined
let v1: number = array[1];
let v2: number = array[3];

let value: number | void = array[3];

function test(v: number) {}
// test(value)

if (value !== undefined) {
  test(value)
}
