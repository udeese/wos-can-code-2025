const myNums = [1, 2, 3, 4, 5, 6];

function filter(nums, cb) {
  const arr = [];
  for (const num of nums) {
    if (cb(num)) {
      arr.push(num);
    }
  }
  return arr;
}

const isOdd = (num) => num % 2 === 1;
const isEven = (num) => num % 2 === 0;

const odds = filter(myNums, isOdd);
const evens = filter(myNums, isEven);

console.log(odds);
console.log(evens);

function map(nums, callback) {
  const arr = [];
  for (const num of nums) {
    arr.push(callback(num));
  }
  return arr;
}

const myArr = [1, 2, 3];
function doubler(num) {
  return num * 2;
}

const doubled = map(myArr, (num) => num * 2);

console.log(doubled); // [2, 4, 6]
