document.getElementById("add-btn").addEventListener("click", function () {
  const taskInput = document.getElementById("task-input");
  const taskValue = taskInput.value.trim();

  if (taskValue) {
    const taskList = document.getElementById("task-list");

    const listItem = document.createElement("li");
    listItem.textContent = taskValue;

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", function () {
      const newTaskValue = prompt("Edit your task:", taskValue);
      if (newTaskValue) {
        listItem.firstChild.textContent = newTaskValue; // Cập nhật nội dung
      }
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
      taskList.removeChild(listItem);
    });

    listItem.appendChild(editBtn);
    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);

    taskInput.value = ""; // Xóa ô nhập
  } else {
    alert("Please enter a task!");
  }
});
