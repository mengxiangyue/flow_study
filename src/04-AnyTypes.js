// @flow

// 前面使用 mixed 的时候，需要进行类型检查，如果要跳过类型检查，可以使用 any。但是 any 是不安全的，所以尽可能的避免使用 any。

function add(one: any, two: any): number {
  return one + two;
}

add(1, 2);     // Works.
add("1", "2"); // Works.
add({}, []);   // Works.
