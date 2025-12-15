"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = "USER";
const admin = "ADMIN";
const superAdmin = 1;
const otherUser = "USER";
var RoleEnum;
(function (RoleEnum) {
    RoleEnum["USER"] = "USER";
    RoleEnum["SUPERADMIN"] = "SUPERADMIN";
    RoleEnum["ADMIN"] = " ADMIN  "; //2 
})(RoleEnum || (RoleEnum = {}));
const myRole1 = RoleEnum.USER;
const myRole2 = RoleEnum.ADMIN;
console.log(myRole1);
console.log(myRole2);
