'use strict';

const tasks = [];
const todo__tasksElm = document.querySelector('.todo__tasks');
const newTaskElm = document.querySelector('#new-task');
const btnElm = document.querySelector('.btn-add');

// Fce provede aktualizaci dle promenne task
const updateTasks = () => {
  todo__tasksElm.innerHTML = '';
  for (let i = 0; i < tasks.length; i++) {
    todo__tasksElm.innerHTML +=
      `<div class="task">
    ${tasks[i]}
    </div>`
  }
};

// Fce na update ukolu
const newTask = () => {
  if (newTaskElm.value.trim() !== '') {
    tasks.push(newTaskElm.value);
  }
  updateTasks();
  newTaskElm.value = '';
};

btnElm.addEventListener('click', newTask);
