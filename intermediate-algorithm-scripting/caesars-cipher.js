// returm a string off-set by 13 characters

function rot13(str) {
  const step = 13;
  const zValue = 90;
  const aValue = 65;
  let result = "";

  // loop throught string
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    // convert letters to numbers
    let code = char.charCodeAt();

    if (code >= aValue && code <= zValue) {
      // add 13 to number
      code = code + step;
      if (code > zValue) {
        code = code - 26;
      }
      // convert number to character.
      char = String.fromCharCode(code);
    }
    // concat to result
    result = result + char;
  }
  return result;
}

console.log(rot13("SERR PBQR PNZC")); // FREE CODE CAMP
console.log(rot13("SERR CVMMN!")); // FREE PIZZA!
console.log(rot13("SERR YBIR?")); // FREE LOVE?
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); //THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
