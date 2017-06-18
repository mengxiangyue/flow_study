// @flow

// 带关联值得枚举
type Suit = "Diamonds" | "Clubs" | "Hearts" | "Spades";

const suitNumbers = {
  Diamonds: 1,
  Clubs: 2,
  Hearts: 3,
  Spades: 4
};

function printSuitNumber(suit: Suit) {
  console.log(suitNumbers[suit]);
}

printSuitNumber('Diamonds'); // 2
// printSuitNumber('foo');


// 使用 $Keys<T>
const countries = {
  US: "United States",
  IT: "Italy",
  FR: "France"
};

type Country = $Keys<typeof countries>;

const italy: Country = 'IT';
countries[italy]
// const nope: Country = 'nope'; // 'nope' is not a Country

// $Diff<A, B> ---> A、B 不同的地方
type Props = { name: string, age: number };
type DefaultProps = { age: number };
type RequiredProps = $Diff<Props, DefaultProps>;

function setProps(props: RequiredProps) {
}

setProps({ name: 'foo' });
setProps({ name: 'foo', age: 42, baz: false }); // you can pass extra props too
// setProps({ age: 42 }); // error, name is required

// Class<T>
class Store {}
class ExtendedStore extends Store {}
class Model {}

function makeStore(storeClass: Class<Store>) {
  return new storeClass();
}

(makeStore(Store): Store);
(makeStore(ExtendedStore): Store);
// (makeStore(Model): Model); // error
// (makeStore(ExtendedStore): Model); // Flow infers the return type


// 官方文档懒得看了
// $Supertype<T>
// $Subtype<T>
// $Abstract<T>
// $PropertyType<T, x>
// $Exact<T>
// $ObjMap<T, F> 
