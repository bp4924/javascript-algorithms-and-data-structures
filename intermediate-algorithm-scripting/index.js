/*// sum all in range
function sumAll(arr) {
  const maxArr = Math.max(...arr);
  const minArr = Math.min(...arr);
  let sum = 0;
  for (let i = minArr; i < maxArr + 1; i++) {
    sum = sum + i;
  }

  return sum;
}

console.log(sumAll([5, 10]));
*/
/*
// diff two arrays
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter((item) => !arr1.includes(item) || !arr2.includes(item));
}

console.log(
  diffArray(
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )
);
*/
/*
// seek and destroy
function destroyer(arr) {
  const valuesToRemove = Object.values(arguments).slice(1);
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let removeElement = false;
    for (let j = 0; j < valuesToRemove.length; j++) {
      if (arr[i] === valuesToRemove[j]) {
        removeElement = true;
      }
    }
    if (!removeElement) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
*/
/*
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
function whatIsInAName(collection, source) {
  const collectionMatches = [];

  for (let i = 0; i < collection.length; i++) {
    let foundMismatch = false;

    for (const sourceProp in source) {
      if (collection[i][sourceProp] !== source[sourceProp]) {
        foundMismatch = true;
      }
    }
    if (!foundMismatch) {
      collectionMatches.push(collection[i]);
    }
  }
  return collectionMatches;
}
console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
  )
);
*/
/*
// spinal case
function spinalCase(title) {
  title = title.replace(/([a-z])([A-Z])/g, "$1 $2");
  const regex = /\s+|_+/g;

  return title.replace(regex, "-").toLowerCase();
}

console.log(spinalCase("This Is Spinal Tap"));
*/
/*
// pig latin
function translatePigLatin(str) {
  const regex = /^[^aeiou]+/;
  // find consecutive not vowels starting the word
  const consonants = str.match(regex);

  return consonants !== null
    ? // move starting consonants to end and add ay
      str.replace(regex, "").concat(consonants).concat("ay")
    : // add way to end if word starts with a vowel
      str.concat("way");
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("rhythm"));
*/
/*
// search and replace
function myReplace(str, before, after) {
  //const regex = /^[A-Z/]/;
  const index = str.indexOf(before);

  if (str[index] === str[index].toUpperCase()) {
    after = after.replace(after[0], after[0].toUpperCase());
  } else {
    after = after.toLowerCase();
  }
  return str.replace(before, after);
}

console.log(
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "Leaped")
);
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));

console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));

console.log(myReplace("His name is Tom", "Tom", "john"));
*/
/*
// return pairs from strings
function pairElement(str) {
  const matchWithBasePair = function (char) {
    switch (char) {
      case "A":
        return ["A", "T"];
      case "T":
        return ["T", "A"];
      case "C":
        return ["C", "G"];
      case "G":
        return ["G", "C"];
    }
  };

  // Find pair for every character in the string
  const pairs = [];
  for (let i = 0; i < str.length; i++) {
    pairs.push(matchWithBasePair(str[i]));
  }
  return pairs;
}

console.log(pairElement("GCG"));
console.log(pairElement("ATCGA"));
console.log(pairElement("TTGAG"));
console.log(pairElement("CTCTA"));
*/
/*
// find missing letter
function fearNotLetter(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const startLetterIndex = alphabet.indexOf(str[0]);
  let missingLetter = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== alphabet[i + startLetterIndex]) {
      missingLetter = alphabet[i + startLetterIndex];
      return missingLetter;
    }
  }
  return undefined;
}

console.log(fearNotLetter("abce"));
console.log("----");
console.log(fearNotLetter("abcdefghjklmno"));
console.log("----");
console.log(fearNotLetter("stvwx"));
console.log("----");
console.log(fearNotLetter("bcdf"));
console.log("----");
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
*/
/*
// sorted union
function uniteUnique(arr) {
  const newArr = [];
  //  console.log(arr);
  const args = [...arguments];
  for (let i = 0; i < args.length; i++) {
    //    console.log(`arr: ${arr[i]} length: ${arr[i].length}`);

    for (let j = 0; j < args[i].length; j++) {
      if (!newArr.includes(args[i][j])) {
        newArr.push(args[i][j]);
      }
    }
  }
  return newArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6]));
console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]));
*/

// convert to symbols to html
function convertHTML(str) {
  //elements and their replacements
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };

  return str
    .split("")
    .map((entity) => htmlEntities[entity] || entity) // replace if found, else leave
    .join("");
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML("Sixty > twelve"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Schindler's List"));
console.log(convertHTML("<>"));
console.log(convertHTML("abc"));
