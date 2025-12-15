export{};
type Tname = string | null;
let name: Tname = null;
name = "qh";

const age = undefined;

const printName = (myName : string|null) =>{
    // if(myName)
    // myName.toUpperCase();
//myName?.toUpperCase();
myName!.toUpperCase();
    console.log("name =", myName)
}