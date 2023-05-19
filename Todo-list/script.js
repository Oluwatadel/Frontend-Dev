const add = document.getElementById("add");
const todo = document.getElementById("todo");
const todoTray = document.querySelector(".todo_tray");

let todos =[];

const renderTodos = () => {
  todoTray.innerHTML = "";

  todos.forEach((todo, index) => {
    const todoItemElement = document.createElement("p");
    todoItemElement.setAttribute("id","todo_item");
    todoItemElement.textContent = todo;
    
    const editButton = document.createElement("img");
    editButton.setAttribute("src", "images/pencil.png");
    editButton.setAttribute("alt", "Edit");
    editButton.setAttribute("data-index", index);
    editButton.classList.add("edit");
    
    const deleteButton = document.createElement("img");
    deleteButton.setAttribute("src", "images/delete.png");
    deleteButton.setAttribute("alt", "Delete");
    deleteButton.setAttribute("data-index", index);
    deleteButton.classList.add("delete");
    
    const todoFunc = document.createElement("div");
    todoFunc.classList.add("todo_func");
    todoFunc.appendChild(editButton);
    todoFunc.appendChild(deleteButton);
    
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo_item");
    todoItem.appendChild(todoItemElement);
    todoItem.appendChild(todoFunc);
    
    todoTray.appendChild(todoItem);
  })
}
// Function to handle adding a todo item
const handleAdd = () => {
  const newTodo = todo.value.trim();
  
  if (newTodo !== "") {
    todos.push(newTodo);
    todo.value = "";
    renderTodos();
  }
};

// Function to handle editing a todo item
const handleEdit = (index) => {
  const todoItem = todoTray.children[index];
  const todoText = todoItem.querySelector("#todo_item");
  const editButton = todoItem.querySelector(".edit");
  
  const editInput = document.createElement("input");
  editInput.setAttribute("type", "text");
  editInput.setAttribute("value", todoText.textContent);
  
  const saveButton = document.createElement("button");
  saveButton.textContent = "Save";
  
  const cancelButton = document.createElement("button");
  cancelButton.textContent = "Cancel";
  
  const editControls = document.createElement("div");
  editControls.appendChild(editInput);
  editControls.appendChild(saveButton);
  editControls.appendChild(cancelButton);
  
  todoText.replaceWith(editControls);
  editButton.classList.add("hidden");
  
  saveButton.addEventListener("click", () => {
    const newTodoText = editInput.value.trim();
    
    if (newTodoText !== "") {
      todos[index] = newTodoText;
      renderTodos();
    }
  });
  
  cancelButton.addEventListener("click", () => {
    editControls.replaceWith(todoText);
    editButton.classList.remove("hidden");
  });
};

// Function to handle deleting a todo item
const handleDelete = (index) => {
  todos.splice(index, 1);
  renderTodos();
};
// Event listener for adding a new todo item
add.addEventListener("click", handleAdd);

// Event listener for editing a todo item
todoTray.addEventListener("click", (e) => {
  const editButton = e.target.closest(".edit");
  
  if (editButton) {
    const index = editButton.getAttribute("data-index");
    handleEdit(index);
  }
});

// Event listener for deleting a todo item
todoTray.addEventListener("click", (e) => {
  const deleteButton = e.target.closest(".delete");
  
  if (deleteButton) {const index = deleteButton.getAttribute("data-index");
  handleDelete(index);
  }});