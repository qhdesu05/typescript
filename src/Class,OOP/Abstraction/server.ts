export { };
abstract class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    abstract makeSound(): void;
    test() {
        console.log(this.name);
    }
}
class Dog extends Animal {
    makeSound(): void {
        console.log("con cho keu go go")
    }
}
const myDog = new Dog("super dog")
myDog.makeSound();
myDog.test();