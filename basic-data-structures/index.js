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
