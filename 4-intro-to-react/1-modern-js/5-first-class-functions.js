function greet() {
  console.log('Hello!');
}

const sayHello = greet;

sayHello(); // Hello!

function thank() {
  console.log('Thanks for learning with us.');
}

let expressGratitude = thank;
expressGratitude();

function one() {
  console.log('One!');
}
function two() {
  console.log('Two!');
}

const actions = [one, two];

for (const action of actions) {
  action(); // Calls each function in the array
}

// a function that accepts another function as an
// argument is called a "higher order function"
function shout(fn) {
  console.log('AND NOW...');
  fn();
  console.log('Thank you, thank you.');
}

// a function that is passed into another function
// is called a "callback function"
function cheer() {
  console.log('Wooohooo!');
}

shout(cheer);
