export{};
interface IUser{
    id : number;
    email:string;
    name:string;
}

const fetchUser = async()=>{
    const res = await fetch("http://localhost:3000/users");
    // const data = (await res.json()) as IUser[];
    const data:IUser[] =await res.json();
    console.log("check data", data);
}
fetchUser();