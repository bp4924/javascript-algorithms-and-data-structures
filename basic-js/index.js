let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a = a + 12;
b = 9 + b;
c = c + 7;

// +=, -=, *=, /=
// escape character \ for literal quotes
const myStr = 'I am a "double quoted" string inside "double quotes"';

const myName = "Bernie";
const myIntro = "Hello. I am " + myName + " How are you?";

//console.log(myIntro);

// use variables to complete a sentence
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks =
  "My " + myAdjective + " " + myNoun + " " + myAdverb + " " + myVerb + " away."; // Change this line
// Only change code above this line

//console.log(wordBlanks);

// multiple values
// arrays
// arrays of arrays
// array indexes
// access multi-dimensional arrays with indexes

const myMultiArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myMultiArray[2][1];
//console.log(myData);

// array push method
const myPushArray = [
  ["John", 23],
  ["cat", 2],
];
myPushArray.push(["dog", 3]);

//console.log(myPushArray);

// array.pop() removes the last item
// array.shift() removes the first item
// array.unshift() adds an item to the beginning of the array
const myArray = [
  ["John", 23],
  ["cat", 2],
];

const myShift = myArray.unshift(["Paul", 35]);
//console.log(myShift);
//console.log(myArray);

// >>>> functions <<<<
function reusableFunction() {
  console.log("Hi World");
}

reuseablFunction();
