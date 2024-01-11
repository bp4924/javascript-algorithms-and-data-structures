// access an arrayls contents
let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = "boo";
// Only change code above this line
//console.log(myArray);

// add items using push and unshift methods
function mixedNumbers(arr) {
  // Only change code below this line
  arr.push([7, "VIII", 9]);
  arr.unshift("I", 2, "three");
  // Only change code above this line
  return arr;
}
//console.log(mixedNumbers(["IV", 5, "six"]));

// remove items with pop() and shift()
function popShift(arr) {
  let popped = arr.pop(); // Change this line
  let shifted = arr.shift(); // Change this line
  return [shifted, popped];
}

console.log(popShift(["challenge", "is", "not", "complete"]));
