// @flow

function acceptsMaybeNumber(value: ?number) {
  // 提取类型 这三种一致
  if (value !== null && value !== undefined) {
  // if (value !== null) {
  // if (typeof value === 'number') {
    return value * 2;
  }
}

acceptsMaybeNumber(42);        // Works!
acceptsMaybeNumber();          // Works!
acceptsMaybeNumber(undefined); // Works!
acceptsMaybeNumber(null);      // Works!
// acceptsMaybeNumber("42");      // Error!
