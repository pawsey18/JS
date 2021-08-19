// // Detructuring of an object example

// const obj = {
//     person: 'John',
//     age: 40,
//     eligible: false
// }

// // const person = obj.person;
// // const age = obj.age;
// // let eligible = obj.eligible;

// const { person, age} = obj;

//Object properties

const name = "Nigel Smith";

const obj = {
  [name]: "Dynamic",
  [4 + 3]: "Hellllllooo"
};
console.log(obj);

const a = "name";
const b = true;
const c = {};

const obj2 = {
  a,
  b,
  c
};
// if all same values, otherwise "a:a,"

// Default arguments

function greet(name = "", age = 40, pet = "bird") {
  return `Hello ${name}, you look to be about ${age} and what nice ${pet} you have.`;
}

console.log(greet());

// Symbol

let sym1 = Symbol();
let sym2 = Symbol("hello");
let sym3 = Symbol("hello");

console.log(sym2 === sym3);

// arrow
const add = (num1, num2) => num1 + num2;
