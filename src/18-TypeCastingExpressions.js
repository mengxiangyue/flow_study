// @flow

// 类型转换语法 (value: Type)

(2 + 2: number);

let value = 42;
(value: 42);
// 可以获取转换后的值
let newValue = (value: number);
// (value: string); // Error

// 可以先转换为 any 再转换为 需要的类型
function cloneObject(obj) {
  // 也可以当 assert 使用
  (obj: { [key: string]: mixed });
  const clone = {};

  Object.keys(obj).forEach(key => {
    clone[key] = obj[key];
  });

  return ((clone: any): typeof obj); // <<
}

const clone = cloneObject({
  foo: 1,
  bar: true,
  baz: 'three'
});

(clone.foo: 1);       // Works!
(clone.bar: true);    // Works!
(clone.baz: 'three'); // Works!
