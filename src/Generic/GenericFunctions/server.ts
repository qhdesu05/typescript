export { };
function testNumber(value: number) {
    return value;
}

function testGeneric<T>(value: T) {
    return value;
}

const a = testGeneric<string>("qhdesu");
const b = testGeneric<number>(123);
const c = testGeneric<boolean>(true);

// function getFirstElementInArray<T>(arr: T[]) {
//     return a[0];
// }
const getFirstElementInArray = <T>(arr: T[]) => {
    return arr[0];
}
const a1 = getFirstElementInArray<number>([1, 2, 3])
const a2 = getFirstElementInArray<string>(["abc"])

