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

// match beginning string patterns
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
result = calRegex.test(rickyAndCal);

// ending string patterns
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
result = lastRegex.test(caboose);

// match all shorthand
quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
result = quoteSample.match(alphabetRegexV2).length;

// match everything but letters and numbers
quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
result = quoteSample.match(nonAlphabetRegex).length;

// match all numbers
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
result = movieName.match(numRegex).length;

// user names
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
result = userCheck.test(username);

// match whitespace uses \s shorthand
// match whitespace uses \S shorthand

// specify upper & lower number of matches
// quantity specifiers
// match lower limit only using {n,}
// match exact only using {n}

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // Change this line
result = ohRegex.test(ohStr);

// check for all or none
let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
result = favRegex.test(favWord);

// lookaheads
// positive ?=...
// negative !?...

let sampleWord = "astron64aut5";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/; // Change this line
result = pwRegex.test(sampleWord);

// mixed grouping
myString = "Franklin Delano Roosevelt";
myRegex = /(Franklin|Eleanor) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/; // Change this line
result = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works

// repeat patterns
let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/; // Change this line
result = reRegex.test(repeatNum);
console.log(result);
