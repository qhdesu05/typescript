"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Parent {
    //methods
    shareAHouse() {
        console.log("share a house from parent");
    }
}
class Child extends Parent {
    shareAHouse() {
        super.shareAHouse();
        console.log("share a house from child");
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
