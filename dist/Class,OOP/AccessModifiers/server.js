"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    //method
    makeSound() {
        console.log("alo with id =", this.id);
    }
}
const myCat = new Animal("cat", 1);
console.log("animal name =", myCat.name);
myCat.makeSound();
