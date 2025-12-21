"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const btnElement = document.getElementById("myBtn");
const inputElement = document.getElementById("myInput");
btnElement?.addEventListener("click", () => {
    alert(inputElement?.value);
});
