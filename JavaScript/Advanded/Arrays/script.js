// Advanced Arrays

const array = [1, 6, 8, 9, 7, 5];
const multiply = [];

const newArray = array.forEach((number) => {
  multiply.push(number * 2);
});

console.log("forEach ", multiply);

// Map

// When thinking about looping an array, use map. forEach has a purpose to just iterate and map returns the new collection

const mapArray = array.map((number) => {
  return number * 2;
});

console.log("map ", multiply);

// Filther Array
// You can filter by using a condion to get added to the new collection
const filterArray = array.filter((num) => {
  return num > 7;
});

console.log(filterArray);

// Reduce

const reduceArray = array.reduce((accumlator, num) => {
  return accumlator + num;
}, 0);

console.log(reduceArray);
