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

//
