export { };

type TUsername = string | number; //union type => dung dau hoac
let username: TUsername = "qhdesu";
username = 123456;

type TStudent = {
    id: number;
    name: string;
}
type TCoder = {
    address: string;
    language: string;
}
type TProgrammer = TStudent & TCoder; //intersection type => dung va

const qh: TProgrammer = {
    id: 1,
    name: "qhdesu",
    address: "VietNam",
    language: "TypeScript"
};