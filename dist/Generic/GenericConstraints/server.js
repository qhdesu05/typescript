"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logLength(value) {
    console.log(value.length);
}
logLength([1, 2, 3]);
function testInterface(value) {
    console.log(value);
}
testInterface({ id: 1, name: "quanghoang" });
//rang buoc voi class
class Animal {
    move() {
        console.log("Moving...");
    }
}
class Dog extends Animal {
    bark() {
        console.log("Woof!");
    }
}
function testClass(value) {
    console.log(value);
    if (value instanceof Dog) {
        value.bark();
    }
}
const a1 = new Dog();
const b1 = new Animal();
testClass(b1);
testClass(a1);
//rang buoc keyof
function getProperty(obj, key) {
    return obj[key];
}
const user = { name: "qh", age: 36 };
getProperty(user, "name");
// getProperty(user, "email")
