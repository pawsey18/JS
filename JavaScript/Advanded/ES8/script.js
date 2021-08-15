console.log("Turtle".padStart(10));
// adds spaces, indenting 10 total spaces

console.log("Tutle".padEnd(10));
// adds 10 spaces after.

const fun = (a, b, c, d) => {
  console.log(a);
};

fun(1, 2, 3, 4);

/*
Object.values
Object.entries
Object.keys
*/

let obj = {
  username0: "aladdin",
  username1: "Bart",
  username2: "Ace"
};

// One way to loop through the object properties

Object.keys(obj).forEach((key, index) => {
  console.log(key, obj[key]);
});

// Get the objects field values

Object.values(obj).forEach((value) => {
  console.log(value);
});

// Get the key and value. and be able to use array filter, map.

Object.entries(obj).forEach((value) => {
  console.log(value);
});

// Find and replace values
let findAndReplace = Object.entries(obj).map((value) => {
  return value[1] + value[0].replace("username", " ");
});

console.log(findAndReplace);

// Async Await asynchronous javascript
