'use strict';

const tasks = [];
const todo__tasksElm = document.querySelector('.todo__tasks');
const newTaskElm = document.querySelector('#new-task');
const btnElm = document.querySelector('.btn-add');

const updateTasks = () => {
  todo__tasksElm.innerHTML = '';
  for (let i = 0; i < tasks.length; i++) {
    todo__tasksElm.innerHTML +=
      `<div class="task">
    ${tasks[i]}
    </div>`
  }
};

const newTask = () => {
  if (newTaskElm.value.trim() !== '') {
    tasks.push(newTaskElm.value);
  }
  updateTasks();
  newTaskElm.value = '';
};

btnElm.addEventListener('click', newTask);


// const btnPointer = () => {
//   const buttonElm = document.querySelector('button');
//   buttonElm.style.cursor = "pointer";
// }
// btnPointer();