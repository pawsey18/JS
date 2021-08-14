// 1. Write js function to check whether an 'input' is an array or not
const myArray = [1, 3, 4];
function is_array(input) {
  if (Array.isArray(input)) {
    return true;
  }
  return false;
}
const myFalsy = "no";
is_array(myFalsy);
is_array([1, 5, 8, 9]);

console.log(is_array("darn"));
