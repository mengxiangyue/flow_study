// @flow

// 混合类型 标志参数可以接受几种类型
function stringifyBasicValue(value: string | number) {
  return '' + value;
}

// 简单泛型
function identity<T>(value: T): T {
    return value;
}

// 任意类型  mixed
function getTypeOf(value: mixed): string {
  return typeof value;
}

function stringify(value: mixed) {
  // 下面也明确知道了 传入的是 字符串 但是使用的mixed 类型，也必须使用 typeof 判断类型后处理
  if (typeof value === 'string') {
    return "" + value; // Works!
  } else {
    return "";
  }
}

stringify("foo");
