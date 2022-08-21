// For the adding task -pop-up
let addTask = document.querySelector(".btn-green");
let newTask = document.querySelector(".add");

// For removing task -pop-up
let removeTask = document.querySelector(".btn-red");
let deleteTask = document.querySelector(".del");

// For canceling tasks
let cancelRemoving = document.getElementById("btn-cancel0");
let cancelAdding = document.getElementById("btn-cancel1");
let market = document.querySelector(".market");

// Toggling the tasks
const accordion = document.getElementsByClassName("task");
console.log('outside:',accordion.length);
for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function (e) {
    this.classList.toggle("active");
  });
}

// Adding tasks
addTask.addEventListener("click", function (e) {
  newTask.style.display = "block";
});
cancelAdding.addEventListener("click", function (e) {
  newTask.style.display = "none";
});

// Removing Tasks
removeTask.addEventListener("click", function () {
  deleteTask.style.display = "block";
});
cancelRemoving.addEventListener("click", function (e) {
  deleteTask.style.display = "none";
});

// Removing by clicking the background
window.addEventListener("click", function (e) {
  if (e.target === market) {
    newTask.style.display = "none";
    deleteTask.style.display = "none";
  }
});


// Adding new tasks
// Container has been called as accordion
let container = document.getElementById("text-content");
let addButton = document.getElementById("btn-add");
let inputTaskTitle = document.getElementById("new-task-title");
let inputTaskDetails = document.getElementById("new-task-details");
// console.log(container)

addButton.addEventListener("click", function (e) {
  
  // console.log(e.target)
  let taskContainer = document.createElement("div");
  taskContainer.classList.add("task");

  let taskTitle = document.createElement("p");
  taskTitle.classList.add("text-top");
  // console.log(paragraph)
  taskTitle.innerText = `${inputTaskTitle.value}`;
  // console.log(paragraph)
  taskContainer.appendChild(taskTitle);
//   console.log(container);

  let taskDetails = document.createElement("p");
  taskDetails.classList.add("text-bottom");
  // console.log(paragraph)
  taskDetails.innerText = `${inputTaskDetails.value}`;
  // console.log(paragraph)
  taskContainer.appendChild(taskDetails);
//   console.log(container);




  // validation
  if (inputTaskTitle.value === "" || inputTaskDetails.value === ""){
    alert("Enter Task Before Adding")
    }else(
        container.appendChild(taskContainer)
    )
    console.log('inside:',accordion.length)
    for (i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener("click", function (e) {
            console.log(e.target)
          this.classList.toggle("active");
        });
      }
// Reverting to original screen
    inputTaskTitle.value = "";
    inputTaskDetails.value = ""
    newTask.style.display = "none";
});

