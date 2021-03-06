// SELECTORS
const inputField = document.querySelector(".input");
const inputButton = document.querySelector(".input-btn");
const resetButton = document.getElementById("reset-btn");
const dateElement = document.querySelector(".date");
const todoList = document.querySelector(".todoList");
const filterOption = document.querySelector(".filter");

// EVENT LISTENERS
filterOption.addEventListener("click", filterTodo);
inputButton.addEventListener("click", returnInput);
inputField.addEventListener("keyup", () => {
  if (event.code === "Enter") returnInput();
});

// LOAD TODOS
window.addEventListener("load", () => getItems());
const getItems = async () => {
  data = await getData();
  data.map(createNewTodo);
};

// SHOWS DATE
const options = {
  weekday: "long",
  month: "short",
  day: "numeric",
  year: "numeric",
};
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("CET", options);

// ADDS & POST TODOS
async function returnInput() {
  if (inputField.value === "" && !null && !undefined)
    alert("Insert an item"), (inputField.style.backgroundColor = "#b43333");
  else {
    inputField.style.backgroundColor = "";
    let newItem = { description: inputField.value, done: false };
    createNewTodo(newItem);
    inputField.value = "";

    const newItemId = await postData(newItem);
    getItems(newItemId);
    todoList.innerHTML = "";
  }
}

// CREATE NEW TODO
function createNewTodo(item) {
  const todoItems = document.createElement("div");
  todoItems.classList.add("todoItems");

  const checkbox = document.createElement("input");
  checkbox.classList.add("checkbox");
  checkbox.type = "checkbox";
  checkbox.checked = false;

  const newItem = document.createElement("input");
  newItem.classList.add("item-input");
  newItem.setAttribute("id", item._id);
  newItem.type = "text";
  newItem.value = `${item.description}`;
  newItem.disabled = true;

  const editButton = document.createElement("button");
  editButton.classList.add("edit-btn");
  editButton.innerHTML = `<i class="fas fa-edit"></i>`;

  const trashButton = document.createElement("button");
  trashButton.classList.add("trash-btn");
  trashButton.innerHTML = `<i class="fas fa-trash-alt"></i>`;

  todoList.appendChild(todoItems);
  todoItems.append(checkbox, newItem, editButton, trashButton);

  trashButton.addEventListener("click", deleteTodo);

  if (item.done) {
    todoItems.style.textDecoration = "line-through";
    todoItems.style.color = "#f1aa4c";
    todoItems.classList.add("completed");
    todoItems.style.backgroundColor = "rgba(0,0,0,0.5)";
    checkbox.checked = true;
  }

  // EDIT TODOS
  editButton.addEventListener("click", () => {
    newItem.disabled = newItem.disabled ? false : true;
    newItem.classList.toggle("edit-todo");
  });

  newItem.addEventListener("keyup", () => {
    if (event.code === "Enter") {
      let newItemText = event.target.value;
      let newItemEdit = { description: newItemText, done: false };
      newItem.disabled = true;
      newItem.classList.remove("edit-todo");
      putData(item._id, newItemEdit);
    }
  });

  // CHECK TODOS
  checkbox.addEventListener("change", () => {
    if (checkbox.checked == true) {
      let itemDone = { description: `${item.description}`, done: true };
      newItem.classList.add("completed");
      todoItems.classList.add("completed");
      todoItems.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      putData(item._id, itemDone);
    } else {
      let itemDone = { description: `${item.description}`, done: false };
      newItem.classList.remove("completed");
      todoItems.classList.remove("completed");
      todoItems.style.backgroundColor = "";
      todoItems.style.textDecoration = "";
      putData(item._id, itemDone);
    }
  });

  // DELETE
  function deleteTodo() {
    todoItems.remove();
    deleteData(item._id);
  }
}

// FILTER
function filterTodo(input) {
  const todos = todoList.childNodes;
  todos.forEach(todo => {
    switch (input.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) todo.style.display = "flex";
        else todo.style.display = "none";
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) todo.style.display = "flex";
        else todo.style.display = "none";
    }
  });
}
