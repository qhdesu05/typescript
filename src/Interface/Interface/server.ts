export { };
interface IPerson {
    name: string;
    age: number;
    address?: string;
    readonly language: string; //readonly : ko dc sua doi
    sayHi: () => void;
};

const quanghoang: IPerson = {
    name: "Quang Hoang",
    age: 20,
    language: "vn",
    sayHi: () => console.log("Hello 1"),
};
quanghoang.sayHi();
const thanhhoa: IPerson = {
    name: "Thanh Hoa",
    age: 36,
    address: "Raumaia",
    language: "thanh hoa",
    sayHi: () => console.log("Hello 2"),
};

interface Animal {
    name: string;
};
interface Dog extends Animal {
    breed: string;
};
const myDog: Dog = {
    name: "Buddy",
    breed: "Husky"
};

