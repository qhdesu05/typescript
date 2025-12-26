export { }

function printValue<T = string>(value: T) {
    return value;
}

const a = printValue("abc")

interface ITest<T = string | number> {
    data: T
}

const b: ITest = {
    data: 123
}
const c: ITest<boolean> = {
    data: true
}