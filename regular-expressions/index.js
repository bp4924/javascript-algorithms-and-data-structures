// test string
let myString1 = "Hello, World!";
let myRegex = /Hello/;
let resultTest = myRegex.test(myString1);
//console.log(result); // Change this line

//match literal strings
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result2 = waldoRegex.test(waldoIsHiding);
//console.log(result);

// ignore case
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
let result3 = fccRegex.test(myString);

// match() method
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result4 = extractStr.match(codingRegex); // Change this line

// find more than first match
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result5 = twinkleStar.match(starRegex); // Change this line

// wildcard character
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result6 = unRegex.test(exampleStr);

// character classes
let quoteSample1 =
  "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result7 = quoteSample1.match(vowelRegex); // Change this line

// match range of characters
let quoteSample2 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result8 = quoteSample2.match(alphabetRegex); // Change this line

// characters and numbers
let quoteSample = "Blueberry 3.141592653s are delicious.";
myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

// negated characters
quoteSample = "3 blind mice.";
myRegex = /[^0-9 .]/gi; // Change this line
result = result = quoteSample.match(myRegex); // Change this line

// match consecutive characters
let difficultSpelling = "Mississippi";
myRegex = /s+/gi; // Change this line
result = difficultSpelling.match(myRegex);

// lazy matching
let text = "<h1>Winter is coming</h1>";
myRegex = /<.*?>/; // Change this line
result = text.match(myRegex);

console.log(result);
