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

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(console.log(res))

// async function fetchUsers(){
//   const res = await fetch('https://jsonplaceholder.typicode.com/users')
// const data = await res.json();
// }

// const urls = [
//   "https://jsonplaceholder.typicode.com/users",
//   "https://jsonplaceholder.typicode.com/posts",
//   "https://jsonplaceholder.typicode.com/albums"
// ];

// Promise.all(
//   urls
//     .map((url) => fetch(url).then((res) => res.json()))
//     .then((array) => {
//       console.log("users", array[0]);
//       console.log("posts", array[1]);
//       console.log("albums", array[2]);
//     })
//     .catch("Wrong")
// );

// const getData = async function () {
//   const [users, posts, albums] = await Promise.all(
//     urls.map((url) => fetch(url).then((res) => res.json()))
//   );
//   console.log("users", users);
//   console.log("posts", posts);
//   console.log("albums", albums);
// };

//ES9

// spread operator

const animals = {
  tiget: 55,
  monkey: 74,
  cat: 8,
  bird: 8,
  dog: 78
};

const array = [1, 5, 75, 5, 5];
const { tiget, ...rest } = animals;

console.log(animals);

// ES2020
let result = 5;
//allSettled() instead of promiseall. it'll return whichever promises that are resolved
