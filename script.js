let todoTextValue = document.getElementById("todoText");
let addButton = document.getElementById("addButton");
let text = document.getElementById("text");
let count=0;


function addTodoItems(){
    let checkboxId = "checkbox"+count;
    let deleteIconId = "deleteIconId"+count;
    let labelId = "labelId"+count;

    let todoItems = document.getElementById("todoMain");

    let todoItem = document.createElement("div");

    todoItem.classList.add("todo-list");
    todoItem.id = "todoItemId"+count++;
    todoItems.appendChild(todoItem);

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id= checkboxId;
    checkbox.classList.add("checkbox")
    todoItem.appendChild(checkbox)

    let label = document.createElement("label");
    labelId = labelId;
    label.textContent = todoTextValue.value;
    label.setAttribute("for", checkboxId);
    label.classList.add("label");
    todoItem.appendChild(label);

    let deleteIcon = document.createElement("i");
    deleteIcon.id = deleteIconId;
    deleteIcon.classList.add("fa-regular", "fa-trash-can", "delete-icon");
    todoItem.appendChild(deleteIcon);

    console.log(checkboxId);

}
addButton.addEventListener("click", (event) =>{
    addTodoItems();
    todoTextValue.value="";
    
});
