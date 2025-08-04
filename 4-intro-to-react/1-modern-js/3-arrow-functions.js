// function declaration
// function add(num) {
//   return num + 10;
// }

// function expression
// const add = function (num) {
//   return num + 10;
// };

// arrow function
// const add = (num) => {
//   return num + 10;
// };

// implicit return
// const add = num => num + 10;

// curly braces disables implicit return
const add = (num) => {
  const total = num + 10;
  return total;
};

console.log(add(2));
