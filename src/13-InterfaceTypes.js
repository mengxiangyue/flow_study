// @flow

interface Serializable {
  property : string;
  +readOnlyProperty : number; // + 只读
  -writeOnlyProperty : number; // - 只写
  serialize() : string;
}

// 可以省略 implements
class Foo implements Serializable {
  property : string;
  readOnlyProperty : number;
  writeOnlyProperty : number;
  constructor() {
    this.property = "2"
    this.readOnlyProperty = 3
    this.writeOnlyProperty = 4
  }
  serialize() {
    return '[Foo]';
  }
}

class Bar {
  property : string;
  readOnlyProperty : number;
  writeOnlyProperty : number;
  constructor() {
    this.property = "2"
    this.readOnlyProperty = 3
    this.writeOnlyProperty = 4
  }
  serialize() {
    return '[Bar]';
  }
}

// 虽然 Foo 和 Bar 定义都相同 但是不能这样声明  使用 interface 解决这个问题
// const foo1: Foo = new Bar(); // Error!

const foo : Serializable = new Foo(); // Works!
const bar : Serializable = new Bar(); // Works!

foo.property = "33"
// foo.readOnlyProperty = 33
foo.writeOnlyProperty = 33
