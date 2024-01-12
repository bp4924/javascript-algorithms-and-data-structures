// access an arrayls contents
let myArray = ["a", "b", "c", "d"];
myArray[1] = "boo";
//console.log(myArray);

// add items using push and unshift methods
function mixedNumbers(arr) {
  arr.push([7, "VIII", 9]);
  arr.unshift("I", 2, "three");
  return arr;
}
//console.log(mixedNumbers(["IV", 5, "six"]));

// remove items with pop() and shift()
function popShift(arr) {
  let popped = arr.pop(); // Change this line
  let shifted = arr.shift(); // Change this line
  return [shifted, popped];
}

//console.log(popShift(["challenge", "is", "not", "complete"]));

// remove items with splice method
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4);
//console.log(arr);

// replace items with splice method
function htmlColorNames(arr) {
  //  console.log(arr);
  arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
  return arr;
}

/*console.log(
  htmlColorNames([
    "DarkGoldenRod",
    "WhiteSmoke",
    "LavenderBlush",
    "PaleTurquoise",
    "FireBrick",
  ])
);
*/

// copy array using slice()
function forecast(arr) {
  let newArr = arr.slice(2, 4);
  return newArr;
}
/*
console.log(
  forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])
);
*/

// copy array with spread operator
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }
  return newArr;
}
//console.log(copyMachine([true, false, true], 2));

// combine arrays using spread operator
function spreadOut() {
  let fragment = ["to", "code"];
  let sentence = ["learning", ...fragment, "is", "fun"];
  return sentence;
}
//console.log(spreadOut());

// check for element with indexOf()
function quickCheck(arr, elem) {
  // Only change code below this line
  if (arr.indexOf(elem) == -1) {
    return false;
  } else {
    return true; // Only change code above this line
  }
}

//console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));
//console.log(quickCheck(["squash", "onions", "shallots"], "onions"));

// iterate through array items
function filteredArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    3
  )
);

// nested arrays
let myNestedArray = [
  // Only change code below this line
  ["unshift", false, 1, 2, 3, "complex", "nested"],
  ["loop", "shift", 6, 7, 1000, "method"],
  ["concat", false, true, "spread", "array", ["deep"]],
  ["mutate", 1327.98, "splice", "slice", "push", [["deeper"]]],
  ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth", [[["deepest"]]]],
  // Only change code above this line
];
