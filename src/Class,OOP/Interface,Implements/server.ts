export { };

interface IAnimal {
    makeSound(): void;
}
interface IFlyable {
    doFly(): void;
}
class Bird implements IAnimal, IFlyable {
    name: string | undefined;
    makeSound() {
        console.log("chim keu chip chip")
    }
    doFly(): void {
        console.log("chim bay");
    }
}

const myBird = new Bird();
myBird.makeSound();
myBird.doFly();

class Person {
    gender: string | undefined;
}

class NhanVien {
    id: number;
    name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

class LapTrinhVien extends NhanVien {
    skill: string;
    constructor(skill: string, name: string, id: number) {
        super(id, name);
        this.skill = skill;
    }
}
const qh = new LapTrinhVien("typescript", "qh", 36)
