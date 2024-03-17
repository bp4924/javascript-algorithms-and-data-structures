function palindrome(str) {
  // strip non-letter characters

  //const arrStr = str.split("");
  //  console.log(arrStr);
  for (let i = 0; i < str.length; i++) {
    if (str[i] != str[str.length - i - 1]) {
      return false;
    }
  }

  //  console.log(reverseStr);
  return true;
}

console.log(palindrome("eye")); // return true
