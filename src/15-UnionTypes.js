// @flow

// 联合类型
function toStringPrimitives(value: number | boolean | string) {
  return String(value);
}

// 类似枚举
type Sex = 0 | 1
let a: Sex = 1
// let b: Sex = 3  // Error

function toStringPrimitives(value: number | boolean | string): string { // Error!
  if (typeof value === 'number') {
    return String(value);
  } else if (typeof value === 'boolean') {
    return String(value);
  } else if (typeof value === "string") {
    return value
  }
  return ""
}

// 如果我们请求返回数据类似下面
// { success: true, value: false };
// { success: false, error: 'Bad request' };
type Response = {
  success: boolean,
  value?: boolean,
  error?: string
};

function handleResponse(response: Response) {
  if (response.success) {
    if (response.value != null) {
      var value: boolean = response.value;
    }
    // var value: boolean = response.value; // Error 需要类似上面判断
  } else {
    if (response.error != null) {
      var error: string = response.error; // Error!
    }
    // var error: string = response.error; // Error!
  }
}

// 使用联合类型解决
type Success = { success: true, value: boolean };
type Failed  = { success: false, error: string };

type Response1 = Success | Failed;

function handleResponse(response: Response1) {
  if (response.success) {
    var value: boolean = response.value; // Works!
  } else {
    var error: string = response.error; // Works!
  }
}
