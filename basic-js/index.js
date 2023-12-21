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
  //  console.log("Hi World");
}

reusableFunction();

//return value of function
function timesFive(num) {
  return num * 5;
}

/*console.log(timesFive(5));
console.log(timesFive(2));
console.log(timesFive(0));
*/
// scope
// local scope for variables declared inside function
// global scope for variables declared outside function

// assign returned value when function is called
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

processed = processArg(7);
//console.log(processed);

// queue
function nextInLine(arr, item) {
  arr.push(item);
  const removed = arr.shift();
  return removed;
}

let testArr = [1, 2, 3, 4, 5];
/*
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
*/

// if statements

function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}

//console.log(trueOrFalse(true));
//console.log(trueOrFalse(false));

// comparisons
// equality operators == & ===
// not equal != & !==
// >, <, <=, =>

function testEqual(val) {
  if (val == 12) {
    // Change this line

    return "Equal";
  }
  return "Not Equal";
}

console.log();
//console.log(testEqual(12));

// logical and (&&), logical or (||)
// else if statements

function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  }
  return "Huge";
  // Only change code above this line
}

// console.log(testSize(22));

// golf code

const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

function golfScore(par, strokes) {
  if (strokes === 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes <= par) {
    return names[3];
  } else if (strokes <= par + 1) {
    return names[4];
  } else if (strokes <= par + 2) {
    return names[5];
  } else {
    return names[6];
  }
}

// console.log(golfScore(5, 5));

// switch/case statements and default value
function switchofStuff(val) {
  let answer = "";
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }

  return answer;
}

// console.log(switchofStuff("b"));

// sequential cases
function sequentialSizes(val) {
  let answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
  }

  return answer;
}

// console.log(sequentialSizes(8));

// card counter
let count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 7:
    case 8:
    case 9:
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  let decision;
  if (count > 0) {
    decision = "Bet";
  } else {
    decision = "Hold";
  }
  return count + " " + decision;
  // Only change code above this line
}
/*
console.log(cc(2));
console.log(cc(3));
console.log(cc(7));
console.log(cc("K"));
console.log(cc("A"));
*/

// objects
// value lookup

// Setup
function phoneticLookup(val) {
  let result = "";
  //  console.log(val);
  // Only change code below this line
  const lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };

  result = lookup[val];

  // Only change code above this line
  return result;
}

//console.log(phoneticLookup("bravo"));

// accessing nested arrays
const myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];

const secondTree = myPlants[1].list[1];
// console.log(secondTree);

// -- Record Collection --
// Setup
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (value === "") {
    delete records[id][prop];
  } else if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && value !== "") {
    if (records[id].hasOwnProperty("tracks") == false) {
      records[id][prop] = [];
    }
    records[id][prop].push(value);
  }
  return records;
}

//console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));

/*console.log(
  updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")
);

*/
// Setup
const myArray2 = [];

// Only change code below this line.
let i = 5;
while (i >= 0) {
  myArray2.push(i);
  i--;
}
//console.log(myArray2);

// Setup
const myArray3 = [];

// Only change code below this line
for (let i = 0; i < 5; i++) {
  myArray3[i] = i + 1;
}

//console.log(myArray3);

// nested loops
function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}

/*
console.log(
  multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7],
  ])
);
*/

// do ... while loop

// recursive function
function sum(arr, n) {
  // Only change code below this line
  if (n <= 0) {
    return 1;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
  // Only change code above this line
}

// profile lookup
// Setup
const contacts = [
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

//console.log(contacts.length);
function lookUpProfile(name, prop) {
  // Only change code below this line

  for (let x = 0; x < contacts.length; x++) {
    if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) {
        return contacts[x][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact " + name;
}

/*
console.log(lookUpProfile("Akira", "lastName"));
console.log(lookUpProfile("Kristian", "lastName"));
console.log(lookUpProfile("Sherlock", "likes"));
console.log(lookUpProfile("Harry", "likes"));
*/

// generate random numbers

function randomRange(myMin, myMax) {
  number = Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  return number;
}

// ternary operator

// countdown using recursion
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const count = countdown(n - 1);
    count.unshift(n);
    return count;
  }
}

// console.log(countdown(5));

function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const range = rangeOfNumbers(startNum, endNum - 1);
    range.push(endNum);
    return range;
  }
}

console.log(rangeOfNumbers(2, 9));
