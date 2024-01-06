// scope of let
function checkScope() {
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}

//console.log(checkScope());

// use of const
const s = [5, 7, 2];
const x = [2, 5, 7];

function editInPlace() {
  for (let i = 0; i < s.length; i++) {
    s[i] = x[i];
  }
  //  console.log(s);
  return s;
}
//console.log(editInPlace());

//spread operator
const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;

arr2 = [...arr1]; // Change this line

//console.log(arr2);

// destructuring

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

// Only change code below this line

const { today, tomorrow } = HIGH_TEMPERATURES;

// Only change code above this line
/*
console.log("Today's High: " + today);
console.log("Tomorrow's High: " + tomorrow);
*/
/*
const HIGH_TEMPERATURES2 = {
  yesterday: 75,
  today: 77,
  tomorrow: 81,
};

// Only change code below this line
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES2;
console.log("Today's High: " + highToday);
console.log("Tomorrow's High: " + highTomorrow);

// Only change code above this line
*/

// destructuring nested objects

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 },
};

// Only change code below this line

const {
  today: { low: lowToday, high: highToday },
} = LOCAL_FORECAST;
//console.log(lowToday, highToday);
// Only change code above this line

// Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.

let a = 8,
  b = 6;

[a, b] = [b, a];

//console.log(a, b);

// destructuring with rest elements
function removeFirstTwo(list) {
  const [a, b, ...shortList] = list;
  return shortList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
//console.log(sourceWithoutFirstTwo);

//destructure assignment to pass an object as a function's parameters
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};

const half = ({ max, min }) => (max + min) / 2;

// console.log(half(stats));
