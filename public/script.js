const tasks = [];

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const prioritySelect = document.getElementById('prioritySelect');

  const taskText = taskInput.value.trim();
  const priority = prioritySelect.value;

  if (taskText === '') return;

  // Add task to the list
  tasks.push({ text: taskText, priority });

  // Clear input
  taskInput.value = '';

  // Re-render task list
  renderTasks();
}

function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  // Define priority order
  const priorityOrder = { high: 1, medium: 2, low: 3 };

  // Sort tasks based on priority
  tasks.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = `${task.text} (${task.priority})`;

    // Remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';
    removeBtn.onclick = () => {
      tasks.splice(index, 1);
      renderTasks();
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li);
  });
}
