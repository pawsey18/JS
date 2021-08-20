const Task = function (task) {
  this.text = task;
};

Task.prototype.isValid = function () {
  if (this.text === "") {
    return false;
  }
  return true;
};

Task.prototype.toString = function () {
  // capitilize the first letter of hte task text
  let first = this.text.substring(0, 1);
  return first.toUpperCase() + this.text.substring(1);
};
