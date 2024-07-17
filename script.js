const addButton = document.getElementById("addButton");
const addField = document.getElementById("addField");
const tasksDisplay = document.getElementById("tasksDisplay");
const clearButton = document.getElementById("clearButton");


addButton.addEventListener("click", (event) => {
  data = addField.value.trim();
  if(!data) {
    alert("Please enter a task");
    addField.value = '';
    return;
  }
  const task = document.createElement("li");
  task.className = 'taskItem'
  task.innerHTML = data;
  tasksDisplay.appendChild(task);
  addField.value = '';
});

clearButton.addEventListener('click', (event) => {
    tasksDisplay.innerHTML = '';
})