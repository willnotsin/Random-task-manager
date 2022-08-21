"use strict";

// For the adding task -pop-up
var addTask = document.querySelector(".btn-green");
var newTask = document.querySelector(".add"); // For removing task -pop-up

var removeTask = document.querySelector(".btn-red");
var deleteTask = document.querySelector(".del"); // For canceling tasks

var cancelRemoving = document.getElementById("btn-cancel0");
var cancelAdding = document.getElementById("btn-cancel1");
var market = document.querySelector(".market"); // Adding tasks

addTask.addEventListener('click', function (e) {
  newTask.style.display = "block";
});
cancelAdding.addEventListener('click', function (e) {
  newTask.style.display = "none";
}); // Removing Tasks

removeTask.addEventListener('click', function () {
  deleteTask.style.display = "block";
});
cancelRemoving.addEventListener('click', function (e) {
  console.log(e.target);
  deleteTask.style.display = "none";
}); // Removing by clicking the background

window.addEventListener('click', function (e) {
  if (e.target === market) {
    newTask.style.display = "none";
    deleteTask.style.display = "none";
  }
}); // Toggling the tasks

var accordion = document.getElementsByClassName("text-content");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function (e) {
    this.classList.toggle("active");
  });
} // Adding new tasks


var container = document.getElementsByClassName('text-content');
var addButton = document.getElementById('btn-add');
var inputTaskTitle = document.getElementById('new-task-title');
addButton.addEventListener('click', function (e) {
  console.log(e.target);
  var paragraph = document.createElement('p');
  paragraph.innerText = inputTaskTitle.value;
  container.appendChild(paragraph);
});