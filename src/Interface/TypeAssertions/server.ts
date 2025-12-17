export{};
const btnElement = document.getElementById("myBtn");
const inputElement =document.getElementById("myInput") as HTMLInputElement;
btnElement?.addEventListener("click",()=>{
    alert(inputElement?.value);
});
