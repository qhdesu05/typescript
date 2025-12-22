export { };
class Animal {
    //fields
    public name: string;
    private id: number;
    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
    //method
    makeSound() {
        console.log("alo with id =", this.id);
    }
}

const myCat = new Animal("cat", 1)
console.log("animal name =", myCat.name)
myCat.makeSound();