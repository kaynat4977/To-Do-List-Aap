function addTask() {
  let taskInput = document.getElementById("todoInput");
  let taskText = taskInput.value.trim();

  if (taskText !== "") {
    let todoList = document.getElementById("todoList");

    // Create a new list item
    let newTask = document.createElement("li");

    // Create text node for the task
    let textNode = document.createTextNode(taskText);
    newTask.appendChild(textNode);

    // Create a remove button
    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = function () {
      todoList.removeChild(newTask);
    };
    newTask.appendChild(removeButton);

    // Append the new task to the list
    todoList.appendChild(newTask);

    // Clear the input field
    taskInput.value = "";
  } else {
    alert("Please enter a task!");
  }
}
