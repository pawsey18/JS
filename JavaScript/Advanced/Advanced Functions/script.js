// Closures.
const first = () => {
  const greet = "Hello";
  const second = () => {
    console.log(greet);
  };
  return second;
};
// A function ran. It got executed and it will never run again.
// but, it'll remember the references to those variables in memory.
// so, the child scope is going to have access to the parent scope in the example above, but the parent can't access the childs scope.

// Commonly used for giving objects data privacy. Data privacy is most important, especially if program to interface, 
// it is more robust software. Using implementations will be more error prone.
const newFunction = first();
newFunction();


// currying is particularly useful in event handling.
// Currying can help to avoid passing the SAME variable again and again and again.
// Ultimately, it helps to create a higher order function.

const multiply = (num1, num2) => num1 * num2;
const curriedMultiply = (num1) => (num2) => num1 * num2;
curriedMultiply(5)(20);


