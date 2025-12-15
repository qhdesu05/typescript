export{};


//any
let name: any = "qh";

let name1: string = "qh";
name.toLowerCase(); //goi y method string

//unknow
let name2: unknown = "qh";
if(typeof(name2)=="string"){
    name2.toLowerCase(); 
}