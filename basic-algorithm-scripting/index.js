const {
  NetworkAccessProfileNetworkListInstance,
} = require("twilio/lib/rest/supersim/v1/networkAccessProfile/networkAccessProfileNetwork");

//convert celcius to fahrenheit
let fahrenheit = 0;
function convertCtoF(celsius) {
  fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}
convertCtoF(30);
//console.log(fahrenheit);

// reverse string
function reverseString(str) {
  return str.split("").reverse().join("");
}
//console.log(reverseString("hello"));

// factorialize
function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  for (let i = num - 1; i > 0; i--) {
    num = num * i;
    console.log(i, num);
  }
  return num;
}
//console.log(factorialize(0));

// longest word
function findLongestWordLength(str) {
  let newStr = str.split(" ");
  let length = 0;
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i].length > length) {
      length = newStr[i].length;
    }
  }
  return length;
}
/*
console.log(
  findLongestWordLength(
    "What is the average airspeed velocity of an unladen swallow"
  )
);*/

// return largest number in array

function largestOfFour(arr) {
  let newArr = [];
  let currVal = 0;
  for (let i = 0; i < arr.length; i++) {
    let prevVal = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      currVal = arr[i][j];
      if (currVal > prevVal) {
        prevVal = currVal;
      }
    }
    newArr.push(prevVal);
  }
  return newArr;
}
/*
console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
*/

// confirm ending using substring methods
function confirmEnding(str, target) {
  //console.log(str.length);
  if (str.substring(str.length - target.length) == target) {
    return true;
  }
  return false;
}
//console.log(confirmEnding("Bastian", "n"));

// repeat a string
function repeatStringNumTimes(str, num) {
  if ((str == "") | (num <= 0)) {
    return "";
  }
  let result = str;
  for (let i = 0; i < num - 1; i++) {
    result = result + str;
  }
  return result;
}
//console.log(repeatStringNumTimes("", 2));

// truncate a string
function truncateString(str, num) {
  let newStr = str.substring(0, num);
  if (str.length > num) {
    newStr = newStr + "...";
  }
  return newStr;
}
//console.log(truncateString("A-tisket a-tasket A green and yellow basket", 0));

// finders keepers
function findElement(arr, func) {
  let num = 0;
  for (i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }
  return undefined;
}

//console.log(findElement([1, 5, 3, 7], (num) => num % 2 === 0));

// boolean test
function booWho(bool) {
  if ((bool === true) | (bool === false)) {
    return true;
  }
  return false;
}
//console.log(booWho(0));

// title case
function titleCase(str) {
  const newTitle = str.split(" ");
  const updatedTitle = [];
  for (let st in newTitle) {
    updatedTitle[st] =
      newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
  }
  return updatedTitle.join(" ");
}
//console.log(titleCase("I'm a little tea pot"));

// slice and splice
function frankenSplice(arr1, arr2, n) {
  let localArr = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArr.splice(n, 0, arr1[i]);
    n++;
  }

  return localArr;
}
//console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

// falsy
function bouncer(arr) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}
// console.log(bouncer([7, "ate", "", false, 9]));

// find index
function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
  }
  return arr.length;
}
//console.log(getIndexToIns([10, 20, 30, 40, 50], 30));

// mutations
function mutation(arr) {
  let test = arr[1].toLowerCase();
  let target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) {
      return false;
    }
  }
  return true;
}
// console.log(mutation(["hello", "heLlllo"]));

// chunk - split array into smaller arrays
function chunkArrayInGroups(arr, size) {
  let result = [];
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % size !== size - 1) {
      temp.push(arr[i]);
    } else {
      temp.push(arr[i]);
      result.push(temp);
      temp = [];
    }
  }
  if (temp.length !== 0) {
    result.push(temp);
  }
  return result;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 3));
