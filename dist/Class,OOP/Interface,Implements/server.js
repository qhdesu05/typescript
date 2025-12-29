class Bird {
    makeSound() {
        console.log("chim keu chip chip");
    }
    doFly() {
        console.log("chim bay");
    }
}
const myBird = new Bird();
myBird.makeSound();
myBird.doFly();
class Person {
}
class NhanVien {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class LapTrinhVien extends NhanVien {
    constructor(skill, name, id) {
        super(id, name);
        this.skill = skill;
    }
}
const qh = new LapTrinhVien("typescript", "qh", 36);
export {};
