export { };
type TRole = "student" | "teacher";

class User {
    public name: string;
    private _email: string;
    protected role: TRole;

    constructor(name: string, email: string, role?: TRole) {
        this.name = name;
        this._email = email;
        this.role = role ?? "student"; //?? => neu role ko co gia tri => role = student
    }
    printUserInfo() {
        console.log(`[GET-INFO] name = ${this.name}, email = ${this._email}, role = ${this.role}`)
    }
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
}

class Teacher extends User {
    public courses: string[] = [];
    constructor(name: string, email: string, role: TRole) {
        super(name, email, role);
    }
    addCourse(courseName: string) {
        this.courses.push(courseName);
    }
    printUserInfo() {
        const courseName = this.courses.join(",") //js, ts
        console.log(`[${this.role}] ${this.name} - Corses Taught :${courseName}`)
    }
}

class Student extends User {
    enrolledCourses: string[] = [];
    constructor(name: string, email: string) {
        super(name, email);
    }
    enroll(coursesName: string) {
        this.enrolledCourses.push(coursesName);
    }

    printUserInfo() {
        const courseName = this.enrolledCourses.join(",")
        console.log(`[${this.role}] ${this.name} - Enrolled Courses: ${courseName}`)
    }
}

const qh = new Student("qh", "quang@gmail.com");
qh.enroll("ts");
const th = new Teacher("thanhhoa", "thanhhoaquetoi@gmail.com", "teacher");
th.addCourse("react native")

qh.printUserInfo();

th.printUserInfo();