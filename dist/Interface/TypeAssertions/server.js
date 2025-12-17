const btnElement = document.getElementById("myBtn");
const inputElement = document.getElementById("myInput");
btnElement?.addEventListener("click", () => {
    alert(inputElement?.value);
});
export {};
