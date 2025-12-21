export { };
const saidHi = (name: string) => {
    console.log("Hi", name);
};
saidHi("dog");

//infer
const sum = (a: number, b: number) => {
    return a + b;
};

const mySum = sum(1, 2);
console.log(mySum);