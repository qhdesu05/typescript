const saidHi = (name) => {
    console.log("Hi", name);
};
saidHi("dog");
//infer
const sum = (a, b) => {
    return a + b;
};
const mySum = sum(1, 2);
console.log(mySum);
export {};
