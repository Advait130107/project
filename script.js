function updateDateTime() {
  const now = new Date();

  document.getElementById("dateTime").innerText = now.toLocaleString();
}

updateDateTime();
setInterval(updateDateTime, 1000);

const addTaskBtn = document.getElementById("addTaskBtn");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  let li = document.createElement("li");

  li.innerHTML = `
    ${taskText}
    <button onclick="deleteTask(this)">
      Delete
    </button>
    <button onclick="completeTask(this)">
      Complete
    </button>
  `;

  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
}

function deleteTask(button) {
  button.parentElement.remove();
}

function completeTask(button) {
  const li = button.parentElement;
  li.style.textDecoration = "line-through";
  li.style.opacity = "0.7";
}
