// array destructuring syntax
const fibonacci = [0, 1, 1, 2, 3, 5, 8];
const [a, b, c, , , d] = fibonacci;

console.log(d); // 0, 1, 1

/*
  var fibonacci = [0, 1, 1, 2, 3];
  var a = fibonacci[0];
  var b = fibonacci[1];
  var c = fibonacci[2];
*/

// object destructuring syntax
const myGuitar = {
  make: 'Fender',
  model: 'Stratocaster',
  year: 1977,
  color: 'red',
};
const { year, color: banana } = myGuitar;

console.log(year, banana); // 1977 red

// one line swap
let bowl = 'apples';
let bag = 'oranges';

[bowl, bag] = [bag, bowl];

console.log(bowl, bag); // oranges apples

const fruit = ['🍎', '🍊', '🍌', '🍏'];
[fruit[0], fruit[1]] = [fruit[1], fruit[0]];
console.log(fruit);

// destructuring from a returned array
function rickRoll() {
  return ['Never', 'gonna', 'give', 'you', 'up'];
}

const [x, y] = rickRoll();

console.log(x, y); // Never gonna
