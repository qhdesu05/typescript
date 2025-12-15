export{};
type TRole = string | number;
type TSuperRole = "USER" | "SUPER_ADMIN" | "ADMIN"

const user : TRole = "USER";
const admin : TRole = "ADMIN";
const superAdmin : TRole = 1;

const otherUser : TSuperRole = "USER";

enum RoleEnum{
    USER = "USER", //0 
    SUPERADMIN = "SUPERADMIN", //1 
    ADMIN  = " ADMIN  " //2 
}

const myRole1: RoleEnum = RoleEnum.USER;
const myRole2: RoleEnum = RoleEnum.ADMIN;
console.log(myRole1);
console.log(myRole2);