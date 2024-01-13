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

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 0));
