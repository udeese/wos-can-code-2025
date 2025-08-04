function double(x) {
  return x * 2;
}

const result1 = double(2); // always return 4
const result2 = double(3); // always return 6

let total = 2;

// impure function
function addToTotal(x) {
  total += x; // modifies external state
}

addToTotal(1);

// Take an array and return a new array with doubled values
function doubles(arr) {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    temp.push(arr[i] * 2);
  }
  return temp;
}
console.log(doubles([5, 6, 7]));

// Accept a string and return the uppercase version (without modifying the original)
/**
 *
 * @param {string} str
 * @returns {string}
 */
function uppercase(str) {
  const temp = str.toUpperCase();
  console.log({ str });
  console.log({ temp });
  return temp;
}
console.log(uppercase('hello'));

// Transform a list of numbers into formatted currency strings (e.g., formatToUSD(5) → "$5.00")

/**
 *
 * @param {number[]} ints
 * @returns {string[]}
 */
function formatToUSD(ints) {
  const arr = [];
  for (const int of ints) {
    arr.push(`$${int}.00`);
  }
  return arr;
}

const result = formatToUSD([4, 76, 20]);
console.log(result);
