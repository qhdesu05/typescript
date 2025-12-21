export { };
//union type
let username: string | number = "qh"; //name
username = 123456; //id
username = "012312414"; //phone number

const printUsername = (username: string | number) => {
    if (typeof username === "string") {

        console.log(`username is ${username.toUpperCase()}`);
    }
}
printUsername("qh36");