export { };
type MyArrString = string[];
type MyArrNumber = number[];

type myArr<T> = T[];
const a: myArr<number> = [1, 2, 3];

type Wrapper<T> = {
    data: T;
}

const c: Wrapper<number> = {
    data: 123
}
const d: Wrapper<string> = {
    data: "abc"
}