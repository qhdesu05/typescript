"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//union type
let username = "qh"; //name
username = 123456; //id
username = "012312414"; //phone number
const printUsername = (username) => {
    if (typeof username === "string") {
        console.log(`username is ${username.toUpperCase()}`);
    }
};
printUsername("qh36");
