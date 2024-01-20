/*
// using higher order functions to solve complex problems
const squareList = (arr) => {
  // Only change code below this line
  return arr
    .filter((num) => num > 0 && num % parseInt(num) === 0)
    .map((num) => Math.pow(num, 2));

  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2, 11]);
console.log(squaredIntegers);
*/
/*
// sorting
function alphabeticalOrder(arr) {
  // Only change code below this line

  return arr.sort(function (a, b) {
    return a === b ? 0 : a < b ? -1 : 1;
  });
  // Only change code above this line
}

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));
*/
/*
// nonMutating sort
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
  return [].concat(arr).sort(function (a, b) {
    return a - b;
  });

  // Only change code above this line
}

console.log(nonMutatingSort(globalArray));
*/
/*
// split method
function splitify(str) {
  // Only change code below this line
  return str.split(/\W/);

  // Only change code above this line
}

console.log(splitify("Hello World,I-am code"));
*/
/*
// combine strings using join method
function sentensify(str) {
  // Only change code below this line
  return str.split(/\W/).join(" ");

  // Only change code above this line
}

console.log(sentensify("May-the-force-be-with-you"));
*/

//// Only change code below this line
function urlSlug(title) {
  return title.trim().toLowerCase().trim().split(/\s+/).join("-");
}
// Only change code above this line
console.log(urlSlug(" A Mind Needs  Books Like A Sword Needs A Whetstone"));
