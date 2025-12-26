"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a = { data: "qh" };
const b = { data: 123 };
const fetchUser = async () => {
    const res = await fetch("http://localhost:3000/users");
    const dataAPI = await res.json();
    const result = {
        status: 200,
        data: dataAPI
    };
};
