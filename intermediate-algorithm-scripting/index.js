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
  console.log(str.length);
  let newStr = [];
  for (let i = 0; i < str.length - 1; i++) {
    for (let j = 0; j < str.length - 1; [j++]) {
      newStr = str[i] + str[i + 1];
    }

    console.log(newStr.split());
  }
  return str;
}

console.log(pairElement("GCG"));
console.log(pairElement("ATCGA"));
console.log(pairElement("TTGAG"));
console.log(pairElement("CTCTA"));
*/
