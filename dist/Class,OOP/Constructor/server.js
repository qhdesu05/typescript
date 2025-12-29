class Person {
    constructor(name1, age1) {
        this.name = name1 ?? "unknown";
        this.age = age1 ?? 0;
    }
}
const quanghoang = new Person("qh", 36);
console.log("my name is:", quanghoang.name, ",age = ", quanghoang.age);
const thanhhoa = new Person("thanhhoa", 18);
console.log("my name is:", thanhhoa.name, ",age = ", thanhhoa.age);
export {};
