export{};

type TStudent ={
    id: string;
    name : string;
    asddress : string;
    age : number;
};

const student1: TStudent ={
    id: "sv1",
    name :"qh",
    asddress : "hn",
    age : 36
};
const student2: TStudent ={
    id: "sv2",
    name :"grgsd",
    asddress : "thanh hoa",
    age : 118
};

const printInfo = (st:TStudent) =>{
console.log("student's name is :", st.name);
};
printInfo(student1);
printInfo(student2);