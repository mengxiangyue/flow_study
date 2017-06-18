// @flow

// class 跟 js 中的一样，只是增加了类型而已
// Class Fields (Properties)  如果想使用属性 需要先声明
class MyClass {
  prop: number
  // 下面这两种都编译不过
  // prop1 = 42
  // prop2: number = 42
  constructor() {
    this.prop = 22
  }
  method(value: string): number {
    return 2
  }
}

let myInstance: MyClass = new MyClass();

// Class Generics
class MyClass1<A, B> {
  // constructor(arg1: A, arg2: B) {}
  property: A;
  method(val: B): string {
    return "2"
  }
}

// 如果使用了 类型泛型 创建的时候 需要标注出来
let x: MyClass1<string, boolean> = new MyClass1()
