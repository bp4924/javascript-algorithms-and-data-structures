function palindrome(str) {
  // strip non-letter characters
  const allLetters = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  // check from start to middle
  const halfLength = Math.ceil(allLetters.length / 2);
  for (let i = 0; i < halfLength; i++) {
    if (allLetters[i] != allLetters[allLetters.length - i - 1]) {
      return false;
    }
  }

  return true;
}

console.log(palindrome("eye")); // return true
console.log(palindrome("_eye")); // true
console.log(palindrome("race car")); //should return true.
console.log(palindrome("not a palindrome")); // should return false.
console.log(palindrome("A man, a plan, a canal. Panama")); // should return true.
console.log(palindrome("never odd or even")); // should return true.
console.log(palindrome("nope")); // should return false.
console.log(palindrome("almostomla")); // should return false.
console.log(palindrome("My age is 0, 0 si ega ym.")); // should return true.
console.log(palindrome("1 eye for of 1 eye.")); // should return false.
console.log(palindrome("0_0 (: /- :) 0-0")); // should return true.
console.log(palindrome("five|_/|four")); //should return false.
