const numberArray = [1, 2, [3, 4, [5]]];

console.log(numberArray.flat(3));

const userEmail1 = "         tonythetiger@gmail.com";
const userEmail2 = "         bradybunch@gmail.com          ";
const userEmail3 = "captaincrunch@gmail.com          ";

console.log(userEmail1.trimStart());
console.log(userEmail2.trimStart().trimEnd());
console.log(userEmail3.trimEnd());

userProfiles = [
  ["Michael Scott", 44],
  ["Major Tom", 50],
  ["Ground Patrol", 96]
];

console.log(Object.fromEntries(userProfiles));
console.log(typeof Object.entries(userProfiles));

try {
  peterrrrrrr += "hello";
} catch (error) {
  console.log("You screwed it up 😭 " + error);
}
