
const taskInput = document.querySelector("#taskInput");
const addTaskBtn = document.querySelector("#addTaskBtn");
const taskList = document.querySelector("#taskList");

addTaskBtn.addEventListener("click", function () {

    const taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const taskDiv = document.createElement("div");
    taskDiv.className = "task";

    const taskPara = document.createElement("p");
    taskPara.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";


    deleteBtn.addEventListener("click", function () {
        taskDiv.remove();
    });

    taskDiv.appendChild(taskPara);
    taskDiv.appendChild(deleteBtn);
    taskList.appendChild(taskDiv);


    taskInput.value = "";
});
