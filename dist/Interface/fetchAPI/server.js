"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetchUser = async () => {
    const res = await fetch("http://localhost:3000/users");
    // const data = (await res.json()) as IUser[];
    const data = await res.json();
    console.log("check data", data);
};
fetchUser();
