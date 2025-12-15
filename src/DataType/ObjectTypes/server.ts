export{};
//optional
const student1 :{
    name : string;
    id : number;
    phone?:number;
}={
    name : "th",
    id:123
}
const student2 :{
    name : string;
    id : number;
    phone?:number;
}={
    name : "tm",
    id:52354653
}

const person:{
    name : string;
    age : number;
    address : string;
    isGood : boolean;
} = {
    name : "qh",
    age : 36,
    address : "hn",
    isGood : false
}
const printInfo = (people: {
     name : string;
    age : number;
    address : string;
    isGood : boolean;
}) =>{
console.log("your name's :", people.name);
}

printInfo(person);