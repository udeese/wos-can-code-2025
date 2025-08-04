// spread with arrays
const nums = [1, 2, 3];
const moreNums = [...nums, 4, 5];
console.log(moreNums); // [1, 2, 3, 4, 5]

const copy = [...nums];
nums[3] = 4;
console.log(copy); // [1, 2, 3]

// spread with objects
const person = { name: 'Ada', age: 30 };
const personCopy = { ...person };
const updatedPerson = { ...person, age: 31 };
console.log(personCopy);
console.log(updatedPerson); // { name: "Ada", age: 31 }

// rest operator
function logAll(...args) {
  console.log('You passed:', args);
}

logAll(1, 2, 3); // You passed: [1, 2, 3]
logAll('a', 'b'); // You passed: ["a", "b"]

function countArgs(...things) {
  console.log(`You passed ${things.length} things.`);
}

countArgs('apple', 'banana', 'cherry'); // You passed 3 things.

function firstAndRest(first, ...others) {
  console.log('First:', first);
  console.log('Rest:', others);
}

firstAndRest('a', 'b', 'c', 'd');
// First: a
// Rest: ["b", "c", "d"]
