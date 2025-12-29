class Dog {
    makeSound() {
        console.log("con cho keu go go");
    }
}
class Cat {
    makeSound() {
        console.log("con meo keu meow meow");
    }
}
const myDog = new Dog();
const myCat = new Cat();
const myArr = ["a", "b", "c"];
const myZoo = [myDog, myCat];
myZoo.forEach((animal, index) => {
    animal.makeSound();
});
export {};
