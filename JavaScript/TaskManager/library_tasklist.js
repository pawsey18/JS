// We need two things here. The Div and handler for the event
let createTaskList = function (div, handler) {
  // variables and functions private
  let tasks = [];
  let storage = getStorage("tasks_14");
  let sort = function () {
    tasks.sort();
  };

  // private backback functions to pass storage to get and set methods
  let getTasks = function (storageString) {
    return storageString === "" ? [] : storageString.split("|");
  };

  let setTasks = (arr) => {
    return Array.isArray(arr) ? arr.join("|") : arr;
  };

  // public methods that have the access to the private variables and functions
  return {
    load: function () {
      if (tasks.length === 0) {
        tasks = storage.get(getTasks);
      }
      return this;
    },
    save: function () {
      storage.set(tasks, setTasks);
      return this;
    },
    add: function (task) {
      tasks.push(task);
      return this;
    },
    delete: function (i) {
      sort();
      tasks.splice(i, 1);
      return this;
    },
    clear: function () {
      tasks.length = 0;
      storage.clear();
      div.innerHTML = "";
    },
    display: function () {
      sort();
      let html = "";
      for (let i in tasks) {
        html = html.concat("<p>");
        html = html.concat("<a href='#' title='", i, "'>Delete </a>");
        html = html.concat("<span>", tasks[i].toString(), "</span>");
        html = html.concat("</p>");
      }
      div.innerHTML = html;

      let links = div.getElementsByTagName("a");
      for (let i = 0; i < links.length; i++) {
        links[i].onclick = handler;
      }
    }
  };
};
