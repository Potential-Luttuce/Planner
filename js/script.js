document.getElementById("taskBttn").addEventListener("click", makeTask);

function makeTask() {
  var newTask = document.getElementById("taskInput").value;
  document.getElementById("demo").innerHTML = newTask;
}