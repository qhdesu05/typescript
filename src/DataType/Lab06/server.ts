export { };

type TStudent = {
    id: number;
    name: string;
    email: string;
    isPremium: boolean;
    contact: string | number;
};

type Course = {
    courseld: number;
    title: string;
    price: number;
    students: TStudent[];
}
const course1: Course = {
    courseld: 1,
    title: "TypeScript Basics",
    price: 199,
    students: []
};
const course2: Course = {
    courseld: 1,
    title: "Java Basics",
    price: 366,
    students: []
};
const student1: TStudent = {
    name: "qh",
    id: 363636,
    email: "mmb@gmail.com",
    isPremium: true,
    contact: "0123456789"
};
const student2: TStudent = {
    name: "th",
    id: 696969,
    email: "thanhhoa@gmail.com",
    isPremium: false,
    contact: "9876543210"
};

const registerStudentToCourse = (student: TStudent, course: Course) => {
    course.students.push(student);
}

const printCourseInfo = (course: Course) => {
    console.log(
        `ten khoa hoc: ${course.title}
        so hoc vien da dang ky: ${course.students.length}`);
    if (course.students.length == 0) {
        console.log("chua co hoc vien nao dang ky khoa hoc nay");
    }
    else {
        //["qh","desuu"]
        const studenList = course.students.map(item => item.name);
        console.log("liet ke ten tung hoc vien : ", studenList.join(", "));
    }
};

registerStudentToCourse(student1, course1);
registerStudentToCourse(student2, course1);
printCourseInfo(course1);
console.log("---------------");
printCourseInfo(course2);