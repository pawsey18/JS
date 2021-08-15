// Reference type

// Objects
const object1 = { value: 10 };
const object2 = object1;
const object3 = { value: 10 };

console.log(object1 === object2);
console.log(object1 === object3);

object1.value = 15;
console.log(object1.value);
console.log(object2.value);
console.log(object3.value);

// Objects in JavaScript are reference types.
// The other primitive types being: boolean, null, undefined, string, number, bigint, symbol

const object4 = {
  a: function () {
    console.log(this);
  }
};

object4.a();

// Instantiation

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  sayHi() {
    console.log(`Hi, I'm ${this.firstName} my last name is ${this.lastName}`);
  }
}

class ShapeShifter extends Person {
  constructor(firstName, lastName) {
    super(firstName, lastName);
  }
  changeBody() {
    console.log(`${this.lastName} is changing its skin and body`);
  }
}

const ss1 = new ShapeShifter("CopyOfDean", "COWinchester");
const ss2 = new ShapeShifter("CopyOfDean", "COWinchester");

ss1.sayHi();
ss2.sayHi();
ss2.changeBody();
//const person = new Person();
//person.sayHi('Bob', 'Cratchit');

// Passing by Reference vs by Primitive Types
/*
      [a][b]                       [a][b]
Object \ /          Primitive Types👆 👆  
*/

// Pass by value. We create a value, if we copy that value then it is stored somewhere else in memory
let a = 5;
let b = a;

b++;
console.log(a, b);

// Object, passing by reference. When we assign objects we are storing them in the heap, somewhere in memory. 
// by saying obj1 = obj2, we are saying this is the address stored in memory.


let myObject1 = { name: "Frank", password: "123" };
let myObject2 = myObject1;

myObject2.password = "password";

console.log(myObject1);
console.log(myObject2);
