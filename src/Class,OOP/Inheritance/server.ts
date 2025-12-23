export { };
class Parent {
    //fields
    gold: number | undefined;
    money: number | undefined;
    //methods
    shareAHouse() {
        console.log("share a house from parent")
    }
}

class Child extends Parent {
    name: string | undefined;
    shareAHouse() {
        super.shareAHouse();
        console.log("share a house from child")
    }
}

const quanghoang = new Child();
quanghoang.shareAHouse();

//cha-con
//Animal-dog
//person-student
//Employee - developer
class Animal {

}
class Dog extends Animal {

}