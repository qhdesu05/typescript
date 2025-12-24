"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function testNumber(value) {
    return value;
}
function testGeneric(value) {
    return value;
}
const a = testGeneric("qhdesu");
const b = testGeneric(123);
const c = testGeneric(true);
// function getFirstElementInArray<T>(arr: T[]) {
//     return a[0];
// }
const getFirstElementInArray = (arr) => {
    return arr[0];
};
const a1 = getFirstElementInArray([1, 2, 3]);
const a2 = getFirstElementInArray(["abc"]);
