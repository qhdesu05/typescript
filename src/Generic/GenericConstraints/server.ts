export { };

function logLength<T extends { length: number }>(value: T) {
    console.log(value.length)
}

logLength([1, 2, 3]);
// logLength(123);

interface IUser {
    id: number;
    name: string;
}

function testInterface<T extends IUser>(value: T) {
    console.log(value)
}

testInterface({ id: 1, name: "quanghoang" })

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

function testClass<T extends Animal>(value: T) {
    console.log(value)

    if (value instanceof Dog) {
        value.bark();
    }
}

const a1 = new Dog();
const b1 = new Animal();
testClass(b1);
testClass(a1);

//rang buoc keyof
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}
const user = { name: "qh", age: 36 }
getProperty(user, "name")
// getProperty(user, "email")