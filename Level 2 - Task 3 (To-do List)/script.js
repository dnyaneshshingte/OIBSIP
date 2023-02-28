const todoList = document.getElementById("todoList");
const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todos = [];

addBtn.addEventListener("click", function() {
  const todo = todoInput.value;
  if (todo !== "") {
    todos.push(todo);
    todoInput.value = "";
    displayTodos();
  }
});

function displayTodos() {
  todoList.innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    const li = document.createElement("li");
    const removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove";
    removeBtn.addEventListener("click", function() {
      todos.splice(i, 1);
      displayTodos();
    });
    li.innerText = todos[i];
    li.appendChild(removeBtn);
    todoList.appendChild(li);
  }
}