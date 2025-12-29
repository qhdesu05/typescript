class Animal {
    constructor(name) {
        this.name = name;
    }
    test() {
        console.log(this.name);
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("con cho keu go go");
    }
}
const myDog = new Dog("super dog");
myDog.makeSound();
myDog.test();
export {};
