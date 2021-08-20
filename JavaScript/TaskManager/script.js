let $ = function (id) {
  return document.getElementById(id);
};
let tasklist;

let addToTaskList = function () {
  let taskTextbox = $("task");
  let newTask = new Task (taskTextbox.value);
  if (newTask.isValid()) {
    tasklist.add(newTask).save().display();
    taskTextbox.value = "";
  } else {
    alert("Please enter a task");
    taskTextbox.focus();
  }
};

let clearTaskList = function () {
  tasklist.clear();
  $("task").focus();
};

let deleteFromTaskList = function () {
  tasklist.delete(this.title).save().display(); // this = click
  $("task").focus();
};

const boldExclamationPoint = function bold (node) {
  // if (child nodes) loop them, call functions for each.
  if (node.childNodes && node.childNodes.length > 0) {
    for (let i in node.childNodes) {
      bold(node.childNodes[i]); // and this is recursion. it is calling itself.
    }
  } else {
    if (node.nodeValue && node.nodeValue.indexOf("!") > -1) {
      let span = node.parentNode;
      span.innerHTML = "<b>" + node.nodeValue + "</b>";
    }
  }
};

window.onload = function () {
  $("add-task").onclick = addToTaskList;
  $("clear-tasks").onclick = clearTaskList;
  $("bold").onclick = function () {
    boldExclamationPoint(document);
  };

  tasklist = createTaskList($("tasks"), deleteFromTaskList);
  tasklist.load().display();
  $("task").focus();
};
