// @flow

// 原始类型

/*
Booleans
Strings
Numbers
null
undefined (void in Flow types)
Symbols (new in ECMAScript 2015, not yet supported in Flow)


字面值  都是用小写表示
true;
"hello";
3.14;
null;
undefined;

包装对象  使用首字母大写表示
new Boolean(false);
new String("world");
new Number(42);
new Symbol("foo");
*/

function method(x: number, y: string, z: boolean) {
}

method(3.14, "hello", true);


function method1(x: Number, y: String, z: Boolean) {
}

method1(new Number(42), new String("world"), new Boolean(false));

/*
对于 if (1) {}  这种情况下 1 会隐式转换成 true 如果某个参数需要 Boolean 需要明确的装换成 Boolean(1)
*/

method1(new Number(42), new String("world"), new Boolean(1));
// method1(new Number(42), new String("world"), 1 == 2); // flow error


// Numbers
function acceptsNumber(value: number) {
  // ...
}
acceptsNumber(42);       // Works!
acceptsNumber(3.14);     // Works!
acceptsNumber(NaN);      // Works!
acceptsNumber(Infinity); // Works!
// acceptsNumber("foo");    // Error!

// Strings

"foo" + 2
// 字符串和对象不能相加
// "foo" + {}

// null and void
// void == undefined
function acceptsNull(value: null) {
}

function acceptsUndefined(value: void) {
}

// Maybe types  使用 ?type 表示 type || null || void || 不传该参数
function acceptsMaybeString(value: ?string) {
  // ...
}

acceptsMaybeString("bar");     // Works!
acceptsMaybeString(undefined); // Works!
acceptsMaybeString(null);      // Works!
acceptsMaybeString();          // Works!

// Optional object properties  ?: type 表示 type || void
function acceptsOptional(value?: string) {

}
acceptsOptional(undefined)
// acceptsOptional(null) // Error
acceptsOptional("value")

function acceptsObject(value: { foo?: string , desc: string}) {
  // ...
}

acceptsObject({desc: ""})

// 默认参数 能够接收 type || void || 不传参数
function defaultParams(value: string = "test") {

}

defaultParams("abc")
defaultParams(undefined)
defaultParams()
// defaultParams(null)  // Error
