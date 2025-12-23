"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name, email, role) {
        this.name = name;
        this._email = email;
        this.role = role ?? "student"; //?? => neu role ko co gia tri => role = student
    }
    printUserInfo() {
        console.log(`[GET-INFO] name = ${this.name}, email = ${this._email}, role = ${this.role}`);
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
}
class Teacher extends User {
    constructor(name, email, role) {
        super(name, email, role);
        this.courses = [];
    }
    addCourse(courseName) {
        this.courses.push(courseName);
    }
    printUserInfo() {
        const courseName = this.courses.join(","); //js, ts
        console.log(`[${this.role}] ${this.name} - Corses Taught :${courseName}`);
    }
}
class Student extends User {
    constructor(name, email) {
        super(name, email);
        this.enrolledCourses = [];
    }
    enroll(coursesName) {
        this.enrolledCourses.push(coursesName);
    }
    printUserInfo() {
        const courseName = this.enrolledCourses.join(",");
        console.log(`[${this.role}] ${this.name} - Enrolled Courses: ${courseName}`);
    }
}
const qh = new Student("qh", "quang@gmail.com");
qh.enroll("ts");
const th = new Teacher("thanhhoa", "thanhhoaquetoi@gmail.com", "teacher");
th.addCourse("react native");
qh.printUserInfo();
th.printUserInfo();
