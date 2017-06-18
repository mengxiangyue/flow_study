// @flow

// 输入、输出
function concat(a: string, b: string): string {
  return a + b;
}

function method(str: string, bool?: boolean, ...nums: Array<number>): void {
  // ...
}

// 箭头函数
let method1= (str: string, bool?: boolean, ...nums: Array<number>): void => {
  // ...
};

// 函数类型 参数 返回值

// (str: string, bool?: boolean, ...nums: Array<number>) => void
// (string, boolean | void, Array<number>) => void

function method(callback: (string, boolean | void, Array<number>) => void) {
  // ...
}


// mixed any in function  Function == any
function method(func: () => mixed) {
  // ...
}

// Function 不安全
function method(func: Function) {

}
