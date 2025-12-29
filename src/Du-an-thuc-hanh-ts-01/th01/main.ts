import { deleteTodo, removeTodoFromLocalStorage } from "./delete.todo.js";
import { getRandomInt } from "./helper.js";
import { displayTable } from "./table.todo.js";

export interface ITodo {
    id: number;
    name: string;
}


const btnElement = document.getElementById("btnCreateTodo");

btnElement?.addEventListener("click", () => {
    const inputElement = document.getElementById("todoName") as HTMLInputElement;
    if (inputElement) {
        const name = inputElement.value;

        //save todo to localStorage
        const newTodo = {
            id: getRandomInt(1, 999),
            name: name
        }
        handleSaveTodoToLocalStorage(newTodo);
        hanleAddNew(newTodo);
        //close modal
        //@ts-ignore
        const createTodoModal = bootstrap.Modal.getOrCreateInstance("#createTodo", {
            keyboard: false
        })
        createTodoModal.hide();

        //clear todo
        inputElement.value = ""

        //show toast
        //@ts-ignore
        const toast = new bootstrap.Toast("#liveToast")
        toast.show()
    }
})

const handleSaveTodoToLocalStorage = (todo: ITodo) => {
    //check su ton tai cua todo
    const todosStr = localStorage.getItem("todoList")
    if (todosStr) {
        //update
        const todosArr = JSON.parse(todosStr) as ITodo[]
        todosArr.push(todo);

        localStorage.setItem("todoList", JSON.stringify(todosArr))
    }
    else {
        //create
        localStorage.setItem("todoList", JSON.stringify([todo]))
    }
}

const hanleAddNew = (todo: ITodo) => {
    const tableBody = document.querySelector("#tableTodo tbody");
    const todoListStr = localStorage.getItem("todoList");
    let index = 0;
    if (todoListStr) {
        index = JSON.parse(todoListStr).length - 1;
    }

    //tao phan tu dong moi
    const newRow = document.createElement("tr");

    //gam HTML cho dong
    newRow.innerHTML = `
    <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${todo.id}</td>
                    <td>${todo.name}</td>
                    <td>
                    <button 
                    class="btn btn-danger delete-todo" 
                    data-id=${todo.id}
                    >
                    Delete
                    </button>
                    </td>
                </tr>
    `
    //them dong vao cuoi bang
    tableBody?.appendChild(newRow);

    //gan su kien onClick cho row vua tao
    const btnElement = document.querySelector(`[data-id="${todo.id}"]`)!;

    btnElement.addEventListener("click", () => {
        const id = btnElement.getAttribute("data-id")

        //delete todo
        if (id) {
            removeTodoFromLocalStorage(+id) //TRICK: dung "+" de convert tu string sang number

            //delete row
            const row = btnElement.closest("tr");
            if (row) row.remove();
        }
    })
}


displayTable();
deleteTodo();

