export { };
interface IAnimal {
    makeSound(): void;
}
class Dog implements IAnimal {
    makeSound(): void {
        console.log("con cho keu go go")
    }
}
class Cat implements IAnimal {
    makeSound(): void {
        console.log("con meo keu meow meow")
    }
}

const myDog = new Dog();
const myCat = new Cat();
const myArr: string[] = ["a", "b", "c"]
const myZoo: IAnimal[] = [myDog, myCat]
myZoo.forEach((animal, index) => {
    animal.makeSound();
})