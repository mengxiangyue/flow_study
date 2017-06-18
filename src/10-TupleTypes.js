// @flow

// 元组类型 使用数组表示
let tuple1: [number] = [1];
let tuple2: [number, boolean] = [1, true];
let tuple3: [number, boolean, string] = [1, true, "three"];

let tuple: [number, boolean, string] = [1, true, "three"];

// 如果不能确定是什么类型，将会认为是所有可能的类型
function getItem(n: number) {
  let val: number | boolean | string = tuple[n];
}
