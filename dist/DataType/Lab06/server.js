const course1 = {
    courseld: 1,
    title: "TypeScript Basics",
    price: 199,
    students: []
};
const course2 = {
    courseld: 1,
    title: "Java Basics",
    price: 366,
    students: []
};
const student1 = {
    name: "qh",
    id: 363636,
    email: "mmb@gmail.com",
    isPremium: true,
    contact: "0123456789"
};
const student2 = {
    name: "th",
    id: 696969,
    email: "thanhhoa@gmail.com",
    isPremium: false,
    contact: "9876543210"
};
const registerStudentToCourse = (student, course) => {
    course.students.push(student);
};
const printCourseInfo = (course) => {
    console.log(`ten khoa hoc: ${course.title}
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
export {};
